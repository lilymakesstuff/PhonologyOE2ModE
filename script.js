const textBox = document.querySelector("#user-input");
let userInput = "";

textBox.addEventListener("input", (event) => {
  userInput = event.target.value;
});
