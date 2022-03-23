const searchBtn = document.getElementById("leftBtn");
const moneyBtn = document.getElementById("rightBtn");
const micIcon = document.getElementById("mic");

micIcon.onmouseenter = () => {
  const popUp = document.querySelector(".popup-message");
  popUp.style.transition = "all .1s";
  popUp.style.visibility = "visible";
  console.log("hovering over mouse");
};

micIcon.onmouseleave = () => {
  const popUp = document.querySelector(".popup-message");
  popUp.style.visibility = "hidden";
  console.log("hovering out mouse");
};

micIcon.onclick = () => {
  const micIcon = document.getElementById("mic");
  const activeMessage = document.getElementById("activePopup");
  activeMessage.style.visibility = "visible";
  micIcon.style.transform = "scale(0.7)";
  micIcon.style.color = "red";

  setTimeout(() => {
    const activeMessage = document.getElementById("activePopup");
    activeMessage.style.visibility = "hidden";
    activeMessage.style.transition = "all 0.1s ease-in";
    micIcon.style.transform = "scale(1)";
    micIcon.style.color = "";
    redPress.style.color = "";
  }, 2000);

  if (micIcon.style.color === "") {
    micIcon.style.color = 'red';
  } else {
    micIcon.style.color = "";
  }
  console.log("Mic icon clicked");
};
