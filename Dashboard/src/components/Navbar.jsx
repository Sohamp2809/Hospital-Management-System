import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/user/admin/logout", {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setIsAuthenticated(false);
      navigate("/login");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    isAuthenticated && (
      <nav className="top-navbar">
        <div className="brand">Soham Medicare</div>
        <div className="nav-links">
          <button onClick={() => navigate("/")}>
            <TiHome /> <span>Home</span>
          </button>
          <button onClick={() => navigate("/doctors")}>
            <FaUserDoctor /> <span>Doctors</span>
          </button>
          <button onClick={() => navigate("/admin/addnew")}>
            <MdAddModerator /> <span>New Admin</span>
          </button>
          <button onClick={() => navigate("/doctor/addnew")}>
            <IoPersonAddSharp /> <span>New Doctor</span>
          </button>
          <button onClick={() => navigate("/messages")}>
            <AiFillMessage /> <span>Messages</span>
          </button>
          <button onClick={handleLogout}>
            <RiLogoutBoxFill /> <span>Logout</span>
          </button>
        </div>
      </nav>
    )
  );
};

export default Navbar;
