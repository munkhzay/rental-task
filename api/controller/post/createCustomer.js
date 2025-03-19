import { db } from "../../db.js";

export const createRental = (req, res) => {
  const { user_id, customer_email, rental_date, rent, payment_type } = req.body;
  const q = `INSERT INTO req_rental (user_id, rental_date, customer_email, payment_status, rent) 
   VALUES (?, ?, ?, ?, ?);
`;
  db.query(
    q,
    [user_id, rental_date, customer_email, payment_type, rent],
    (error, data) => {
      if (error) return res.status(400).json(error);

      return res.status(200).json({ data });
    },
  );
};
