import { db } from "../../db.js";

export const updateRental = (req, res) => {
  const { rental_date, customer_email, rent, payment_status, id } = req.body;

  const getQuery = `SELECT rental_date, customer_email, rent, payment_status FROM req_rental WHERE id = ?`;

  db.query(getQuery, [id], (error, results) => {
    if (error) return res.status(500).json(error);

    const oldData = results[0];

    const updatedRentalDate = rental_date || oldData.rental_date;
    const updatedEmail = customer_email || oldData.customer_email;
    const updatedRent = rent !== undefined ? rent : oldData.rent;
    const updatedPaymentStatus = payment_status || oldData.payment_status;

    const updateQuery = `
      UPDATE req_rental 
      SET rental_date = ?, customer_email = ?, rent = ?, payment_status = ? 
      WHERE id = ?
    `;

    db.query(
      updateQuery,
      [updatedRentalDate, updatedEmail, updatedRent, updatedPaymentStatus, id],
      (updateError, data) => {
        if (updateError) return res.status(500).json(updateError);

        res.status(200).json({ data });
      },
    );
  });
};
