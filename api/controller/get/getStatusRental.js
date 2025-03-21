import { db } from "../../db.js";

export const statusRental = (req, res) => {
  const { id , mood} = req.params;
  console.log(mood, id)
  const q = `SELECT * FROM rental WHERE mood=? AND owner_id=?`;
  db.query(q, [mood, id], (err, data) => {
    console.log(data)
    if (err) return res.status(400).json(err);
    return res.status(200).json(data);
  });
};
