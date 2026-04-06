import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";
import emitNotification from "../utils/emitNotification.js";
import { getIO, getReceiverSocketId } from "../socket/socket.js";

export const getMessagesByConversation = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const { conversationId } = req.params;

    const conversation = await Conversation.findById(conversationId);
    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    const isParticipant =
      String(conversation.claimantId) === String(currentUserId) ||
      String(conversation.reportOwnerId) === String(currentUserId);

    if (!isParticipant) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    const messages = await Message.find({ conversationId }).sort({
      createdAt: 1,
    });

    return res.status(200).json({ messages });
  } catch (error) {
    console.log("getMessagesByConversation error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const { conversationId } = req.params;
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({ message: "Message text is required" });
    }

    const conversation = await Conversation.findById(conversationId);
    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    const isParticipant =
      String(conversation.claimantId) === String(currentUserId) ||
      String(conversation.reportOwnerId) === String(currentUserId);

    if (!isParticipant) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    if (conversation.status !== "accepted") {
      return res.status(400).json({
        message: "You can only send messages in accepted conversations",
      });
    }

    const receiverId =
      String(conversation.claimantId) === String(currentUserId)
        ? conversation.reportOwnerId
        : conversation.claimantId;

    const newMessage = await Message.create({
      conversationId,
      senderId: currentUserId,
      receiverId,
      text: text.trim(),
      messageType: "normal",
      isSeen: false,
    });

    conversation.lastMessage = text.trim();
    conversation.lastMessageAt = new Date();
    await conversation.save();

    await emitNotification({
      userId: receiverId,
      senderId: currentUserId,
      conversationId,
      reportId: conversation.reportId,
      type: "new_message",
      text: "You received a new message",
    });

    const receiverSocketId = getReceiverSocketId(receiverId);
    const io = getIO();

    if (receiverSocketId && io) {
      io.to(receiverSocketId).emit("new_message", newMessage);
    }

    return res.status(201).json({
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.log("sendMessage error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const markMessagesSeen = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const { conversationId } = req.params;

    const conversation = await Conversation.findById(conversationId);
    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    const isParticipant =
      String(conversation.claimantId) === String(currentUserId) ||
      String(conversation.reportOwnerId) === String(currentUserId);

    if (!isParticipant) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    const unseenMessages = await Message.find({
      conversationId,
      receiverId: currentUserId,
      isSeen: false,
    }).select("_id senderId");

    if (!unseenMessages.length) {
      return res.status(200).json({
        message: "No unseen messages",
        updatedMessageIds: [],
      });
    }

    const updatedMessageIds = unseenMessages.map((msg) => String(msg._id));

    await Message.updateMany(
      {
        _id: { $in: updatedMessageIds },
      },
      {
        $set: { isSeen: true },
      },
    );

    const io = getIO();

    const senderIds = [
      ...new Set(unseenMessages.map((msg) => String(msg.senderId))),
    ];

    senderIds.forEach((senderId) => {
      const senderSocketId = getReceiverSocketId(senderId);

      if (senderSocketId && io) {
        io.to(senderSocketId).emit("messages_seen", {
          conversationId: String(conversationId),
          messageIds: updatedMessageIds,
        });
      }
    });

    return res.status(200).json({
      message: "Messages marked as seen",
      updatedMessageIds,
    });
  } catch (error) {
    console.log("markMessagesSeen error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
