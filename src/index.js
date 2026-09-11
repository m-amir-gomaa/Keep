/**
 * index.js — App entry point
 * ─────────────────────────────────────────────────────────────────────────
 * Bootstraps the Google Keep clone:
 *  1. Initializes localStorage defaults
 *  2. Mounts Header, Sidebar, and Main content
 *  3. Wires sidebar navigation + responsive behaviour
 *
 * Philosophy: no frameworks, no magic — just clean, composable vanilla JS
 * that shows off DOM fluency, module design, and localStorage data-binding.
 */

import "./index.css";
import { loadHeader, logoTxt } from "./header/header";
import { loadMain } from "./main/main";
import { removeClassOnSmallScreen, loadSide } from "./side/side";
import { loadEditLabels } from "./main/edit-labels/edit_labels";

/* ─────────────────────────────────────────────────
   Bootstrap
───────────────────────────────────────────────── */

function loadApp() {
  initializeLabels();
  initializeModalState();

  // Restore Edit Labels modal if it was open on last reload
  loadEditLabels(getModalStateFromLocalStorage());

  loadHeader();
  loadMain();
  loadSide();
}

loadApp();

/* ─────────────────────────────────────────────────
   DOM utilities (exported for use across modules)
───────────────────────────────────────────────── */

/**
 * Parse an SVG string into a live SVGElement.
 * @param {string} svgString
 * @returns {SVGElement}
 */
export function createSVGIcon(svgString) {
  const parser = new DOMParser();
  const svgDocument = parser.parseFromString(svgString, "image/svg+xml");
  return svgDocument.documentElement;
}

/**
 * Wrap an element in a container div (or other tag) and append it to a parent.
 * @param {HTMLElement} El        – the element to wrap
 * @param {HTMLElement} grandParent – where to append the wrapper
 * @param {string}      classes   – space-separated class names for the wrapper
 * @param {string}      type      – HTML tag for the wrapper (default: "div")
 */
export function provideContainer(El, grandParent, classes = "", type = "div") {
  const container = document.createElement(type);
  container.appendChild(El);
  if (classes) container.className = classes;
  grandParent.appendChild(container);
}

/** Remove inline styles from an element. */
export function removeInlineStyling(El) {
  El.removeAttribute("style");
}

/* ─────────────────────────────────────────────────
   Accessibility helpers
───────────────────────────────────────────────── */

export function makeFocusable(el) {
  el.setAttribute("role", "button");
  el.setAttribute("tabindex", "0");
}

export function makeUnfocusable(el) {
  el.removeAttribute("role");
  el.removeAttribute("tabindex");
}

export function makeHoverable(el, txt) {
  el.setAttribute("data-tool-tip", txt);
}

export function makeUnhoverable(el) {
  el.removeAttribute("data-tool-tip");
}

/* ─────────────────────────────────────────────────
   Sidebar feature map + navigation
───────────────────────────────────────────────── */

// Built after loadSide() renders elements into the DOM
const sideFeaturesElObj = {};

const sideFeatures = document.querySelectorAll(".side__feature");
sideFeatures.forEach(feature => {
  if (feature.id) {
    sideFeaturesElObj[feature.id] = document.querySelector(`#${feature.id}`);
  }
});

// Mark the first feature (Notes) as active on load
const featureEls = Object.values(sideFeaturesElObj);
if (featureEls.length) featureEls[0].classList.add("active");

// Build icon array for focus management
export const Icons = [];
featureEls.forEach(el => {
  const icon = el.firstChild?.firstChild;
  if (icon) Icons.push(icon);
});

/** Sidebar collapsed: only icons are focusable, not the full rows. */
export function focusOut() {
  featureEls.forEach(el => makeUnfocusable(el));
  Icons.forEach(el => makeFocusable(el));
}

/** Sidebar expanded: full rows are focusable. */
export function focusIn() {
  featureEls.forEach(el => makeFocusable(el));
  Icons.forEach(el => makeUnfocusable(el));
}

// Initialize focus state
const logoContainer = document.querySelector(".logo-container");
const logoImg       = document.querySelector(".logo-container img");

