import { db } from "../../db.js";

export const deleteRental = (req, res) => {
  const { id } = req.params;
  const q = `DELETE FROM req_rental WHERE id=?`;
  db.query(q, [id], (error, data) => {
    if (error) return res.status(400).json(error);
    return res.json({ data });
  });
};
