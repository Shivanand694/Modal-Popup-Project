let modelBtn = document.querySelector(".modelBtn");
let modelContainer = document.querySelector(".modelcontainer");
let closeBtn = document.querySelector(".closebtn");

modelBtn.addEventListener("click", function () {
  modelContainer.style.display = "flex";
});

modelContainer.addEventListener("click", function (event) {
  if (event.target.className === "modelcontainer") {
    modelContainer.style.display = "none";
  }
});
