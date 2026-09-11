/**
 * trash.js – Trash section.
 * Shows deleted notes with permanent delete and restore options.
 */
import { getDeletedNotes, permanentlyDelete, restoreNote, emptyTrash } from "../notes/notes-store";
import { createSVGIcon, makeHoverable } from "../..";

const SVG_RESTORE = `<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/></svg>`;
const SVG_DELETE = `<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;

export function loadTrash() {
  const existingMain = document.querySelector("main");
  if (existingMain) existingMain.remove();

  const main = document.createElement("main");
  renderTrashContent(main);
  document.querySelector("body").appendChild(main);
}

function renderTrashContent(main) {
  main.innerHTML = "";
  const notes = getDeletedNotes();

  if (!notes.length) {
    const emptyState = document.createElement("div");
    emptyState.classList.add("empty-state");
    emptyState.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="120" viewBox="0 -960 960 960" width="120">
        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
      </svg>
      <p>No notes in Trash</p>
      <small>Notes in Trash are deleted after 7 days.</small>
    `;
    main.appendChild(emptyState);
    return;
  }

  const header = document.createElement("div");
  header.style.cssText = "padding: 24px 24px 8px; display: flex; align-items: center; justify-content: space-between;";

  const info = document.createElement("small");
  info.textContent = "Notes in Trash are permanently deleted after 7 days.";
  info.style.color = "var(--text-muted)";

  const emptyBtn = document.createElement("button");
  emptyBtn.classList.add("special__button");
  emptyBtn.textContent = "Empty Trash";
  emptyBtn.addEventListener("click", () => {
    emptyTrash();
    renderTrashContent(main);
  });

  header.append(info, emptyBtn);
  main.appendChild(header);

  const grid = document.createElement("div");
  grid.classList.add("notes-grid");
  grid.style.padding = "8px 16px 24px";

  notes.forEach(note => {
    const card = document.createElement("div");
    card.classList.add("note-card");
    card.style.opacity = "0.7";

    if (note.title) {
      const title = document.createElement("div");
      title.classList.add("note-card__title");
      title.textContent = note.title;
      card.appendChild(title);
    }

    if (note.body) {
      const body = document.createElement("div");
      body.classList.add("note-card__body");
      body.textContent = note.body;
      card.appendChild(body);
    }

    const actions = document.createElement("div");
    actions.classList.add("note-card__actions");

    const restoreBtn = document.createElement("button");
    restoreBtn.classList.add("note-card__action-btn");
    restoreBtn.appendChild(createSVGIcon(SVG_RESTORE));
    makeHoverable(restoreBtn, "Restore");
    restoreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      restoreNote(note.id);
      renderTrashContent(main);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("note-card__action-btn");
    deleteBtn.appendChild(createSVGIcon(SVG_DELETE));
    makeHoverable(deleteBtn, "Delete forever");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      permanentlyDelete(note.id);
      renderTrashContent(main);
    });

    actions.append(restoreBtn, deleteBtn);
    card.appendChild(actions);
    grid.appendChild(card);
  });

  main.appendChild(grid);
}
