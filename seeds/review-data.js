const { Review } = require("../models");

const reviewData = [
  {
    user_name: "Hamlet",
    review_text:
      "The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601.",
    star_rating: 3,
    user_id: 4
  },
  {
    user_name:"Moby Dick",
    review_text:
      "First published in 1851, Melville's masterpiece is, in Elizabeth Hardwick's words, 'the greatest novel in American literature.'",
    star_rating: 5,
    user_id: 3
  },
  {
    user_name: "Crime and Punishment",
    review_text:
      "It is a murder story, told from a murder;s point of view, that implicates even the most innocent reader in its enormities.",
    star_rating: 4,
    user_id: 2
  },
  {
    user_name:"The Great Gatsby",
    review_text:
      "The novel chronicles an era that Fitzgerald himself dubbed the Jazz Age.",
    star_rating: 4,
    user_id: 1
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;