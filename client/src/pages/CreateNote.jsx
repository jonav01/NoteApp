import React, { useState, useEffect } from "react";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createNote } from "../actions/notesActions";
import Navbar from "../components/Navbar";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const resetHandler = () => {
    setTitle("");
    setContent("");
    setCategory("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !category) return;
    dispatch(createNote(title, content, category));

    resetHandler();
    navigate("/home");
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [dispatch]);
  return (
    <div className="block w-full h-full bgcustomImage">
      <Navbar />
      <div className="block m-auto bg-slate-100 mt-[5rem] px-40 py-20 w-4/5">
        <form onSubmit={handleSubmit}>
          <label className="block mb-4 text-[1.4rem] font-serif">Title</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter the title"
            className="w-full px-6 py-2 mb-4 text-base bg-slate-300"
          />
          <label className="block mb-4 text-[1.4rem] font-serif">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={handleCategoryChange}
            placeholder="Enter the category"
            className="w-full px-6 py-2 mb-4 text-base bg-slate-300"
          />
          <label className="block mb-4 text-[1.4rem] font-serif" size="550">
            Content
          </label>
          <input
            type="text"
            value={content}
            onChange={handleContentChange}
            placeholder="Enter content"
            className="w-full h-3/5 px-6 py-2 mb-4 text-base bg-slate-300"
          />
          <button
            type="submit"
            className="w-[8rem] mt-6 px-4 py-2 text-[1.4rem]
           bg-cyan-300 rounded-full transition-all scale-125
           hover:scale-100
           "
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
