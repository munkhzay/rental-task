import { db } from "../../db.js";

export const updateRental = (req, res) => {
  const {
    rental_date,
    customer_email,
    rent,
    payment_status,
    id,
    category_id,
    category_name,
  } = req.body;

  const getQuery = `SELECT rental_date, owner_email, rent, mood, category_id, category_name FROM rental WHERE id = ?`;

  db.query(getQuery, [id], (error, results) => {
    if (error) return res.status(500).json(error);

    const oldData = results[0];

    const updatedRentalDate = rental_date || oldData.rental_date;
    const updatedEmail = customer_email || oldData.owner_email;
    const updatedRent = rent !== undefined ? rent : oldData.rent;
    const updatedPaymentStatus = payment_status || oldData.mood;
    const updateCategoryId = category_id || oldData.category_id;
    const updateCategoryName = category_name || oldData.category_name;

    const updateQuery = `
      UPDATE rental 
      SET rental_date = ?, owner_email = ?, rent = ?, mood = ?, category_id=?, category_name=?
      WHERE id = ?
    `;

    db.query(
      updateQuery,
      [
        updatedRentalDate,
        updatedEmail,
        updatedRent,
        updatedPaymentStatus,
        updateCategoryId,
        updateCategoryName,
        id,
      ],
      (updateError, data) => {
        console.log(updateError);
        if (updateError) return res.status(500).json(updateError);

        res.status(200).json({ data });
      },
    );
  });
};
