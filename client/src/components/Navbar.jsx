import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    if(localStorage.getItem('loggedInUser') === null)
    navigate('/')
  };
  return (
    <div className="flex">
      <Link to="/">
        <p className="text-2xl font-mono p-[2rem]">Notes</p>
      </Link>
      <div className="flex-initial w-max text-center">
        <p className="text-lg font-mono px-[5rem] py-[4rem]">My Notes</p>
      </div>
      <div className="flex-initial w-max text-center">
        <button
          className="text-lg font-mono pl-[10rem] pr-[5rem] py-[4rem] hover:cursor-pointer hover:scale-125"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="flex-initial w-max text-center">
        <p className="text-lg font-mono pl-[10rem] pr-[5rem] py-[4rem]">User</p>
      </div>
    </div>
  );
}

export default Navbar;
