import express from "express";
import { createRental } from "../controller/post/createCustomer.js";
import { getRental } from "../controller/get/getRental.js";
import { updateRental } from "../controller/update/updateRental.js";
import { deleteRental } from "../controller/delete/deleteRental.js";

const rentalRouter = express.Router();

rentalRouter.post("/rental/post", createRental);

rentalRouter.get("/rental/:id", getRental);

rentalRouter.post("/rental/update", updateRental);

rentalRouter.delete("/rental/delete/:id", deleteRental);

export default rentalRouter;
