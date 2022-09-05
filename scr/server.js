import express from "express";
import morgan from "morgan";
import userRouter from "./routers/userRouter";
import managerRouter from "./routers/managerRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", pug);
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended : true}));

app.use("/",userRouter);
app.use("/manager",managerRouter);

export default app;