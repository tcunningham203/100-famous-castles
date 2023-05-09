document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.getElementById('commentForm');

  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      const commentText = document.getElementById('commentText').value;
      const castleId = window.location.pathname.split('/').pop();

      const response = await fetch(`/api/notes/${castleId}`, {
        method: 'POST',
        body: JSON.stringify({ content: commentText }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.getElementById('commentText').value = '';

        $("#tyvm1").toast("show");
        setTimeout(function () {
          window.location.href = window.location.pathname + "#nav-profile"; // Redirect to notes tab
        }, 1200);
      } else {
        console.log('Failed to create comment:', response.status);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  });
});
