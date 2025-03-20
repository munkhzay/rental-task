import express from "express";
import { createCategory } from "../controller/post/createCategory.js";
import { getCategory } from "../controller/get/getCategory.js";

const categoryRouter = express.Router();

categoryRouter.post("/category/create", createCategory);

categoryRouter.get("/category/:id", getCategory);

export default categoryRouter;
