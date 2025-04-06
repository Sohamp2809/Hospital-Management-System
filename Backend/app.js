import express from "express";
import { dbconnection } from "./database/dbConnection.js"; // Ensures DB connection
import { config } from "dotenv"; // For loading environment variables
import cookieParser from "cookie-parser"; // To parse cookies
import cors from "cors"; // For handling CORS
import fileUpload from "express-fileupload"; // Middleware for file uploads
import { errorMiddleware } from "./middlewares/errorMiddleware.js"; // Custom error handler
import messageRouter from "./router/messageRouter.js"; // Message route
import userRouter from "./router/userRouter.js"; // User route
import appointmentRouter from "./router/appointmentRouter.js"; // Appointment route

const app = express();

// Load environment variables
config({ path: "./config/config.env" }); // Assuming you have .env for environment variables

// CORS configuration
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL], // Enable cross-origin requests for these URLs
    methods: ["GET", "POST", "DELETE", "PUT"], // Allowed methods
    credentials: true, // Allow cookies to be sent/received
  })
);

// Middleware Setup
app.use(cookieParser()); // Parses cookies
app.use(express.json()); // To parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

// File upload configuration
app.use(
  fileUpload({
    useTempFiles: true, // Use temporary files for uploads
    tempFileDir: "/tmp/", // Temporary file directory
  })
);

// Define routes
app.use("/api/v1/message", messageRouter); // Message route handling
app.use("/api/v1/user", userRouter); // User route handling
app.use("/api/v1/appointment", appointmentRouter); // Appointment route handling

// Database connection
dbconnection(); // Calls the database connection function

// Error handling middleware (should be the last middleware)
app.use(errorMiddleware);

// Export the app
export default app;
