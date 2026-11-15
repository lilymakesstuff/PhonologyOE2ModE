const textBox = document.querySelector("#user-input");
let userInput = "";

textBox.addEventListener("input", (event) => {
  userInput = event.target.value;
});

function getInput() {
  console.log(userInput);
  // You can add further processing of userInput here
}