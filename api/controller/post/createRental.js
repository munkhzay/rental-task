import { db } from "../../db.js";

export const createRental = (req, res) => {
  const {
    user_id,
    customer_email,
    rental_date,
    rent,
    payment_type,
    category_id,
    category_name,
  } = req.body;
  const q = `INSERT INTO rental (owner_id, rental_date, owner_email, mood, rent, category_id, category_name) 
   VALUES (?, ?, ?, ?, ?, ?, ?);
`;
  db.query(
    q,
    [
      user_id,
      rental_date,
      customer_email,
      payment_type,
      rent,
      category_id,
      category_name,
    ],
    (error, data) => {
      console.log(error);
      if (error) return res.status(400).json(error);

      return res.status(200).json({ data });
    },
  );
};
