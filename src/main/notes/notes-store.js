/**
 * notes-store.js
 * ─────────────────────────────────────────────────────────────────────────
 * Pure localStorage data-layer for notes.
 * All functions are synchronous and side-effect-free (no DOM touches).
 *
 * Schema (each note object):
 * {
 *   id:       string  – UUID v4
 *   title:    string
 *   body:     string
 *   pinned:   boolean
 *   archived: boolean
 *   deleted:  boolean
 *   color:    string  – CSS color string or ""
 *   createdAt: number – Date.now()
 *   updatedAt: number – Date.now()
 * }
 */

const STORE_KEY = "keep_notes";

/** Generate a simple unique ID. */
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function getInitialNotes() {
  const t = Date.now();
  return [
    {
      id: uid(),
      title: "Portfolio checklist",
      body: "✅ Keep clone (Vanilla + Next.js)\n✅ Deploy to Vercel\n☐ Add more projects\n☐ Write a solid README for each repo\n☐ Update LinkedIn headline",
      pinned: true,
      archived: false,
      deleted: false,
      color: "#fff9c4",
      labels: ["Work", "Urgent"],
      createdAt: t - 60000,
      updatedAt: t - 60000,
    },
    {
      id: uid(),
      title: "Clean Architecture notes",
      body: "Dependency rules are about controlling the flow of control and data. Dependencies must point inward toward the domain model. High-level policy must never depend on low-level detail.",
      pinned: true,
      archived: false,
      deleted: false,
      color: "",
      labels: ["Dev", "Reading List"],
      createdAt: t - 200000,
      updatedAt: t - 200000,
    },
    {
      id: uid(),
      title: "Deep Work — key idea",
      body: "Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit create new value, improve your skill, and are hard to replicate.",
      pinned: false,
      archived: false,
      deleted: false,
      color: "#b2dfdb",
      labels: ["Reading List", "Personal"],
      createdAt: t - 400000,
      updatedAt: t - 400000,
    },
    {
      id: uid(),
      title: "Side project ideas",
      body: "• AI cover letter generator\n• Real-time code collaboration tool\n• Browser extension for reading time estimates\n• CLI tool for managing dotfiles",
      pinned: false,
      archived: false,
      deleted: false,
      color: "",
      labels: ["Ideas", "Dev"],
      createdAt: t - 700000,
      updatedAt: t - 700000,
    },
    {
      id: uid(),
      title: "Design system tokens",
      body: "Primary: #00f2fe\nSurface: #0d101b\nText: #e8eaf6\nBorder: rgba(255,255,255,0.07)\nRadius: 12px\nFont: Outfit, Inter",
      pinned: false,
      archived: false,
      deleted: false,
      color: "#e8d5f5",
      labels: ["Design", "Dev"],
      createdAt: t - 900000,
      updatedAt: t - 900000,
    },
    {
      id: uid(),
      title: "Monthly budget",
      body: "Rent: 4000\nGroceries: ~1200\nSubscriptions: 350\nSavings target: 2000\nMisc: 800",
      pinned: false,
      archived: false,
      deleted: false,
      color: "#c8e6c9",
      labels: ["Finance", "Personal"],
      createdAt: t - 1200000,
      updatedAt: t - 1200000,
    },
    {
      id: uid(),
      title: "Meeting agenda — Monday",
      body: "1. Sprint review & retrospective\n2. Q4 roadmap alignment\n3. Discuss API rate limiting strategy\n4. Team async standup process",
      pinned: false,
      archived: false,
      deleted: false,
      color: "",
      labels: ["Work"],
      createdAt: t - 1500000,
      updatedAt: t - 1500000,
    },
    {
      id: uid(),
      title: "CSS Grid cheatsheet",
      body: "grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\ngap: 1rem;\nalign-items: start;\n\nParent sets the grid, children fill it. Use subgrid for nested alignment.",
      pinned: false,
      archived: false,
      deleted: false,
      color: "#bbdefb",
      labels: ["Dev", "Design"],
      createdAt: t - 2000000,
      updatedAt: t - 2000000,
    },
  ];
}

/** Read all notes from localStorage. */
function readAll() {
  try {
    let parsed = JSON.parse(localStorage.getItem(STORE_KEY));
    if (!parsed || parsed.length === 0) {
      const initial = getInitialNotes();
      localStorage.setItem(STORE_KEY, JSON.stringify(initial));
      return initial;
    }
    return parsed;
  } catch {
    const initial = getInitialNotes();
    localStorage.setItem(STORE_KEY, JSON.stringify(initial));
    return initial;
  }
}

/** Persist all notes to localStorage. */
function writeAll(notes) {
  localStorage.setItem(STORE_KEY, JSON.stringify(notes));
}

/* ────────────────────────────────────────────────────────────────────────
   Public API
──────────────────────────────────────────────────────────────────────── */

/**
 * Return active (non-archived, non-deleted) notes sorted by pin then creation.
 */
export function getNotes() {
  return readAll()
    .filter(n => !n.archived && !n.deleted)
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return b.createdAt - a.createdAt;
    });
}

/** Return archived notes. */
export function getArchivedNotes() {
  return readAll()
    .filter(n => n.archived && !n.deleted)
    .sort((a, b) => b.updatedAt - a.updatedAt);
}

/** Return deleted notes. */
export function getDeletedNotes() {
  return readAll()
    .filter(n => n.deleted)
    .sort((a, b) => b.updatedAt - a.updatedAt);
}

/**
 * Create a new note and persist it.
 * @param {{ title?: string, body?: string, pinned?: boolean, color?: string, labels?: string[] }} partial
 */
export function saveNote({ title = "", body = "", pinned = false, color = "", labels = [] } = {}) {
  if (!title.trim() && !body.trim()) return null; // skip empty

  const note = {
    id: uid(),
    title: title.trim(),
    body: body.trim(),
    pinned,
    archived: false,
    deleted: false,
    color,
    labels,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };

  const notes = readAll();
  notes.unshift(note);
  writeAll(notes);
  return note;
}

/**
 * Update an existing note by id.
 * @param {string} id
 * @param {Partial<Note>} changes
 */
export function updateNote(id, changes) {
  const notes = readAll().map(n =>
    n.id === id ? { ...n, ...changes, updatedAt: Date.now() } : n
  );
  writeAll(notes);
}

/**
 * Toggle pinned state of a note.
 */
export function togglePin(id) {
  const notes = readAll().map(n =>
    n.id === id ? { ...n, pinned: !n.pinned, updatedAt: Date.now() } : n
  );
  writeAll(notes);
}

/**
 * Move note to archive (or unarchive it).
 */
export function archiveNote(id) {
  const notes = readAll().map(n =>
    n.id === id ? { ...n, archived: !n.archived, updatedAt: Date.now() } : n
  );
  writeAll(notes);
}

/**
 * Move note to trash (soft delete).
 */
export function deleteNote(id) {
  const notes = readAll().map(n =>
    n.id === id ? { ...n, deleted: true, updatedAt: Date.now() } : n
  );
  writeAll(notes);
}

/**
 * Permanently remove a note.
 */
export function permanentlyDelete(id) {
  writeAll(readAll().filter(n => n.id !== id));
}

/**
 * Restore a deleted or archived note back to active.
 */
export function restoreNote(id) {
  const notes = readAll().map(n =>
    n.id === id ? { ...n, deleted: false, archived: false, updatedAt: Date.now() } : n
  );
  writeAll(notes);
}

/**
 * Empty the trash permanently.
 */
export function emptyTrash() {
  writeAll(readAll().filter(n => !n.deleted));
}
