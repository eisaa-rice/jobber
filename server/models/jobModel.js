// JobModel
import db from "../config/db.js";

export const findAll = async (userId) => {
  try {
    const [rows] = await db.query(
      `SELECT * FROM jobs
      WHERE user_id = ?`,
      [userId]
    );

    return rows;
  } catch (err) {
    console.log(err);
  }
};

export const create = async (
  id,
  userId,
  company,
  position,
  type,
  status,
  link,
  notes
) => {
  try {
    await db.query(
      `INSERT INTO jobs (id, user_id, company, position, job_type, application_status, job_link, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, userId, company, position, type, status, link, notes]
    );

    const [rows] = await db.query(
      `SELECT * FROM jobs
      WHERE id = ?`,
      [id]
    );

    return rows;
  } catch (err) {
    console.log(err);
  }
};

export const update = async (id, userId, fields, values) => {
  try {
    console.log("job and user id:", id, userId);

    const sql = `UPDATE jobs
      SET ${fields.join(", ")}
      WHERE id = ? AND user_id = ?`;

    console.log(sql);

    // a field will look like "col_name = ?"
    const [result] = await db.query(
      `UPDATE jobs
      SET ${fields.join(", ")}
      WHERE id = ? AND user_id = ?`,
      [...values, id, userId]
    );

    console.log("result:", JSON.stringify(result, null, 2));

    // if no rows are affected (wrong user, invalid job id, etc.)
    if (result.affectedRows === 0) {
      return null;
    }

    const [rows] = await db.query(
      `SELECT * FROM jobs
      WHERE id = ? AND user_id = ?`,
      [id, userId]
    );

    return rows;
  } catch (err) {
    console.log(err);
  }
};

export const remove = async (userId, id) => {
  try {
    await db.query(``);

    const [rows] = await db.query(``);

    return rows;
  } catch (err) {
    console.log(err);
  }
};
