import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
// import { notes } from "../../../server/constants/notes";
function HomePage() {
  // const [notes, setNotes] = useState([])
  // const fetchNotes = () => {
  //   fetch("http://localhost:8080/api/notes")
  //     .then((res) => res.json())
  //     .then((data) => setNotes(data))
  //     .catch((err) => alert(err));
  // };

  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  return (
    <div className="w-full h-max bgcustomImage">
      <Navbar />
      {/* {notes.map((elem) => {
        return <Card key={elem._id} heading={elem.title} content={elem.content} />;
      })} */}
      <Card heading="Test" content="lorem"/>
    </div>
  );
}

export default HomePage;
