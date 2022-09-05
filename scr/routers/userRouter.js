import express from "express";
import {getRegister, postRegister, check, deleteCar, getEdit, postEdit} from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/").get(getRegister).post(postRegister);
userRouter.get("/:id([0-9a-f]{24})/check",check);
userRouter.get("/:id([0-9a-f]{24})/delete", deleteCar);
userRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);

export default userRouter