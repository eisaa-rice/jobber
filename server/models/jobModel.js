// JobModel
import db from "../config/db.js";

export const create = async (userId) => {
  try {
    const [rows] = await db.query(
      `SELECT * FROM jobs
      WHERE `
    );

    console.log(rows);
  } catch (err) {
    console.log(err);
  }
};

export const findAll = async (userId) => {
  try {
    const [rows] = await db.query("");
  } catch (err) {
    console.log(err);
  }
};

export const update = async (userId, jobId) => {
  try {
    const [rows] = await db.query("");
  } catch (err) {
    console.log(err);
  }
};

export const remove = async (userId, jobId) => {
  try {
    const [rows] = await db.query("");
  } catch (err) {
    console.log(err);
  }
};
