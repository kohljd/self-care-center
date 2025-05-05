const messageForm = document.querySelector("form");
const currentMessage = document.querySelector(".message")

messageForm.addEventListener("submit", submitMessageForm);

function submitMessageForm(event) {
  event.preventDefault();
  const messageChoice = document.querySelector("input[name='message-choice']:checked");
  let message;
  if (messageChoice) {
    message = getRandom(messageChoice.value);
  }
  currentMessage.textContent = message;
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
