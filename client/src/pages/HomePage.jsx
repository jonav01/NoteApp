import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../actions/notesActions";
import ErrorContainer from "./ErrorContainer";
import { useNavigate } from "react-router";
function HomePage() {
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, notes, error } = noteList;
  const { userInfo } = userLogin;
  const navigate = useNavigate()
  console.log(notes);
  // const [notes, setNotes] = useState([])
  // const fetchNotes = () => {
  //   fetch("http://localhost:8080/api/notes")
  //     .then((res) => res.json())
  //     .then((data) => setNotes(data))
  //     .catch((err) => alert(err));
  // };

  useEffect(() => {
    dispatch(listNotes());
    if(!userInfo){
      navigate('/')
    }
  }, [dispatch]);

  return (
    <div className="w-full h-max bgcustomImage">
      <Navbar />
      {loading && <Loader />}
      {error && <ErrorContainer err={error} />}
      {notes?.map((elem) => {
        return (
          <Card key={elem._id} heading={elem.title} content={elem.content} />
        );
      })}
    </div>
  );
}

export default HomePage;
