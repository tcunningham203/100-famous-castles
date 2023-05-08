// function to create a new book review
async function newReviewFormHandler(event) {
    event.preventDefault();
  
    const user_name = document.querySelector('input[name="user-name"]').value;
    const star_rating = document.querySelector('input[name="star_rating"]').value;
    const review_text = document.querySelector('textarea[name="review"]').value;

    // fetches review data criteria
    const response = await fetch('/api/review', {
      method: 'POST',
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
    
  // if review response is ok direct page to the dashboard/homepage
  //  if (response.ok) {
  //   document.location.replace('/dashboard');
  //    } else {
  //     alert(response.statusText);
  //   }
}
  
  document.querySelector('.new-review-form').addEventListener('submit', newReviewFormHandler);
  setTimeout(()=> {
    console.log("Set custom settings via Preference Center");
    location.reload(); }, 50000);