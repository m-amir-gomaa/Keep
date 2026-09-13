import {
  createSVGIcon,
  createEditableDiv,
  makeHoverable,
  makeFocusable
} from "../..";
import { createSVGIcon_Container, toggleIcon } from "../main";
import { SideBarDiv } from "../../side/side";
import {
  getNotes,
  saveNote,
  deleteNote,
  togglePin,
  archiveNote,
  updateNote
} from "./notes-store";

let activeNoteContainer;
let toggleSide;
let searchQuery = '';
let activeLabelFilter = '';
let _renderFn = null; // set by loadNotes once the grid exists

const COLORS = [
  { name: 'Default', value: '' },
  { name: 'Red', value: '#5c2b29' },
  { name: 'Orange', value: '#614a19' },
  { name: 'Yellow', value: '#635d19' },
  { name: 'Green', value: '#345920' },
  { name: 'Teal', value: '#16504b' },
  { name: 'Blue', value: '#2d555e' },
  { name: 'Dark blue', value: '#1e3a5f' },
  { name: 'Purple', value: '#42275e' },
  { name: 'Pink', value: '#5b2245' },
  { name: 'Brown', value: '#442f19' },
  { name: 'Gray', value: '#3c3f43' }
];

function createColorPicker(currentColor, onColorSelect) {
  const container = document.createElement("div");
  container.classList.add("color-picker-container");
  container.style.position = "relative";
  
  const btn = createSVGIcon_Container(SVG.bgOptions);
  makeHoverable(btn, "Background options");
  makeFocusable(btn);
  
  const popover = document.createElement("div");
  popover.classList.add("color-picker-popover");
  popover.style.display = "none";
  
  COLORS.forEach(c => {
    const swatch = document.createElement("div");
    swatch.classList.add("color-swatch");
    if (c.value === "") {
      swatch.classList.add("default");
    } else {
      swatch.style.backgroundColor = c.value;
    }
    if (currentColor === c.value) swatch.classList.add("selected");
    swatch.title = c.name;
    
    swatch.addEventListener("click", (e) => {
      e.stopPropagation();
      onColorSelect(c.value);
      popover.style.display = "none";
      Array.from(popover.children).forEach(child => child.classList.remove("selected"));
      swatch.classList.add("selected");
    });
    
    popover.appendChild(swatch);
  });
  
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    popover.style.display = popover.style.display === "none" ? "flex" : "none";
  });
  
  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) popover.style.display = "none";
  });
  
  container.append(btn, popover);
  return container;
}

