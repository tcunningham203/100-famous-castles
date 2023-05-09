document.addEventListener("DOMContentLoaded", () => {
  let isAnimating = false;
  let selectedBox = null;

  document.querySelectorAll(".stamp-box").forEach(function (box) {
    const modal = new bootstrap.Modal(document.getElementById("delete-modal"));
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
        modal.show();
        modal._element
          .querySelector(".btn-danger")
          .addEventListener("click", function () {
            modal.hide();
            if (selectedBox && !isAnimating) {
              const currentImg = selectedBox.find("img");
              isAnimating = true;
              currentImg.addClass("fade-out");
              setTimeout(function () {
                isAnimating = false;
                currentImg.addClass("hidden");
                currentImg.removeClass("fade-out puff-in-center");
              }, 2000);
              selectedBox = null;
            }
          });
        modal._element
          .querySelector(".btn-success")
          .addEventListener("click", function () {
            modal.hide();
            selectedBox = null;
          });
      }
    });
  });

//Sudar
  //     connection.query(
  //       "SELECT COUNT(CASTLE_ID) FROM STAMP GROUP BY (USER_ID)",
  //       (err, rows) => {
  //         // When done, release connection
  //         connection.release();
  //         if (!err) {
  //           res.render("edituser", { rows });
  //         } else {
  //           console.log(err);
  //         }
  //         console.log("Data from students table: \n", rows);
  //       }
  //     );
  //   });
  // };

  //Sudar
});
