const addHideStamp = () => {
  const addHideStamp = document.querySelector(".add-hide-stamp");
  if (addHideStamp.style.opacity === "0") {
    addHideStamp.style.opacity = "100%";
  } else {
    addHideStamp.style.opacity = "0";
  }
};
