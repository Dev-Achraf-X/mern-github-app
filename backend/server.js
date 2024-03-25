import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";

import "./passport/github.auth.js";
import userRoutes from "./routes/user.route.js";
import userAuth from "./routes/auth.route.js";
import exploreRoutes from "./routes/explore.route.js";
import connectToMongoDB from "./db/connectMongoDB.js";
import session from "express-session";

dotenv.config();

const app = express();
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/auth", userAuth);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(5000, () => {
  console.log("App is runing on http://localhost:5000");
  connectToMongoDB();
});