function createLabelPicker(currentLabels, onLabelsChange) {
  const container = document.createElement("div");
  container.classList.add("label-picker-container");
  container.style.position = "relative";
  
  const labelSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M840-480 666-234q-11 16-28.5 25t-37.5 9H200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l174 246Zm-98 0L600-680H200v400h400l142-200Zm-542 0v200-400 200Z"/></svg>`;
  
  const btn = createSVGIcon_Container(SVG.more || SVG.image); // fallback
  btn.innerHTML = labelSVG;
  btn.classList.add("special__button");
  makeHoverable(btn, "Add labels");
  makeFocusable(btn);
  
  const popover = document.createElement("div");
  popover.classList.add("label-picker-popover");
  popover.style.display = "none";
  popover.style.position = "absolute";
  popover.style.bottom = "100%";
  popover.style.left = "0";
  popover.style.backgroundColor = "var(--surface-overlay)";
  popover.style.border = "1px solid var(--border)";
  popover.style.padding = "8px";
  popover.style.borderRadius = "4px";
  popover.style.zIndex = "100";
  popover.style.maxHeight = "200px";
  popover.style.overflowY = "auto";
  popover.style.width = "180px";
  
  const title = document.createElement("div");
  title.textContent = "Label note";
  title.style.fontSize = "14px";
  title.style.marginBottom = "8px";
  title.style.fontWeight = "bold";
  popover.appendChild(title);
  
  function renderLabels() {
    while (popover.children.length > 1) {
      popover.removeChild(popover.lastChild);
    }
    const allLabels = JSON.parse(localStorage.getItem("labels")) || [];
    
    allLabels.forEach(lbl => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.gap = "8px";
      row.style.padding = "4px 0";
      row.style.cursor = "pointer";
      
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = currentLabels.includes(lbl);
      cb.style.cursor = "pointer";
      
      const span = document.createElement("span");
      span.textContent = lbl;
      span.style.fontSize = "13px";
      
      row.appendChild(cb);
      row.appendChild(span);
      
      row.addEventListener("click", (e) => {
        e.stopPropagation();
        cb.checked = !cb.checked;
        if (cb.checked) {
          if (!currentLabels.includes(lbl)) currentLabels.push(lbl);
        } else {
          currentLabels = currentLabels.filter(l => l !== lbl);
        }
        onLabelsChange([...currentLabels]);
      });
      cb.addEventListener("click", (e) => e.stopPropagation());
      cb.addEventListener("change", (e) => {
        if (e.target.checked) {
          if (!currentLabels.includes(lbl)) currentLabels.push(lbl);
        } else {
          currentLabels = currentLabels.filter(l => l !== lbl);
        }
        onLabelsChange([...currentLabels]);
      });
      
      popover.appendChild(row);
    });
  }
  
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (popover.style.display === "none") {
      renderLabels();
      popover.style.display = "block";
    } else {
      popover.style.display = "none";
    }
  });
  
  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) popover.style.display = "none";
  });
  
  container.append(btn, popover);
  return container;
}

