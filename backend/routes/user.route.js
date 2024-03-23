import express from "express";
import { getUserProfileAndRepos } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
// TODO => GET Likes (who liked our profile)
// TODO => POST Like a profile

export default router;
