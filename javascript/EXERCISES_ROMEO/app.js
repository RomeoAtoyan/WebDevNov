const searchBtn = document.getElementById("leftBtn");
const moneyBtn = document.getElementById("rightBtn");
const micIcon = document.getElementById("mic");
const input = document.querySelector(".input");

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
    micIcon.style.color = "red";
  } else {
    micIcon.style.color = "";
  }
  console.log("Mic icon clicked");
};

searchBtn.addEventListener("click", function () {
  console.log(input.value);
  location.href = `https://www.google.com/search?q=${input.value}&oq=e&aqs=chrome.0.69i59l2j69i57j69i59j46i199i291i433i512j0i131i433j0i433i512l2j46i199i433i465i512j46i175i199i433i512.238j0j15&sourceid=chrome&ie=UTF-8`;
});
