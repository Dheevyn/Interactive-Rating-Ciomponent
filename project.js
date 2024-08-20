let result;
const rating = document.getElementById("note");
const buttons = document.querySelectorAll(".btn");
const submit = document.querySelector(".btn-submit");
const ratingContainer = document.querySelector(".rating-card");
const thanksContainer = document.querySelector(".thanks-card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    result = parseInt(button.innerText);
  });
});

function showThanks() {
  if (result) {
    rating.innerHTML = result;
    ratingContainer.style.display = "none";
    thanksContainer.style.display = "flex";
    
  } else {
    alert("Please select a rating before submitting");
  }
}
