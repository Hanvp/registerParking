import express from "express"
import {managerHome, managerDelete, managerCheck} from "../controllers/managerController"

const managerRouter = express.Router();

managerRouter.get("/", managerHome);
managerRouter.get("/:id([0-9a-f]{24})/delete", managerDelete);
managerRouter.get("/check", managerCheck);

export default managerRouter;