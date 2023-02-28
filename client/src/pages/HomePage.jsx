import React from "react";
import Navbar from "../components/Navbar";
// import Card from "../components/Card";
// import { notes } from "../../../server/constants/notes";
function HomePage() {
  return (
    <div className="w-full h-max bgcustomImage">
      <Navbar />
      {/* {notes.map((elem) => {
        return <Card heading={elem.title} content={elem.content} />;
      })} */}
    </div>
  );
}

export default HomePage;
