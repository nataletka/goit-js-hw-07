const textInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");
textInputEl.addEventListener("input", (event) => {
  event.currentTarget.value = event.currentTarget.value.trim();
  if (event.currentTarget.value) {
    textOutputEl.textContent = event.currentTarget.value;
  } else {
    textOutputEl.textContent = "Anonymous";
  }
});
