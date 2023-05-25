const router = require('express').Router();
const { Note } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all notes for a castle
router.get('/:castleId', withAuth, async (req, res) => {
    try {
      const castleId = req.params.castleId;
      const userId = req.session.user_id;
  
      const notes = await Note.findAll({
        where: {
          castle_id: castleId,
          user_id: userId,
        },
      });
  
      res.status(200).json(notes);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Create a new note for a castle
  router.post('/:castleId', withAuth, async (req, res) => {
    try {
      const castleId = req.params.castleId;
      const userId = req.session.user_id;
      const { content } = req.body;
  
      const newNote = await Note.create({
        content,
        castle_id: castleId,
        user_id: userId,
      });
  
      res.status(200).json(newNote);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Update a note
  // router.put('/:noteId', withAuth, async (req, res) => {
  //   try {
  //     const noteId = req.params.noteId;
  //     const { content } = req.body;
  
  //     const updatedNote = await Note.update(
  //       {
  //         content,
  //       },
  //       {
  //         where: {
  //           id: noteId,
  //         },
  //       }
  //     );
  
  //     if (!updatedNote) {
  //       res.status(404).json({ message: 'Note not found' });
  //       return;
  //     }
  
  //     res.status(200).json(updatedNote);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  
// DELETE /api/notes/:id - Delete a note by ID
router.delete('/:id', async (req, res) => {

  try {
    const noteData = await Note.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!noteData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;