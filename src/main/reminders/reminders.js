/**
 * reminders.js – Reminders section placeholder.
 * Renders an "empty state" view consistent with the app's design.
 */
export function loadReminders() {
  const existingMain = document.querySelector("main");
  if (existingMain) existingMain.remove();

  const main = document.createElement("main");

  const emptyState = document.createElement("div");
  emptyState.classList.add("empty-state");

  const icon = document.createElement("div");
  icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="120" viewBox="0 -960 960 960" width="120">
    <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/>
  </svg>`;

  const text = document.createElement("p");
  text.textContent = "No reminders";

  const sub = document.createElement("small");
  sub.textContent = "Notes with upcoming reminders appear here.";

  emptyState.append(icon, text, sub);
  main.appendChild(emptyState);

  document.querySelector("body").appendChild(main);
}
