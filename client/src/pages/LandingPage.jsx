import React from "react";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div className="h-screen bgcustomImage">
      <div className="p-[10rem] text-center">
        <h1 className="p-4 text-3xl font-mono font-bold">Keep Notes</h1>
        <span className="text-lg contrast-50 mt-32">
          All your notes in one place
        </span>
        <div className="flex align-middle justify-center mt-16">
          <Link to="/login">
          <button
            className="w-40 mr-8 p-4 text-lg font-sans font-semibold rounded-full 
          flex-initial transition-all hover:scale-125 bg-slate-300"
          >
            Login
          </button> 
          </Link>
          <Link to="/signup">
          <button
            className="w-40 p-4 text-lg font-sans font-semibold rounded-full 
          flex-initial transition-all hover:scale-125 bg-slate-300"
          >
            Sign Up
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
