import { db } from "../../db.js";

export const getCategory = (req, res) => {
  const { id } = req.params;
  const q = `SELECT * FROM category WHERE owner_id=?`;

  db.query(q, [id], (err, data) => {
    if (err) return res.status(400).json(err);

    return res.status(200).json(data);
  });
};
