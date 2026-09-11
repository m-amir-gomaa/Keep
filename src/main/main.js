import { loadEditLabels } from "./edit-labels/edit_labels.js";
import { loadNotes } from "./notes/notes";
import { loadReminders } from "./reminders/reminders";
import { loadArchive } from "./archive/archive";
import { loadTrash } from "./trash/trash";
import { loadLabel } from "./labels/labels";

/**
 * Router – switches the main content area based on the active sidebar feature.
 * @param {string} [elementId] – The id of the selected sidebar feature.
 */
export function loadMain(elementId) {
  switch (elementId) {
    case "Notes":
      loadNotes();
      break;

    case "Reminders":
      loadReminders();
      break;

    case "Edit-labels":
      loadEditLabels(true);
      break;

    case "Archive":
      loadArchive();
      break;

    case "Trash":
      loadTrash();
      break;

    default:
      // Could be a label name like "CSS3" or "RANDOM-THOUGHTS"
      if (elementId) {
        const labelName = elementId.split("-").join(" ");
        loadLabel(labelName);
      } else {
        loadNotes();
      }
  }
}

/**
 * Create an SVG element inside a wrapper element.
 * @param {string} svgString – Raw SVG markup.
 * @param {string} [type]    – Wrapper tag name (default: "div").
 * @returns {HTMLElement}
 */
export function createSVGIcon_Container(svgString, type = "div") {
  const parser = new DOMParser();
  const svgDocument = parser.parseFromString(svgString, "image/svg+xml");
  const SVGContainer = document.createElement(type);
  SVGContainer.appendChild(svgDocument.documentElement);
  return SVGContainer;
}

/**
 * Swap the child icon inside an element, cycling between two icons.
 * @param {HTMLElement} element
 * @param {SVGElement} childIcon1
 * @param {SVGElement} childIcon2
 */
export function toggleIcon(element, childIcon1, childIcon2) {
  const currentIcon = element.firstChild;
  const newIcon = currentIcon === childIcon1 ? childIcon2 : childIcon1;
  element.removeChild(currentIcon);
  element.appendChild(newIcon);
}
