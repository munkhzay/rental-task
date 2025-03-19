import { db } from "../../db.js";

export const getUsers = (req, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (error, data) => {
    if (error) return res.json(error);

    return res.status(200).json(data);
  });
};
