const element = document.getElementsByClassName("stamp-box");
const element2 = document.querySelector(".btn-danger");
let imageDelete = document.getElementsByClassName("idk");
const btnDanger = document.querySelector(".btn-danger");
let text;

const myFunction = async (event) => {
  console.log(event.target);
  const image = event.target.children[0];
  console.log(image);

  if (image.classList.contains("hidden")) {
    text = event.target.nextElementSibling.innerHTML;
    let text2 = parseInt(text);
    let castle_id = text2;
    const isOwned = true;

    if (castle_id && isOwned) {
      const response = await fetch("/api/stamps", {
        method: "POST",
        body: JSON.stringify({ castle_id, isOwned }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("success");
      } else {
        alert("Failed to save stamp");
      }
    }

    console.log(text2);
  } else {
    console.log("Deleting");
  }
};

const deleteStamp = async (event) => {
  if ((event.target = imageDelete)) {
    let span = event.target.parentElement.nextElementSibling.innerHTML;
    let id = parseInt(span);
    let castle_id = id;
    console.log(id);
    if (castle_id) {
      const response = await fetch(`/api/stamps/${castle_id}`, {
        method: "DELETE",
      });
    }
    console.log("deleted");
  }
};

for (var i = 0; i < element.length; i++) {
  element[i].addEventListener("click", myFunction);
}

// deleteStamp();

for (var j = 0; j < imageDelete.length; j++) {
  imageDelete[j].addEventListener("click", deleteStamp);
}

// imageDelete.addEventListener("click", deleteStamp);

// for (var k = 0; k < text.length; k++) {
//   text[k].addEventListener("click", myFunction);
// }
