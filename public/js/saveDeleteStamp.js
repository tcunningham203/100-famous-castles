const element = document.getElementsByClassName("stamp-box");
// const element2 = document.getElementsByClassName("idk");
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

for (var i = 0; i < element.length; i++) {
  element[i].addEventListener("click", myFunction);
}

// for (var j = 0; j < element2.length; j++) {
//   element2[j].addEventListener("click", myFunction);
// }

// for (var k = 0; k < text.length; k++) {
//   text[k].addEventListener("click", myFunction);
// }
