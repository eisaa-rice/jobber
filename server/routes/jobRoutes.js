import { Router } from "express";

const router = Router();

// import controller functions here later
// import { } from "../controllers/jobsController.js";

router.get("/", (req, res) => {
  res.json({ message: "get all jobs stub" });
});

router.post("/", (req, res) => {
  res.json({ message: "create a new job stub" });
});

router.put("/:id", (req, res) => {
  res.json({ message: "update a job stub" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "delete a job stub" });
});

export default router;
