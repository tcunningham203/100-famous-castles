const pullStamps = async () => {
  const userStamps = new Set();
  const response = await fetch("/api/stamps/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    // console.log("success", await response.json());
    const userStampJson = await response.json();
    userStampJson.forEach((stamp) => {
      userStamps.add(stamp.castle_id);
    });
    console.log(userStamps);
    let stampCount=userStamps.size;
    console.log(stampCount);

    document.getElementById("total-stamps").innerHTML = "Stamps Collected: " + stampCount + "/100";
    
  } else {
    alert("Failed to pull stamps");
    return;
  }
  const elements = document.getElementsByClassName("stamp-box");
  console.log(elements);
  Array.from(elements).forEach((el) => {
    const id = parseInt(el.nextElementSibling.innerHTML);
    console.log(id);

    if (userStamps.has(id)) {
      el.children[0].classList.remove("hidden");
      console.log(".hidding");
    }
  });
};

pullStamps();
