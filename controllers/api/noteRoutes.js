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
  router.put('/:noteId', withAuth, async (req, res) => {
    try {
      const noteId = req.params.noteId;
      const { content } = req.body;
  
      const updatedNote = await Note.update(
        {
          content,
        },
        {
          where: {
            id: noteId,
          },
        }
      );
  
      if (!updatedNote) {
        res.status(404).json({ message: 'Note not found' });
        return;
      }
  
      res.status(200).json(updatedNote);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
// DELETE /api/notes/:id - Delete a note by ID
router.delete('/:id', async (req, res) => {
  try {
    const noteId = req.params.id;

    // Use Sequelize to find and delete the note
    const deletedNote = await Note.destroy({
      where: {
        id: noteId,
      },
    });

    if (deletedNote) {
      // Note deleted successfully
      res.status(200).json({ message: 'Note deleted' });
    } else {
      // Note not found
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    console.error('Failed to delete note:', error);
    res.status(500).json({ error: 'Failed to delete note' });
  }
});

module.exports = router;