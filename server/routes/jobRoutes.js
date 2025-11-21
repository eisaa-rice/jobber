import {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobsController.js";
import requireAuth from "../middleware/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.get("/", requireAuth, getAllJobs);

router.post("/", requireAuth, createJob);

router.put("/:id", requireAuth, updateJob);

router.delete("/:id", requireAuth, deleteJob);

export default router;
