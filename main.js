const display = document.getElementById("display");

// 🔊 Click sound
const clickSound = new Audio("click.mp3");
clickSound.volume = 0.5;

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// ➕ Add value
function appendValue(value) {
  playClick();
  display.value += value;
}

// 🧹 Clear display
function clearDisplay() {
  playClick();
  display.value = "";
}

// ⬅️ Delete last character
function deleteLast() {
  playClick();
  display.value = display.value.slice(0, -1);
}

// 🧮 Calculate result
function calculate() {
  playClick();
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// ⚙️ Service Worker (PWA)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => console.log("Service Worker Registered"))
      .catch(err => console.log("Service Worker Error:", err));
  });
}
