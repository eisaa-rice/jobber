import { APPLICATION_STATUSES, JOB_TYPES } from "../constants/jobEnums.js";
import * as JobModel from "../models/jobModel.js";

import { v4 as uuidv4 } from "uuid";

export const getAllJobs = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const data = await JobModel.findAll(userId);

    return res.status(200).json({
      message: "Successfully retrieved all jobs.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const createJob = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { company, position, type, status, link, notes } = req.body;

    if (!company || !position) {
      return res
        .status(400)
        .json({ message: "At least company and position are required." });
    }

    if (type && !JOB_TYPES.includes(type)) {
      res.status(400).json({
        message: `Invalid job type, types must be: ${JOB_TYPES.join(", ")}.`,
      });
    }

    if (status && !APPLICATION_STATUSES.includes(status)) {
      res.status(400).json({
        message: `Invalid application status, statuses must be: ${APPLICATION_STATUSES.join(
          ", "
        )}.`,
      });
    }

    const id = uuidv4();

    const data = await JobModel.create(
      id,
      userId,
      company,
      position,
      type || null,
      status || null,
      link || null,
      notes || null
    );

    return res.status(201).json({
      message: "Successfully created new job.",
      data,
    });
  } catch (err) {
    next(err);
  }
};

export const updateJob = async (req, res, next) => {
  try {
    const id = req.params.id;
    const userId = req.user.id;
    const { company, position, type, status, link, notes } = req.body;

    console.log("id:", id);

    if (type && !JOB_TYPES.includes(type)) {
      res.status(400).json({
        message: `Invalid job type, types must be: ${JOB_TYPES.join(", ")}.`,
      });
    }

    if (status && !APPLICATION_STATUSES.includes(status)) {
      res.status(400).json({
        message: `Invalid application status, statuses must be: ${APPLICATION_STATUSES.join(
          ", "
        )}.`,
      });
    }

    const fields = [];
    const values = [];

    if (company) {
      fields.push("company = ?");
      values.push(company);
    }

    if (position) {
      fields.push("position = ?");
      values.push(position);
    }

    if (type) {
      fields.push("job_type = ?");
      values.push(type);
    }

    if (status) {
      fields.push("application_status = ?");
      values.push(status);
    }

    if (link) {
      fields.push("job_link = ?");
      values.push(link);
    }

    if (notes) {
      fields.push("notes = ?");
      values.push(notes);
    }

    console.log("fields and values:", fields, values);

    const data = await JobModel.update(id, userId, fields, values);

    if (!data) {
      return res.status(404).json({ message: "Job not found for this user." });
    }

    return res.status(200).json({ message: "Successfully updated job.", data });
  } catch (err) {
    next(err);
  }
};

export const deleteJob = async (req, res, next) => {
  try {
    const id = req.params.id;
    const userId = req.user.id;

    const deleted = await JobModel.remove(id, userId);

    if (!deleted) {
      return res.status(404).json({ message: "Job not found for this user." });
    }

    return res.status(200).json({ message: "Successfully deleted job." });
  } catch (err) {
    next(err);
  }
};
