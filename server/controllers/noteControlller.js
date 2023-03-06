const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

const createNotes = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !content || !category || (!title && !content && !category)) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const note = await Note.create({
      user: req.user._id,
      title,
      content,
      category,
    });

    res.status(200).json(note);
  }
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    throw new Error("This item doesn't exist");
  }
});

const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  const { title, category, content } = req.body;
  if (note.user.toString() !== req.user._id.toString()) {
    console.log(note.user.id)
    res.status(401);
    throw new Error("You cannot update this note");
  }

  if (note) {
    (note.title = title), (note.content = content), (note.category = category);

    const updatedNote = await note.save();
    res.json(updatedNote);
  }else{
    res.status(404)
    throw new Error('Note not found')
  }
});

const deleteNote = asyncHandler(async(req,res) => {
    const note = await Note.findById(req.params.id);
    if (note.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You cannot update this note");
    }
  
    if (note) {
    await note.remove();
      res.json({message : "Note removed"});
    }else{
      res.status(404)
      throw new Error('Note not found')
    }
})
module.exports = { getNotes, createNotes, getNoteById, updateNote , deleteNote};
