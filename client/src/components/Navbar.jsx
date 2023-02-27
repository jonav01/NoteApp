import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex ">
      <Link to="/">
        <p className="text-2xl font-mono p-[2rem]">Notes</p>
      </Link>
      <div className="flex-initial w-max text-center">
        <p className="text-lg font-mono pl-[15rem] pr-[10rem] py-[4rem]">Friends</p>
      </div>
      <div className="flex-initial w-max text-center">
        <p className="text-lg font-mono px-[5rem] py-[4rem]">My Notes</p>
      </div>
      <div className="flex-initial w-max text-center">
        <p className="text-lg font-mono pl-[10rem] pr-[5rem] py-[4rem]">User</p>
      </div>

    </div>
  );
}

export default Navbar;
