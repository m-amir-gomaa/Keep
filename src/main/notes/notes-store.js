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
  return [
    {
      id: uid(),
      title: "Clean Architecture",
      body: "Dependency rules are about controlling the flow of control and data. Dependencies must point inward toward the domain model.",
      pinned: true,
      archived: false,
      deleted: false,
      color: "",
      createdAt: Date.now() - 100000,
      updatedAt: Date.now() - 100000
    },
    {
      id: uid(),
      title: "The Pragmatic Programmer",
      body: "It's not just what you write, it's how you manage state over time. Don't live with broken windows.",
      pinned: false,
      archived: false,
      deleted: false,
      color: "",
      createdAt: Date.now() - 200000,
      updatedAt: Date.now() - 200000
    },
    {
      id: uid(),
      title: "Deep Work",
      body: "Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit.",
      pinned: false,
      archived: false,
      deleted: false,
      color: "",
      createdAt: Date.now() - 300000,
      updatedAt: Date.now() - 300000
    }
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
 * @param {{ title?: string, body?: string, pinned?: boolean, color?: string }} partial
 */
export function saveNote({ title = "", body = "", pinned = false, color = "" } = {}) {
  if (!title.trim() && !body.trim()) return null; // skip empty

  const note = {
    id: uid(),
    title: title.trim(),
    body: body.trim(),
    pinned,
    archived: false,
    deleted: false,
    color,
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
