const bars = {
  hunger: document.getElementById("hungerBar"),
  sleep: document.getElementById("sleepBar"),
  quality: document.getElementById("qualityBar"),
};

const values = {
  hunger: document.getElementById("hungerValue"),
  sleep: document.getElementById("sleepValue"),
  quality: document.getElementById("qualityValue"),
};

const statusText = document.getElementById("statusText");
const petMood = document.getElementById("petMood");
const pet = document.getElementById("pet");

const buttons = {
  feed: document.getElementById("feedBtn"),
  rest: document.getElementById("restBtn"),
  code: document.getElementById("codeBtn"),
  restart: document.getElementById("restartBtn"),
};

const state = {
  hunger: 80,
  sleep: 75,
  quality: 85,
  running: true,
};

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function averageStatus() {
  return (state.hunger + state.sleep + state.quality) / 3;
}

function updateUI() {
  Object.keys(bars).forEach((key) => {
    bars[key].value = state[key];
    values[key].textContent = `${state[key]}%`;
  });

  const avg = averageStatus();
  const lowCount = [state.hunger, state.sleep, state.quality].filter((v) => v <= 25).length;

  pet.classList.toggle("sad", avg <= 45);
  pet.classList.toggle("low", lowCount >= 2);

  if (!state.running) {
    petMood.textContent = "Mood: Burned Out";
    statusText.textContent = "Your pet crashed. Press Restart to begin a fresh sprint.";
    Object.values(buttons).forEach((button) => {
      if (button !== buttons.restart) {
        button.disabled = true;
      }
    });
    return;
  }

  Object.values(buttons).forEach((button) => {
    button.disabled = false;
  });

  if (avg >= 75) {
    petMood.textContent = "Mood: Motivated";
    statusText.textContent = "Excellent flow state! Keep the rhythm going.";
  } else if (avg >= 50) {
    petMood.textContent = "Mood: Stable";
    statusText.textContent = "Your pet is okay but needs attention soon.";
  } else if (avg >= 25) {
    petMood.textContent = "Mood: Tired";
    statusText.textContent = "Warning: bars are dropping fast — recover now.";
  } else {
    petMood.textContent = "Mood: Critical";
    statusText.textContent = "Emergency mode! One more mistake could crash the pet.";
  }
}

function applyAction(action) {
  if (!state.running) {
    return;
  }

  if (action === "feed") {
    state.hunger = clamp(state.hunger + 22);
    state.sleep = clamp(state.sleep - 6);
    state.quality = clamp(state.quality + 3);
  }

  if (action === "rest") {
    state.sleep = clamp(state.sleep + 24);
    state.hunger = clamp(state.hunger - 10);
    state.quality = clamp(state.quality + 1);
  }

  if (action === "code") {
    state.quality = clamp(state.quality + 18);
    state.sleep = clamp(state.sleep - 12);
    state.hunger = clamp(state.hunger - 8);
  }

  updateUI();
}

function decay() {
  if (!state.running) {
    return;
  }

  state.hunger = clamp(state.hunger - 2);
  state.sleep = clamp(state.sleep - 1);
  state.quality = clamp(state.quality - 2);

  if (state.hunger === 0 || state.sleep === 0 || state.quality === 0) {
    state.running = false;
  }

  updateUI();
}

function restart() {
  state.hunger = 80;
  state.sleep = 75;
  state.quality = 85;
  state.running = true;
  updateUI();
}

buttons.feed.addEventListener("click", () => applyAction("feed"));
buttons.rest.addEventListener("click", () => applyAction("rest"));
buttons.code.addEventListener("click", () => applyAction("code"));
buttons.restart.addEventListener("click", restart);

setInterval(decay, 2500);
updateUI();
