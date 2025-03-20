import { db } from "../../db.js";

export const getRental = (req, res) => {
  const { id } = req.params;
  const q = `SELECT * FROM rental WHERE owner_id=?`;
  db.query(q, [id], (error, datas) => {
    if (error) return res.status(400).json(error);
    return res.status(200).json(datas);
  });
};
