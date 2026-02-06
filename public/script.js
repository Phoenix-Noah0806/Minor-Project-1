const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.style.backgroundColor = "rgb(216, 204, 204)";
      b.style.color = "black";
    });
    btn.style.backgroundColor = btn.dataset.color;
    btn.style.color = "white";
  });
});
