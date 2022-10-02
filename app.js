const advice = document.querySelector(".advice");
const number = document.querySelector(".number");
const dice = document.querySelector(".dice");
let petition;
let numPetition;
function action() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => [
      (petition = data.slip.advice),
      (numPetition = data.slip.id),
    ]);
}
action();
dice.addEventListener("click", (e) => {
  advice.innerText = petition;
  number.innerText = numPetition;
  action();
});
