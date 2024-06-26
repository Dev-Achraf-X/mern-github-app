import express from "express";
import {
  getLikes,
  getUserProfileAndRepos,
  likeProfile,
} from "../controllers/user.controller.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
// TODO => GET Likes (who liked our profile)
router.get("/likes", ensureAuthenticated, getLikes);
// TODO => POST Like a profile
router.post("/like/:username", ensureAuthenticated, likeProfile);

export default router;
