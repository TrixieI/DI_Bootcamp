import express from "express";
import { Register, Login } from "../controllers/Users.js";
import { VerifyToken } from "../controllers/VerifyToken.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/token", VerifyToken, (req, res) => {
  res.status(200).json({ msg: "accessToken" });
});

export default router;
