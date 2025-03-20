import { db } from "../../db.js";

export const createCategory = (req, res) => {
  const { category_name, icon_id, owner_id } = req.body;
  const q = `INSERT INTO category (category_name, icon_id, owner_id)
    VALUES (?, ?, ?)`;
  db.query(q, [category_name, icon_id, owner_id], (err, data) => {
    if (err) return res.status(200).json(err);
    return res.status(200).json(data);
  });
};
