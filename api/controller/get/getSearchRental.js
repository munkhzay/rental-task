import { db } from "../../db.js";

export const searchRental = (req, res) => {
  const { id, value } = req.body;

  const q = `
SELECT * 
FROM req_rental 
WHERE user_id = ? 
  AND (rent = ?  OR customer_email = ?)

UNION ALL

SELECT * 
FROM req_rental
WHERE user_id = ? 
  AND NOT EXISTS (
    SELECT 1 
    FROM req_rental 
    WHERE user_id = ? 
      AND (rent = ?  OR customer_email = ?)
  )
       ORDER BY reg_date DESC`;

  db.query(
    q,
    [id, value, value, value, id, id, value, value, value],
    (err, data) => {
      if (err) return res.status(400).json(err);

      if (data?.length === 0) {
        const refreshQuery = `SELECT * FROM req_rental WHERE user_id=?`;

        db.query(refreshQuery, [id], (err, data) => {
          if (err) return res.status(400).json(err);
          return res.status(200).json(data);
        });
      } else {
        return res.status(200).json(data);
      }
    },
  );
};
