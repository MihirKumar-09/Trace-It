import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

// Store user id in session;
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Get user from session;
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Set up google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({
          $or: [
            { googleId: profile.id },
            { email: profile.emails?.[0]?.value },
          ],
        });
        console.log("Google Profile:", profile);

        // Create new User and store it in DB
        if (!user) {
          user = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0]?.value || "",
            avatar: profile.photos[0]?.value || "",
          });
        } else {
          // update missing fields
          if (!user.googleId) user.googleId = profile.id;
          if (!user.avatar) user.googleId = profile.photos?.[0]?.value;
          if (!user.name) user.name - profile.displayName;

          await user.save();
        }
        return done(null, user); //Only user no token
      } catch (err) {
        done(err, null);
      }
    },
  ),
);
export default passport;
