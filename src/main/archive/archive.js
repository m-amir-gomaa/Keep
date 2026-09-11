/**
 * archive.js – Archive section.
 * Shows notes that have been archived.
 */
import { getArchivedNotes, restoreNote, permanentlyDelete } from "../notes/notes-store";
import { createSVGIcon } from "../..";
import { makeHoverable } from "../..";

const SVG_UNARCHIVE = `<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="M480-200 240-440l56-56 144 144v-368h80v368l144-144 56 56-240 240ZM160-800v-80h640v80H160Z"/></svg>`;
const SVG_DELETE = `<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;

export function loadArchive() {
  const existingMain = document.querySelector("main");
  if (existingMain) existingMain.remove();

  const main = document.createElement("main");
  renderArchiveContent(main);
  document.querySelector("body").appendChild(main);
}

function renderArchiveContent(main) {
  main.innerHTML = "";
  const notes = getArchivedNotes();

  if (!notes.length) {
    const emptyState = document.createElement("div");
    emptyState.classList.add("empty-state");
    emptyState.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="120" viewBox="0 -960 960 960" width="120">
        <path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"/>
      </svg>
      <p>Your archived notes appear here</p>
    `;
    main.appendChild(emptyState);
    return;
  }

  const grid = document.createElement("div");
  grid.classList.add("notes-grid");
  grid.style.padding = "24px 16px";

  notes.forEach(note => {
    const card = document.createElement("div");
    card.classList.add("note-card");

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

    const unarchiveBtn = document.createElement("button");
    unarchiveBtn.classList.add("note-card__action-btn");
    unarchiveBtn.appendChild(createSVGIcon(SVG_UNARCHIVE));
    makeHoverable(unarchiveBtn, "Unarchive");
    unarchiveBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      restoreNote(note.id);
      renderArchiveContent(main);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("note-card__action-btn");
    deleteBtn.appendChild(createSVGIcon(SVG_DELETE));
    makeHoverable(deleteBtn, "Delete note");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      permanentlyDelete(note.id);
      renderArchiveContent(main);
    });

    actions.append(unarchiveBtn, deleteBtn);
    card.appendChild(actions);
    grid.appendChild(card);
  });

  main.appendChild(grid);
}
