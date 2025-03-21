import express from "express";
import { getRental } from "../controller/get/getRental.js";
import { updateRental } from "../controller/update/updateRental.js";
import { deleteRental } from "../controller/delete/deleteRental.js";
import { searchRental } from "../controller/get/getSearchRental.js";
import { createRental } from "../controller/post/createRental.js";
import { statusRental } from "../controller/get/getStatusRental.js";

const rentalRouter = express.Router();

rentalRouter.post("/rental/post", createRental);

rentalRouter.get("/rental/:id", getRental);

rentalRouter.post("/rental/update", updateRental);

rentalRouter.delete("/rental/delete/:id", deleteRental);

rentalRouter.post("/rental/search", searchRental);

rentalRouter.get("/rental/status/:id/:mood", statusRental);

export default rentalRouter;
