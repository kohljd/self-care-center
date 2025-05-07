const messageForm = document.querySelector("form");
const currentMessage = document.querySelector(".message");
const messageButtons = document.querySelector(".message-buttons");
const clearButton = document.querySelector(".clear-button");

messageForm.addEventListener("submit", submitMessageForm);
clearButton.addEventListener("click", clearMessage);

function submitMessageForm(event) {
  event.preventDefault();
  const messageChoice = document.querySelector("input[name='message-choice']:checked");
  let message;
  if (messageChoice) {
    message = getRandom(messageChoice.value);
  }
  currentMessage.textContent = message;
  messageButtons.hidden = false;
}

function getRandom(messageChoice) {
  if (messageChoice === "affirmation") {
    return affirmations[getRandomIndex(affirmations)]
  } else {
    return mantras[getRandomIndex(mantras)]
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function clearMessage() {
  messageForm.reset();
  currentMessage.innerHTML = `<img src="assets/meditate.svg" alt="meditation icon">`;
  messageButtons.hidden = true;
}