featureEls.forEach(feature => {
  feature.addEventListener("click", () => {
    // Deactivate all
    featureEls.forEach(feat => {
      feat.classList.remove("active");
    });

    // Activate clicked
    feature.classList.add("active");

    // Update logo text
    const isNotes = feature.id === "Notes";
    const isLabel = !["Notes", "Reminders", "Edit-labels", "Archive", "Trash"].includes(feature.id);

    logoContainer.removeChild(logoTxt);

    if (isNotes) {
      if (!logoContainer.contains(logoImg)) logoContainer.appendChild(logoImg);
      logoTxt.textContent = "Keep";
      makeHoverable(logoTxt, "Keep");
      makeFocusable(logoTxt);
    } else {
      if (logoContainer.contains(logoImg)) logoContainer.removeChild(logoImg);
      logoTxt.textContent = feature.id === "Edit-labels"
        ? "Edit Labels"
        : feature.id.split("-").join(" ");
      makeUnhoverable(logoTxt);
      makeUnfocusable(logoTxt);
    }

    logoContainer.appendChild(logoTxt);

    // Load content
    loadMain(feature.id);
  });
});

export { sideFeaturesElObj };

/* ─────────────────────────────────────────────────
   Editable div factory (title / body inputs)
───────────────────────────────────────────────── */

/**
 * Creates a placeholder+contenteditable pair inside a wrapper div.
 * @param {string}      txt        – Placeholder label
 * @param {HTMLElement} parent     – Parent to inject into (not appended here)
 * @param {boolean}     expandable – If true, Enter inserts a line-break
 * @returns {HTMLElement} the wrapper div
 */
export function createEditableDiv(txt, parent, expandable = false) {
  const wrapper = document.createElement("div");

  // Placeholder text
  const placeholder = document.createElement("div");
  placeholder.classList.add("placeholder");
  placeholder.textContent = txt;
  wrapper.appendChild(placeholder);

  // Contenteditable region
  const editable = document.createElement("div");
  editable.classList.add("mainInput");
  editable.contentEditable = "true";
  editable.setAttribute("aria-multiline", "true");
  editable.setAttribute("role", "textbox");
  editable.setAttribute("tabindex", "0");
  editable.setAttribute("spellcheck", "true");
  editable.setAttribute("aria-label", txt);
  wrapper.appendChild(editable);

  // Hide placeholder as soon as user types
  editable.addEventListener("input", () => {
    placeholder.style.display = editable.textContent.trim() ? "none" : "";
  });

  if (expandable) {
    editable.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        event.preventDefault();

        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const br = document.createElement("br");
        range.deleteContents();
        range.insertNode(br);

        range.setStartAfter(br);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    });
  }

  return wrapper;
}

/* ─────────────────────────────────────────────────
   localStorage helpers
───────────────────────────────────────────────── */

/** Seed labels array if absent. */
export function initializeLabels() {
  if (!localStorage.getItem("labels")) {
    localStorage.setItem("labels", JSON.stringify(["CSS3", "RANDOM THOUGHTS"]));
  }
}

export function getArrayFromLocalStorage() {
  return JSON.parse(localStorage.getItem("labels")) || [];
}

export function updateArrayInLocalStorage(arr) {
  localStorage.setItem("labels", JSON.stringify(arr));
}

/** Seed modal-state flag if absent. */
export function initializeModalState() {
  if (!localStorage.getItem("modalState")) {
    localStorage.setItem("modalState", JSON.stringify(false));
  }
}

export function getModalStateFromLocalStorage() {
  return JSON.parse(localStorage.getItem("modalState"));
}

export function updatemodalStateInLocalStorage(state) {
  localStorage.setItem("modalState", JSON.stringify(state));
}

/** Hard-reload the page. */
export function refresh() {
  location.reload();
}

/* ─────────────────────────────────────────────────
   Responsive sidebar behaviour
───────────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  const mediaQuery = window.matchMedia("(max-width: 600px)");
  removeClassOnSmallScreen(mediaQuery);
  mediaQuery.addEventListener("change", event => removeClassOnSmallScreen(event.target));

  focusOut();
});
