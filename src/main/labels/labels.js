/**
 * labels.js – Label section view.
 * Renders notes that are tagged with the given label.
 * (Labels are stored as an array of strings in localStorage under "labels".)
 */
export function loadLabel(labelName) {
  const existingMain = document.querySelector("main");
  if (existingMain) existingMain.remove();

  const main = document.createElement("main");

  const emptyState = document.createElement("div");
  emptyState.classList.add("empty-state");

  const icon = document.createElement("div");
  icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="120" viewBox="0 -960 960 960" width="120">
    <path d="M840-480 666-234q-11 16-28.5 25t-37.5 9H200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l174 246Zm-98 0L600-680H200v400h400l142-200Zm-542 0v200-400 200Z"/>
  </svg>`;

  const text = document.createElement("p");
  text.textContent = `No notes with label "${labelName}"`;

  const sub = document.createElement("small");
  sub.textContent = "Add a label to a note to see it here.";

  emptyState.append(icon, text, sub);
  main.appendChild(emptyState);

  document.querySelector("body").appendChild(main);
}
