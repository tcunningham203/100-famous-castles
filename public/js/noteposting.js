// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {
  // Find the comment form and comments container
  const commentForm = document.getElementById('commentForm');
  const commentsContainer = document.querySelector('.commentcard');

  // Add an event listener to the comment form submission
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      // Get the comment text from the input field
      const commentText = document.getElementById('commentText').value;

      // Fetch the castleId from the URL
      const castleId = window.location.pathname.split('/').pop(); // Extract the last segment of the URL path

      // Send a POST request to create a new comment
      const response = await fetch(`/api/notes/${castleId}`, {
        method: 'POST',
        body: JSON.stringify({ content: commentText }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Parse the response to get the newly created comment
        const newComment = await response.json();

        // Create a new comment element
        const commentElement = document.createElement('p');
        commentElement.textContent = newComment.content;

        // Prepend the new comment to the comments container
        commentsContainer.prepend(commentElement);

        // Reset the input field
        document.getElementById('commentText').value = '';
        document.location.reload();
        alert(`Tip added successfully!`)
      } else {
        console.log('Failed to create comment:', response.status);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  });
});
