const keys = document.querySelectorAll(".key");

keys.forEach((oneElement) => {
  oneElement.addEventListener("click", function () {
    let note = document.querySelectorAll("audio");
    note.forEach((audio) => {
      if (audio.dataset.key === oneElement.dataset.key) {
        audio.play();
      }
    });
  });
});
