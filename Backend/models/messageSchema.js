import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minLength: [3, "First Name must contain at least 3 characters!"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    minLength: [3, "Last Name must contain at least 3 characters!"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Provide a valid email!"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    minLength: [11, "Phone Number must contain exactly 11 digits!"], // Adjusted for 11 digits
    maxLength: [11, "Phone Number must contain exactly 11 digits!"], // Adjusted for 11 digits
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    minLength: [10, "Message must contain at least 10 characters!"],
    maxLength: [500, "Message must contain no more than 500 characters!"], // Added max length for message
  },
});

export const Message = mongoose.model("Message", messageSchema);
