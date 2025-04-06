import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      minLength: [3, "First Name Must Contain At Least 3 Characters!"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: [validator.isEmail, "Provide A Valid Email!"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
      maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    },
    nic: {
      type: String,
      required: [true, "Nic is required"],
      minLength: [12, "Nic Must Contain Exact 12 Digits!"],
      maxLength: [12, "Nic Number Must Contain Exact 12 Digits!"],
    },
    dob: {
      type: Date,
      required: [true, "Dob is required"],
    },
    gender: {
      type: String,
      require: [true, "Gender is required"],
      enum: ["Male", "Female"],
    },
    appointment_date: {
      type : String,
      require: true,
    },
    department: {
      type : String,
      require: true,
    },
    doctor: {
      firstName:{
        type: String,
        require: true,
      },
      lastName: {
        type: String,
        require: true,
      },
    },
    hasVisited: {
      type: Boolean,
      default: false,
    },
    doctorId: {
      type: mongoose.Schema.ObjectId,
      require : true,
    },
    patientId: {
      type : mongoose.Schema.ObjectId,
      require: true,
    },
    address: {
      type : String,
      require: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default:"Pending",
    },

  });

  export const Appointment = mongoose.model("Appointment", appointmentSchema);