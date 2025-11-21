// UserModel
import db from "../config/db.js";

export const create = async (id, name, email, passwordHash) => {
  try {
    await db.query(
      `INSERT INTO users (id, user_name, email, password_hash)
      VALUES (?, ?, ?, ?)`,
      [id, name, email, passwordHash]
    );

    const [rows] = await db.query(
      "SELECT id, user_name, email, created_at FROM users WHERE id = ?",
      [id]
    );

    return rows[0];
  } catch (err) {
    console.log(err);
  }
};

export const findByEmail = async (email) => {
  try {
    const [rows] = await db.query(
      `SELECT * FROM users 
      WHERE email = ?`,
      [email]
    );

    return rows[0] ?? null;
  } catch (err) {
    console.log(err);
  }
};
