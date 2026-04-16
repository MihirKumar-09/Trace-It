import Report from "../models/reportSchema.js";
import User from "../models/User.js";

//!=======TOGGLE FAVORITE=========
export const FavoriteToggle = async (req, res) => {
  try {
    const { reportId } = req.params;
    const userId = req.user._id;

    // Check is that report is exist or not?
    const reportExists = await Report.findById(reportId);
    if (!reportExists) {
      return res.status(404).json({ message: "Report not found" });
    }

    const user = await User.findById(userId);

    // Check already favorite;
    const alreadyFavorite = user.favorites.some(
      (favId) => favId.toString() === reportId,
    );

    if (alreadyFavorite) {
      user.favorites = user.favorites.filter(
        (favId) => favId.toString() !== reportId,
      );

      await user.save();

      return res.status(200).json({
        message: "Removed from favorites",
        isFavorite: false,
      });
    }

    user.favorites.push(reportId);
    await user.save();

    return res
      .status(200)
      .json({ message: "Added to favorites", isFavorite: true });
  } catch (err) {
    console.log("Toggle favorite error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//!========GET ALL FAVORITE========
export const AllFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("favorites");

    return res.status(200).json({
      favorites: user.favorites,
    });
  } catch (err) {
    console.log("Get favorites error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
