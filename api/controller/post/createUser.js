import { db } from "../../db.js";
import bcrypt from "bcryptjs";
export const createUser = (req, res) => {
  const { name, password, email } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const q = `INSERT INTO users (name, password, email)
    VALUES (?, ?, ?)`;

  db.query(q, [name, hashedPassword, email], (error, data) => {
    if (error) return res.status(400).json(error);
    return res.status(200).json(data);
  });
};