const SVG = {
  pin: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z"/></svg>`,
  pinFilled: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z"/></svg>`,
  remindMe: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-360h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>`,
  collaborator: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/></svg>`,
  bgOptions: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z"/></svg>`,
  addImage: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/></svg>`,
  archive: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"/></svg>`,
  more: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>`,
  undo: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/></svg>`,
  redo: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M396-200q-97 0-166.5-63T160-420q0-94 69.5-157T396-640h252L544-744l56-56 200 200-200 200-56-56 104-104H396q-63 0-109.5 40T240-420q0 60 46.5 100T396-280h284v80H396Z"/></svg>`,
  delete: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`,
  checkbox: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`,
  image: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/></svg>`
};

export function loadNotes() {
  // Remove any existing main
  const existingMain = document.querySelector("main");
  if (existingMain) existingMain.remove();

  const main = document.createElement("main");

  toggleSide = function () {
    document.querySelector("main").classList.toggle("minimize");
    SideBarDiv.classList.toggle("open");
  };

  const noteDiv = document.createElement("div");

  /* ── Take-a-note bar ── */
  function loadTakeNoteDiv() {
    const noteContainer = document.createElement("div");
    noteContainer.classList.add("take-note");

    const noteInputContainer = document.createElement("div");
    const noteInput = document.createElement("input");
    noteInput.placeholder = "Take a note…";
    noteInput.setAttribute("aria-label", "Take a note");
    noteInputContainer.appendChild(noteInput);

    const checkboxIconContainer = document.createElement("div");
    checkboxIconContainer.appendChild(createSVGIcon(SVG.checkbox));
    makeHoverable(checkboxIconContainer, "New list");

    const noteImageIconContainer = document.createElement("div");
    noteImageIconContainer.appendChild(createSVGIcon(SVG.image));
    makeHoverable(noteImageIconContainer, "New note with image");

    noteContainer.append(noteInputContainer, checkboxIconContainer, noteImageIconContainer);
    noteDiv.appendChild(noteContainer);

    /* Expand on click ─────────────────────────── */
    activeNoteContainer = function () {
      // Detach collapsed controls
      noteContainer.removeChild(noteInputContainer);
      noteContainer.removeChild(checkboxIconContainer);
      noteContainer.removeChild(noteImageIconContainer);
      noteContainer.classList.remove("take-note");
      noteContainer.classList.add("take-note--active");
      
      let noteColor = "";
      let noteLabels = [];
      noteContainer.style.backgroundColor = "";

      /* ─── TOP: title + pin ─── */
      const top = document.createElement("div");
      top.classList.add("top");

      const titleWrapper = createEditableDiv("Title", top);
      titleWrapper.addEventListener(
        "keydown",
        () => (titleWrapper.firstChild.style.display = "none"),
        { once: true }
      );

      const pinIcon = createSVGIcon(SVG.pin);
      const pinIconFilled = createSVGIcon(SVG.pinFilled);
      let isPinned = false;

      const pinBtn = document.createElement("div");
      pinBtn.appendChild(pinIcon);
      makeHoverable(pinBtn, "Pin note");
      makeFocusable(pinBtn);
      pinBtn.addEventListener("click", () => {
        isPinned = !isPinned;
        toggleIcon(pinBtn, isPinned ? pinIcon : pinIconFilled, isPinned ? pinIconFilled : pinIcon);
      });

      const IconDiv = document.createElement("div");
      IconDiv.appendChild(pinBtn);
      top.append(titleWrapper, IconDiv);

      /* ─── MIDDLE: body text ─── */
      const middle = document.createElement("div");
      middle.classList.add("middle");

      const bodyWrapper = createEditableDiv("Take a note…", middle, true);
      bodyWrapper.addEventListener(
        "keydown",
        () => (bodyWrapper.firstChild.style.display = "none"),
        { once: true }
      );
      middle.appendChild(bodyWrapper);

      /* ─── BOTTOM: toolbar + close ─── */
      const bottom = document.createElement("div");
      bottom.classList.add("bottom");

      const actionsContainer = document.createElement("div");
      const iconsContainer = document.createElement("div");

      const toolbarButtons = [
        { svg: SVG.remindMe,     tip: "Remind me" },
        { svg: SVG.collaborator, tip: "Collaborator" },
        { svg: SVG.addImage,     tip: "Add image" },
        { svg: SVG.archive,      tip: "Archive" },
        { svg: SVG.more,         tip: "More" },
        { svg: SVG.undo,         tip: "Undo" },
        { svg: SVG.redo,         tip: "Redo" }
      ];

      toolbarButtons.forEach(({ svg, tip }) => {
        const btn = createSVGIcon_Container(svg);
        makeHoverable(btn, tip);
        makeFocusable(btn);
        iconsContainer.appendChild(btn);
      });
      
      const colorPicker = createColorPicker(noteColor, (c) => {
        noteColor = c;
        noteContainer.style.backgroundColor = c;
      });
      
      const labelPicker = createLabelPicker(noteLabels, (lbls) => {
        noteLabels = lbls;
      });
      
      iconsContainer.insertBefore(colorPicker, iconsContainer.children[2]);
      iconsContainer.insertBefore(labelPicker, iconsContainer.children[3]);

      const closeBtn = document.createElement("button");
      closeBtn.classList.add("special__button");
      closeBtn.textContent = "Close";
      closeBtn.setAttribute("aria-label", "Close note");

      function closeAndSaveNote() {
        const title = (titleWrapper.querySelector(".mainInput") || titleWrapper.lastChild).textContent.trim();
        const body  = (bodyWrapper.querySelector(".mainInput")  || bodyWrapper.lastChild).textContent.trim();

        if (title || body) {
          saveNote({ title, body, pinned: isPinned, archived: false, color: noteColor, labels: noteLabels });
          renderNoteCards(notesGrid);
        }

        // Re-collapse the note bar
        noteContainer.classList.remove("take-note--active");
        noteContainer.classList.add("take-note");

        // Clear children and restore collapsed UI
        while (noteContainer.firstChild) noteContainer.removeChild(noteContainer.firstChild);

        const freshNoteInput = document.createElement("input");
        freshNoteInput.placeholder = "Take a note…";
        freshNoteInput.setAttribute("aria-label", "Take a note");
        const freshNoteInputContainer = document.createElement("div");
        freshNoteInputContainer.appendChild(freshNoteInput);

        const freshCheckbox = document.createElement("div");
        freshCheckbox.appendChild(createSVGIcon(SVG.checkbox));
        makeHoverable(freshCheckbox, "New list");

        const freshImage = document.createElement("div");
        freshImage.appendChild(createSVGIcon(SVG.image));
        makeHoverable(freshImage, "New note with image");

        noteContainer.append(freshNoteInputContainer, freshCheckbox, freshImage);

        // Re-bind click to expand again
        setTimeout(() => {
          [freshNoteInputContainer, freshCheckbox, freshImage].forEach(el =>
            el.addEventListener("click", activeNoteContainer)
          );
        }, 0);

        document.removeEventListener("click", onClickOutside);
      }

      function onClickOutside(e) {
        if (!noteContainer.contains(e.target)) {
          closeAndSaveNote();
        }
      }

      closeBtn.addEventListener("click", closeAndSaveNote);

      setTimeout(() => {
        document.addEventListener("click", onClickOutside);
      }, 0);

      const closeBtnContainer = document.createElement("div");
      closeBtnContainer.appendChild(closeBtn);

      actionsContainer.append(iconsContainer, closeBtnContainer);
      bottom.appendChild(actionsContainer);
      noteContainer.append(top, middle, bottom);
    };

    [noteInputContainer, checkboxIconContainer, noteImageIconContainer].forEach(el =>
      el.addEventListener("click", activeNoteContainer)
    );
  }

  /* ── Saved note cards ── */
  const notesGrid = document.createElement("div");
  notesGrid.classList.add("notes-grid");

  function renderNoteCards(container) {
    container.innerHTML = "";
    let notes = getNotes();
    
    // Apply label filter
    if (activeLabelFilter) {
      notes = notes.filter(n => (n.labels || []).includes(activeLabelFilter));
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      notes = notes.filter(n =>
        (n.title || '').toLowerCase().includes(q) ||
        (n.body || '').toLowerCase().includes(q) ||
        (n.labels || []).some(l => l.toLowerCase().includes(q))
      );
    }
    
    const pinned = notes.filter(n => n.pinned);
    const others = notes.filter(n => !n.pinned);

    function renderGroup(group, label) {
      if (!group.length) return;
      if (label) {
        const lbl = document.createElement("p");
        lbl.classList.add("notes-section-label");
        lbl.textContent = label;
        container.appendChild(lbl);
      }
      group.forEach(note => {
        const card = buildNoteCard(note, container);
        container.appendChild(card);
      });
    }

    if (pinned.length && others.length) {
      renderGroup(pinned, "Pinned");
      renderGroup(others, "Others");
    } else {
      renderGroup([...pinned, ...others], "");
    }
    
    // Empty state
    if (!notes.length) {
      const empty = document.createElement("div");
      empty.style.cssText = "grid-column: 1/-1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 0; opacity: 0.6; text-align: center;";
      const msg = searchQuery.trim() || activeLabelFilter
        ? `No notes match "${searchQuery || activeLabelFilter}"`
        : "Notes you add appear here";
      empty.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="80" viewBox="0 -960 960 960" width="80" style="margin-bottom:12px;opacity:0.5"><path fill="currentColor" d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg><p style="font-size:16px">${msg}</p>`;
      container.appendChild(empty);
    }
  }

  function buildNoteCard(note, container) {
    const card = document.createElement("div");
    card.classList.add("note-card");
    if (note.pinned) card.classList.add("pinned");
    if (note.color) card.style.backgroundColor = note.color;

    card.addEventListener("click", (e) => {
      if (e.target.closest('.note-card__actions') || e.target.closest('.pinned-badge')) {
        return;
      }
      openEditModal(note, container);
    });

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
    
    if (note.labels && note.labels.length > 0) {
      const labelsContainer = document.createElement("div");
      labelsContainer.style.display = "flex";
      labelsContainer.style.flexWrap = "wrap";
      labelsContainer.style.gap = "4px";
      labelsContainer.style.marginTop = "8px";
      
      note.labels.forEach(lbl => {
        const chip = document.createElement("span");
        chip.textContent = lbl;
        chip.style.fontSize = "11px";
        chip.style.backgroundColor = "rgba(0,0,0,0.1)";
        chip.style.padding = "2px 8px";
        chip.style.borderRadius = "10px";
        chip.style.border = "1px solid var(--border)";
        labelsContainer.appendChild(chip);
      });
      
      card.appendChild(labelsContainer);
    }

    if (note.pinned) {
      const badge = document.createElement("div");
      badge.classList.add("pinned-badge");
      badge.appendChild(createSVGIcon(SVG.pinFilled));
      card.appendChild(badge);
    }

    /* Action buttons */
    const actions = document.createElement("div");
    actions.classList.add("note-card__actions");

    const archiveBtn = document.createElement("button");
    archiveBtn.classList.add("note-card__action-btn");
    archiveBtn.appendChild(createSVGIcon(SVG.archive));
    makeHoverable(archiveBtn, "Archive");
    archiveBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      archiveNote(note.id);
      renderNoteCards(container);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("note-card__action-btn");
    deleteBtn.appendChild(createSVGIcon(SVG.delete));
    makeHoverable(deleteBtn, "Delete note");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteNote(note.id);
      card.style.transition = "opacity 0.2s ease, transform 0.2s ease";
      card.style.opacity = "0";
      card.style.transform = "scale(0.95)";
      setTimeout(() => renderNoteCards(container), 220);
    });

    const pinBtn = document.createElement("button");
    pinBtn.classList.add("note-card__action-btn");
    pinBtn.appendChild(createSVGIcon(note.pinned ? SVG.pinFilled : SVG.pin));
    makeHoverable(pinBtn, note.pinned ? "Unpin note" : "Pin note");
    pinBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      togglePin(note.id);
      renderNoteCards(container);
    });

    const colorPicker = createColorPicker(note.color || "", (c) => {
      updateNote(note.id, { color: c });
      renderNoteCards(container);
    });

    const labelPicker = createLabelPicker(note.labels || [], (lbls) => {
      updateNote(note.id, { labels: lbls });
      renderNoteCards(container);
    });

    actions.append(pinBtn, colorPicker, labelPicker, archiveBtn, deleteBtn);
    card.appendChild(actions);

    return card;
  }

  /* ── Edit Modal ── */
  function openEditModal(note, container) {
    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.6)";
    overlay.style.zIndex = "1000";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";

    const modal = document.createElement("div");
    modal.classList.add("take-note--active");
    modal.style.width = "min(600px, 90%)";
    modal.style.maxHeight = "90vh";
    modal.style.overflowY = "visible";
    modal.style.position = "relative";
    modal.style.cursor = "default";
    
    let editColor = note.color || "";
    let editLabels = [...(note.labels || [])];
    if (editColor) modal.style.backgroundColor = editColor;
    
    // Disable global outside click when modal is open
    modal.addEventListener("click", (e) => e.stopPropagation());

    const top = document.createElement("div");
    top.classList.add("top");
    
    const titleWrapper = createEditableDiv("Title", top);
    const titleInput = titleWrapper.querySelector(".mainInput") || titleWrapper.lastChild;
    titleInput.textContent = note.title;
    if (note.title) titleWrapper.firstChild.style.display = "none";

    const pinIcon = createSVGIcon(SVG.pin);
    const pinIconFilled = createSVGIcon(SVG.pinFilled);
    let isPinned = note.pinned;
    const pinBtn = document.createElement("div");
    pinBtn.appendChild(isPinned ? pinIconFilled : pinIcon);
    makeHoverable(pinBtn, isPinned ? "Unpin note" : "Pin note");
    pinBtn.addEventListener("click", () => {
      isPinned = !isPinned;
      toggleIcon(pinBtn, isPinned ? pinIcon : pinIconFilled, isPinned ? pinIconFilled : pinIcon);
      makeHoverable(pinBtn, isPinned ? "Unpin note" : "Pin note");
    });
    const IconDiv = document.createElement("div");
    IconDiv.appendChild(pinBtn);
    top.append(titleWrapper, IconDiv);

    const middle = document.createElement("div");
    middle.classList.add("middle");
    const bodyWrapper = createEditableDiv("Take a note…", middle, true);
    const bodyInput = bodyWrapper.querySelector(".mainInput") || bodyWrapper.lastChild;
    bodyInput.textContent = note.body;
    if (note.body) bodyWrapper.firstChild.style.display = "none";
    middle.appendChild(bodyWrapper);

    const bottom = document.createElement("div");
    bottom.classList.add("bottom");
    const actionsContainer = document.createElement("div");
    
    const iconsContainer = document.createElement("div");
    iconsContainer.style.display = "flex";
    iconsContainer.style.alignItems = "center";
    const colorPicker = createColorPicker(editColor, (c) => {
      editColor = c;
      modal.style.backgroundColor = c;
    });
    const labelPicker = createLabelPicker(editLabels, (lbls) => {
      editLabels = lbls;
    });
    iconsContainer.appendChild(colorPicker);
    iconsContainer.appendChild(labelPicker);

    const closeBtnContainer = document.createElement("div");
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("special__button");
    closeBtn.textContent = "Close";
    closeBtnContainer.appendChild(closeBtn);
    
    function saveAndClose() {
      const updatedTitle = titleInput.textContent.trim();
      const updatedBody = bodyInput.textContent.trim();
      updateNote(note.id, { title: updatedTitle, body: updatedBody, pinned: isPinned, color: editColor, labels: editLabels });
      renderNoteCards(container);
      document.body.removeChild(overlay);
    }

    closeBtn.addEventListener("click", saveAndClose);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) saveAndClose();
    });

    actionsContainer.append(iconsContainer, closeBtnContainer);
    bottom.appendChild(actionsContainer);
    
    modal.append(top, middle, bottom);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  }

  /* ── Bootstrap ── */
  function createNotes() {
    loadTakeNoteDiv();
    
    // Search bar
    const searchBar = document.createElement("div");
    searchBar.style.cssText = "max-width:600px;margin:0 auto 24px;display:flex;align-items:center;background:var(--surface-main,#1e2028);border:1px solid var(--border,rgba(255,255,255,0.1));border-radius:12px;padding:0 12px;gap:8px;";
    const searchIcon = document.createElement("span");
    searchIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" fill="currentColor" style="opacity:0.5"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>`;
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search notes, labels...";
    searchInput.style.cssText = "flex:1;background:transparent;border:none;outline:none;color:inherit;font-size:14px;padding:10px 0;";
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderNoteCards(notesGrid);
    });
    searchBar.append(searchIcon, searchInput);
    
    renderNoteCards(notesGrid);
    main.append(noteDiv, searchBar, notesGrid);
    // expose render function to module scope
    _renderFn = () => renderNoteCards(notesGrid);
    return main;
  }

  createNotes();
  const body = document.querySelector("body");
  body.appendChild(main);
}

export { activeNoteContainer, toggleSide };

/** Allow sidebar or other modules to set a label filter. */
export function setLabelFilter(label) {
  activeLabelFilter = label;
  if (_renderFn) _renderFn();
}

/** Register the notes grid so sidebar can trigger re-renders */
export let notesGridElement = null;
export function setNotesGridElement(el) { notesGridElement = el; }
