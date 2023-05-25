// Implement the logic to retrieve the current user ID
function getUserId() {
  // Your logic to retrieve the current user ID goes here
}

// Retrieve the user ID of the currently logged-in user
const currentUserId = getUserId();

// Attach event listener to delete buttons
document.addEventListener('click', async (event) => {
  if (event.target.matches('.delete-button') || event.target.parentNode.matches('.delete-button')) {
    const noteContainer = event.target.closest('.note-container');
    const noteId = event.target.dataset.noteId;
    const noteUserId = event.target.dataset.userId;

    if (noteUserId === currentUserId) {
      try {
        // Send AJAX request to delete note
        const response = await fetch(`/api/notes/${noteId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Note deleted successfully, remove note container from DOM
          noteContainer.remove();
          $("#tyvm2").toast("show");
          setTimeout(function () {
            window.location.href = window.location.pathname + "#nav-profile"; // Redirect to notes tab
          }, 2200);
        } else {
          // Handle error case
          console.error('Failed to delete note');
          
        $("#tyvm3").toast("show");
        setTimeout(function () {
          window.location.href = window.location.pathname + "#nav-profile"; // Redirect to notes tab
        }, 5000);
        }
      } catch (error) {
        console.error('Failed to delete note:', error);
      }
    } else {
      // Note does not belong to the current user, handle accordingly
      console.log('Cannot delete note that does not belong to the current user');
    }
  }
});

// Update delete buttons based on ownership
const deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach((button) => {
  const noteUserId = button.dataset.userId;

  if (noteUserId !== currentUserId) {
    button.disabled = true;
    button.style.backgroundColor = 'black';
    button.style.color = 'black';
  }
});
