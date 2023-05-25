document.addEventListener("DOMContentLoaded", () => {
  let isAnimating = false;
  let selectedBox = null;

  document.querySelectorAll(".stamp-box").forEach(function (box) {
    box.addEventListener("click", function () {
      if (!isAnimating) {
        isAnimating = true;
        $(this).find("img").addClass("puff-in-center");
        setTimeout(() => {
          $(this).find("img").removeClass("hidden");
          isAnimating = false;
        }, 350);
      }
    });

    box.querySelector("img").addEventListener("click", function (e) {
      e.stopPropagation();
      if (!isAnimating) {
        selectedBox = $(this).closest(".stamp-box");
        deleteStamp();
      }
    });
  });

  const deleteStamp = async () => {
    try {
      if (selectedBox && !isAnimating) {
        const currentImg = selectedBox.find("img");
        isAnimating = true;
        currentImg.addClass("fade-out");
        setTimeout(function () {
          isAnimating = false;
          currentImg.addClass("hidden");
          currentImg.removeClass("fade-out puff-in-center");
         
          selectedBox = null;
        }, 2000);
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };
});



// DEVELOPER NOTE: This is an alternate version of the code featuring a modal. This modal was meant to show up to ensure the user would not accidentally delete a stamp, so as to save their "date stamped" information. However, this feature was removed, so the modal is no longer needed. But we intend to bring this feature back in the future, and are therefore keeping this code here.


// document.querySelectorAll(".stamp-box").forEach(function (box) {
//   const modal = new bootstrap.Modal(document.getElementById("delete-modal"));
//   box.addEventListener("click", function () {
//     if (!isAnimating) {
//       isAnimating = true;
//       $(this).find("img").addClass("puff-in-center");
//       setTimeout(() => {
//         $(this).find("img").removeClass("hidden");
//         isAnimating = false;
//       }, 350);
//     }
//   });

//   box.querySelector("img").addEventListener("click", function (e) {
//     e.stopPropagation();
//     if (!isAnimating) {
//       selectedBox = $(this).closest(".stamp-box");
//       modal.show();
//       modal._element
//         .querySelector(".btn-danger")
//         .addEventListener("click", function () {
//           modal.hide();
//           if (selectedBox && !isAnimating) {
//             const currentImg = selectedBox.find("img");
//             isAnimating = true;
//             currentImg.addClass("fade-out");
//             setTimeout(function () {
//               isAnimating = false;
//               currentImg.addClass("hidden");
//               currentImg.removeClass("fade-out puff-in-center");
//             }, 2000);
//             selectedBox = null;
//           }
//         });
//       modal._element
//         .querySelector(".btn-success")
//         .addEventListener("click", function () {
//           modal.hide();
//           selectedBox = null;
//         });
//     }
//   });
// });
