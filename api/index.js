import express from "express";
import cors from "cors";
import userRouter from "./routes/user.router.js";
import dotenv from "dotenv";
import rentalRouter from "./routes/rental.router.js";
import categoryRouter from "./routes/category.router.js";

const app = express();
dotenv.config();
app.use(express.json());

app.use(cors());

app.use(userRouter);
app.use(rentalRouter);
app.use(categoryRouter);

app.listen(8800, () => {
  console.log(`http://localhost:8800/`);
});
