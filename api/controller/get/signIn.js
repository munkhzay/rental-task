import { db } from "../../db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();
export const signIn = (req, res) => {
  const { email, password } = req.body;
  const q = `SELECT * FROM users
WHERE email=?`;

  db.query(q, [email], (error, user) => {
    if (error) return res.status(500).json(error);

    if (user.length === 0)
      return res.status(404).json({ message: "Таны имайл хаяг буруу байна" });

    const matchPassword = bcrypt.compareSync(password, user[0].password);
    if (!matchPassword)
      return res.status(400).json({ message: "Нууц үг буруу байна" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.status(200).json({ token: token, user: user });
  });
};
