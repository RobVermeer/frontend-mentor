const ratingForm = document.querySelector(".rating-form");
const main = document.querySelector(".main");
const ratingData = document.querySelector(".rating");

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  ratingData.textContent = formData.get("rating");
  main.classList.add("success");
});
