import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/task.js";
import adminRouter from "./routes/admin.js";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
export const app = express();

config({
  path: "./data/config.env",
});
//setting middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.all("*", function (req, res) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
//   );
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("Access-Control-Allow-Credentials", true);
// });
//using routes
app.use("/users/api/v1", userRouter);
app.use("/task/api/v1", taskRouter);
app.use("/admin/api/v1", adminRouter);
app.get("/", (req, res) => {
  res.send("hi");
});
//using error middleware
app.use(errorMiddleware);
