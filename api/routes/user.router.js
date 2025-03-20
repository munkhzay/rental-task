import express from "express";
import { getUsers } from "../controller/get/getUsers.js";
import { signIn } from "../controller/get/signIn.js";
import { createUser } from "../controller/post/createOwner.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.post("/signin", signIn);

userRouter.post("/", createUser);

export default userRouter;
