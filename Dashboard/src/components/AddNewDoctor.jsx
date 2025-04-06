import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const AddNewDoctor = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDomain, setDoctorDomain] = useState(""); // updated field name
  const [doctorimage, setDoctorimage] = useState(null); // updated file field
  const [doctorimagePreview, setDoctorimagePreview] = useState("");

  const navigateTo = useNavigate();

  // You can customize your domains (or departments) as needed
  const domainsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  // Handle file selection and preview
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return; // if user cancels, do nothing
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDoctorimagePreview(reader.result);
      setDoctorimage(file);
    };
  };

  // Handle form submission
  const handleAddNewDoctor = async (e) => {
    e.preventDefault();

    if (!doctorimage) {
      toast.error("Please upload a doctor image");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("doctorDomain", doctorDomain); // using backend's expected field name
      formData.append("doctorimage", doctorimage); // using backend's expected file field name

      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/doctor/register",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      navigateTo("/");

      // Reset form values after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setPassword("");
      setDoctorDomain("");
      setDoctorimage(null);
      setDoctorimagePreview("");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="add-doctor-page">
      <h1 className="register-title">REGISTER A NEW DOCTOR</h1>
      <div className="add-doctor-container">
        <form onSubmit={handleAddNewDoctor}>
          {/* Left Column: File Input */}
          <div className="image-wrapper">
          <img
                src={doctorimagePreview ? doctorimagePreview : "/docHolder.jpg"}
                alt="Doctor Avatar"
              />
            <input type="file" onChange={handleImage} />
          </div>

          {/* Right Column: Form Fields */}
          <div className="file-info">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              value={doctorDomain}
              onChange={(e) => setDoctorDomain(e.target.value)}
            >
              <option value="">Select Domain</option>
              {domainsArray.map((domain, index) => (
                <option value={domain} key={index}>
                  {domain}
                </option>
              ))}
            </select>
            <button type="submit">Register New Doctor</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewDoctor;


