import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  RegistrationNo: {
    type: Number,
    required: true,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  AadharNo: {
    type: String,
    required: true,
    unique: true,
  },
  Batch: {
    type: String,
    required: true,
  },
  Year: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;