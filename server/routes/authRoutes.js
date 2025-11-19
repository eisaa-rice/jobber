import { Router } from "express";

const router = Router();

// import controller functions here later
// import { login, register } from "../controllers/authController.js";

router.post("/login", (req, res) => {
  res.json({ message: "login stub" });
});

router.post("/register", (req, res) => {
  res.json({ message: "register stub" });
});

export default router;
