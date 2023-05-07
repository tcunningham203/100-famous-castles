var right = document.getElementsByClassName("right");
var si = right.length;
var z = 1;



function disableCheck() {
  if (si == right.length) {
    document.getElementById("leftbutton").disabled = true;
  }
  if (si == 1) {
    document.getElementById("rightbutton").disabled = true;
  }
}

function turnRight() {
  if (si >= 1) {
    document.getElementById("leftbutton").disabled = false;
    document.getElementById("rightbutton").disabled = false;
    si--;
    document.getElementById("rightbutton").disabled = true;
    setTimeout(function () {
      document.getElementById("rightbutton").disabled = false;
    }, 400);
    disableCheck;
  } else {
    document.getElementById("rightbutton").disabled = true;
  }
  right[si].classList.add("flip");
  z++;
  right[si].style.zIndex = z;
}
function turnLeft() {
  disableCheck;
  if (si < right.length) {
    document.getElementById("leftbutton").disabled = false;
    document.getElementById("rightbutton").disabled = false;
    si++;
    document.getElementById("leftbutton").disabled = true;
    setTimeout(function () {
      document.getElementById("leftbutton").disabled = false;
    }, 400);
  } else {
    document.getElementById("leftbutton").disabled = true;
  }
  right[si - 1].className = "right";
  setTimeout(function () {
    right[si - 1].style.zIndex = "auto";
  }, 350);
}


function disableCheck2() {
  if (si == right.length) {
    document.getElementById("leftbutton2").disabled = true;
  }
  if (si == 1) {
    document.getElementById("rightbutton2").disabled = true;
  }
}

function turnRight2() {
  if (si >= 1) {
    document.getElementById("leftbutton2").disabled = false;
    document.getElementById("rightbutton2").disabled = false;
    si--;
    document.getElementById("rightbutton2").disabled = true;
    setTimeout(function () {
      document.getElementById("rightbutton2").disabled = false;
    }, 400);
    disableCheck2;
  } else {
    document.getElementById("rightbutton2").disabled = true;
  }
  right[si].classList.add("flip");
  z++;
  right[si].style.zIndex = z;
}
function turnLeft2() {
  disableCheck2;
  if (si < right.length) {
    document.getElementById("leftbutton2").disabled = false;
    document.getElementById("rightbutton2").disabled = false;
    si++;
    document.getElementById("leftbutton2").disabled = true;
    setTimeout(function () {
      document.getElementById("leftbutton2").disabled = false;
    }, 400);
  } else {
    document.getElementById("leftbutton2").disabled = true;
  }
  right[si - 1].className = "right";
  setTimeout(function () {
    right[si - 1].style.zIndex = "auto";
  }, 350);
}