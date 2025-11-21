import * as JobModel from "../models/jobModel.js";

import { v4 as uuidv4 } from "uuid";

export const getAllJobs = async (req, res, next) => {
  try {
    const userId = req.user.id;

    res.status(200).json({ message: "get all jobs stub" });
  } catch (err) {
    next(err);
  }
};

export const createJob = async (req, res, next) => {
  try {
    const { userId, job } = req.body;
  } catch (err) {
    next(err);
  }
};

export const updateJob = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const { userId } = req.body;
  } catch (err) {
    next(err);
  }
};

export const deleteJob = async (req, res, next) => {
  try {
    const { userId, jobId } = req.body;
  } catch (err) {
    next(err);
  }
};
