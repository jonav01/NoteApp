import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CreateNote from "./pages/CreateNote";
import Note from "./pages/Note";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/notes/:id" element={<Note />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createNotes" element={<CreateNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
