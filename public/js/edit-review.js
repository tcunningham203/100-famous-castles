// function to edit a posted review
async function editReviewFormHandler(event) {
    event.preventDefault();
  
    const user_name = document.querySelector('input[name="user-name"]').value;
    const star_rating = document.querySelector('input[name="star_rating"]').value;
    const review_text = document.querySelector('textarea[name="review"]').value;
    const review_id = document.querySelector('input[name="review-id"]').value;

    // collects reviews information to edit
    const response = await fetch(`/api/reviews/${review_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        user_name,
        review_text,
        star_rating
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(response)
    
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
}

// function to delete a users review
async function deleteReviewFormHandler(event) {
    event.preventDefault();

    const review_id = document.querySelector('input[name="review-id"]').value;

    // collects reviews id
    const response = await fetch(`/api/reviews/${review_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(response)
    
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
}
  
document.querySelector('.edit-review-form').addEventListener('submit', editReviewFormHandler);
document.querySelector('.delete-review-btn').addEventListener('click', deleteReviewFormHandler);