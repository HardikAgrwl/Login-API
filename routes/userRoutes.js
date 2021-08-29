import express from "express";
import { get_user, login, register } from "../controllers/userController.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", auth, get_user);

export default router;
