import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteNote, updateNote } from "../actions/notesActions";
import Navbar from "../components/Navbar";

function Note() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const noteUpdate = useSelector((state) => state.noteUpdate);
  const routeParams = useParams();
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
    dispatch(updateNote(routeParams.id, title, content, category));

    resetHandler();
    navigate("/home");
  };
    useEffect(() => {
      const fetchNote = async () => {
        const res = await fetch(`https://mynoteapp.onrender.com/api/notes/${routeParams.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const responseData = await res.json();
          setTitle(responseData.title);
          setCategory(responseData.category);
          setContent(responseData.content);
        }
      };

      fetchNote();
    }, [routeParams.id]);

    const handleDeleteNote = () => {
      dispatch(deleteNote(routeParams.id))
      navigate('/home')
    }

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
            Update
          </button>
          <button
            className="w-[8rem] mt-6 px-4 py-2 text-[1.4rem]
           bg-cyan-300 rounded-full transition-all scale-125
           hover:scale-100
           "
           onClick={handleDeleteNote}
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}

export default Note;
