// importing all the necessary packages 
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from 'cors';
import cookieParser from "cookie-parser";
import morgan from 'morgan';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
dotenv.config();

// ------------------ to import routers and middlewares ----------------------
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import adminRouter from './routes/adminRouter.js';
import staffRouter from './routes/staffRouter.js';
import ratingRouter from './routes/ratingRouter.js';
import feedbackRouter from './routes/feedbackRouter.js';
import departRatingRouter from './routes/departRatingRouter.js';
import { getUserRole } from "./controllers/userController.js";
import errorHandlerMiddleware from "./middleware/ErrorHandleMiddleware.js";
// import { authenticateUser } from "./middleware/AuthenticationMiddleware.js";
import { errorHandler } from "./middleware/ErrorMiddleware.js";

// default export 
const app = express();
const port = 3333;

// Use express.json() instead of bodyParser.json()
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(errorHandler);
// app.use(errorHandlerMiddleware);


const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './public')));
//-------------------- using morgan for http request combined ------------------
app.get('/', (req, res) => {
    res.send("hello world");
});

// -------------------------- Routes ------------------------------------------
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/dashboard-student/current-user", userRouter);
app.use("/api/v1/depart-ratings", departRatingRouter);
app.use("/api/v1/dashboard-admin",adminRouter)
app.use("/api/v1/dashboard-student/feedbacks", feedbackRouter);
app.use("/api/v1/dashboard-head/staff", staffRouter);
app.use("/api/v1/users/dashboard-admin/:email", getUserRole);
app.use("/api/v1/dashboard-head/:id", staffRouter);
app.use("/api/v1/dashboard-student/ratings", ratingRouter);
// want to import the above routes some of them 

// --------------- For error handling occuring in our server -------------------
app.use("*", (req, res) => {
    res.status(404).json({ msg: "not found" });
});
app.use(errorHandlerMiddleware);

// --------------- To listent the port and connect the mongoDB -------------------
try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`server running on PORT ${port}....`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}


















