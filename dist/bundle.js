/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header/header.js":
/*!******************************!*\
  !*** ./src/header/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHeader: () => (/* binding */ loadHeader),
/* harmony export */   logoTxt: () => (/* binding */ logoTxt)
/* harmony export */ });
/* harmony import */ var _assets_images_keep_2020q4_48dp_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/keep_2020q4_48dp.png */ "./src/assets/images/keep_2020q4_48dp.png");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _side_side__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side/side */ "./src/side/side.js");
/* harmony import */ var _main_notes_notes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/notes/notes.js */ "./src/main/notes/notes.js");
// TODO ==> Fix the hoverability of the logoTxt

var logoTxt;



function loadHeader() {
  var header = document.createElement("header");
  var headerleftDiv = document.createElement("div");
  headerleftDiv.classList.add("left");
  var headermidDiv = document.createElement("div");
  headermidDiv.classList.add("middle");
  var headerrightDiv = document.createElement("div");
  headerrightDiv.classList.add("right");
  var menuIconContainer = document.createElement("div");
  function loadMenuIcon() {
    var menuIcon = (0,___WEBPACK_IMPORTED_MODULE_1__.createSVGIcon)("<svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      height=\"24\"\n      viewBox=\"0 -960 960 960\"\n        width=\"24\"\n      >\n      <path d=\"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z\" />\n      </svg>\n      ");
    var menuIconDiv = document.createElement("div");
    menuIconContainer.addEventListener("click", function () {
      menuIconContainer.classList.add("active");
      _side_side__WEBPACK_IMPORTED_MODULE_2__.SideBarDiv.classList.toggle("clicked");
      (0,_main_notes_notes_js__WEBPACK_IMPORTED_MODULE_3__.toggleSide)();
    });
    menuIconDiv.appendChild(menuIcon);
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeFocusable)(menuIconDiv);
    menuIconContainer.appendChild(menuIconDiv);
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeHoverable)(menuIconDiv, "Main menu");
    headerleftDiv.appendChild(menuIconContainer);
  }
  function loadLogo() {
    var logoContainer = document.createElement("a");
    logoContainer.classList.add("logo-container");
    logoTxt = document.createElement("span");
    var logoImg = document.createElement("img");
    logoImg.src = _assets_images_keep_2020q4_48dp_png__WEBPACK_IMPORTED_MODULE_0__;
    logoContainer.appendChild(logoImg);
    logoTxt.textContent = "Keep";
    logoContainer.appendChild(logoTxt);
    var logoContainerContainer = document.createElement("div");
    logoContainerContainer.appendChild(logoContainer);
    headerleftDiv.appendChild(logoContainerContainer);
  }
  function loadSearchField() {
    var searchField = document.createElement("div");
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeFocusable)(searchField);
    var searchIcon = (0,___WEBPACK_IMPORTED_MODULE_1__.createSVGIcon)("  <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        height=\"24\"\n        viewBox=\"0 -960 960 960\"\n        width=\"24\"\n      >\n        <path d=\"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z\" />\n      </svg>");
    // create a parent div for the button,
    // make a button as a container and then wrap the button using the provide container function
    var searchIconBtn = document.createElement("button");
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeHoverable)(searchIconBtn, "Search");
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeFocusable)(searchIconBtn);
    searchIconBtn.appendChild(searchIcon);
    (0,___WEBPACK_IMPORTED_MODULE_1__.provideContainer)(searchIconBtn, searchField, "", "div");
    var searchInput = document.createElement("input");
    searchInput.classList.add("persistent-placeholder");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search");
    searchInput.addEventListener("focus", function () {
      searchInput.placeholder = "Search";
    });
    searchInput.addEventListener("keydown", function () {
      searchInput.placeholder = "";
      if (searchInput.textContent === "") {
        searchInput.placeholder = "Search";
      }
    });
    searchInput.addEventListener("blur", function () {
      if (!searchInput.textContent.length) {
        searchInput.placeholder = "Search";
      }
    });
    searchField.append(searchInput);
    var searchClear = (0,___WEBPACK_IMPORTED_MODULE_1__.createSVGIcon)("<svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n        height=\"24\"\n        viewBox=\"0 -960 960 960\"\n        width=\"24\"\n        >\n        <path d=\"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z\" />\n        </svg>");
    var searchClearBtn = document.createElement("button");
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeHoverable)(searchClearBtn, "Clear search");
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeFocusable)(searchClearBtn);
    searchClearBtn.appendChild(searchClear);
    (0,___WEBPACK_IMPORTED_MODULE_1__.provideContainer)(searchClearBtn, searchField, "", "div");
    searchField.classList.add("search-field");
    headermidDiv.appendChild(searchField);
    searchClearBtn.addEventListener("click", function () {
      searchInput.textContent = "";
    });
    function activateSearch() {
      searchField.classList.add("focused");
      searchIconBtn.classList.add("focused");
      searchClearBtn.classList.add("focused");
    }
    function deactivateSearch() {
      // removeInlineStyling(searchClearBtn);

      searchIconBtn.classList.remove("focused");
      searchClearBtn.classList.remove("focused");
      searchField.classList.remove("focused");
    }
    searchField.addEventListener("click", activateSearch);
    document.addEventListener("click", function (event) {
      var targetElement = event.target;

      // Check if the clicked element is not the input itself
      if (targetElement !== searchField && targetElement !== searchIconBtn && targetElement !== searchInput) {
        deactivateSearch();
      }
    });
  }
  function loadAdditionalBtns() {
    var AdditionalBtns = document.createElement("div");
    var refresh = (0,___WEBPACK_IMPORTED_MODULE_1__.createSVGIcon)("    <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        height=\"24\"\n        viewBox=\"0 -960 960 960\"\n        width=\"24\"\n      >\n        <path d=\"M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z\" />\n      </svg>");
    var refreshContainer = document.createElement("div");
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeHoverable)(refreshContainer, "Refresh");
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeFocusable)(refreshContainer);
    refreshContainer.appendChild(refresh);
    (0,___WEBPACK_IMPORTED_MODULE_1__.provideContainer)(refreshContainer, AdditionalBtns);
    var grid = (0,___WEBPACK_IMPORTED_MODULE_1__.createSVGIcon)("   <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        height=\"24\"\n        viewBox=\"0 -960 960 960\"\n        width=\"24\"\n      >\n        <path d=\"M200-520q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0-80h560v-160H200v160Zm0 480q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120H200Zm0-80h560v-160H200v160Zm0-400v-160 160Zm0 400v-160 160Z\" />\n      </svg>");
    var gridContainer = document.createElement("div");
    gridContainer.appendChild(grid);
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeHoverable)(gridContainer, "List view");
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeFocusable)(gridContainer);
    (0,___WEBPACK_IMPORTED_MODULE_1__.provideContainer)(gridContainer, AdditionalBtns);
    var gear = (0,___WEBPACK_IMPORTED_MODULE_1__.createSVGIcon)("    <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        height=\"24\"\n        viewBox=\"0 -960 960 960\"\n        width=\"24\"\n      >\n        <path d=\"m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z\" />\n      </svg>");
    var gearContainer = document.createElement("div");
    gearContainer.appendChild(gear);
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeHoverable)(gearContainer, "Settings");
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeFocusable)(gearContainer);
    (0,___WEBPACK_IMPORTED_MODULE_1__.provideContainer)(gearContainer, AdditionalBtns);
    headerrightDiv.appendChild(AdditionalBtns);
    AdditionalBtns.classList.add("additional-btns");
  }
  function createHeader() {
    loadMenuIcon();
    loadLogo();
    loadSearchField();
    loadAdditionalBtns();
    header.append(headerleftDiv, headermidDiv, headerrightDiv);
    return header;
  }
  createHeader();
  var body = document.querySelector("body");
  body.appendChild(header);
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Icons: () => (/* binding */ Icons),
/* harmony export */   createEditableDiv: () => (/* binding */ createEditableDiv),
/* harmony export */   createSVGIcon: () => (/* binding */ createSVGIcon),
/* harmony export */   focusIn: () => (/* binding */ focusIn),
/* harmony export */   focusOut: () => (/* binding */ focusOut),
/* harmony export */   getArrayFromLocalStorage: () => (/* binding */ getArrayFromLocalStorage),
/* harmony export */   getModalStateFromLocalStorage: () => (/* binding */ getModalStateFromLocalStorage),
/* harmony export */   initializeLabels: () => (/* binding */ initializeLabels),
/* harmony export */   initializeModalState: () => (/* binding */ initializeModalState),
/* harmony export */   makeFocusable: () => (/* binding */ makeFocusable),
/* harmony export */   makeHoverable: () => (/* binding */ makeHoverable),
/* harmony export */   makeUnfocusable: () => (/* binding */ makeUnfocusable),
/* harmony export */   makeUnhoverable: () => (/* binding */ makeUnhoverable),
/* harmony export */   provideContainer: () => (/* binding */ provideContainer),
/* harmony export */   refresh: () => (/* binding */ refresh),
/* harmony export */   removeInlineStyling: () => (/* binding */ removeInlineStyling),
/* harmony export */   sideFeaturesElObj: () => (/* binding */ sideFeaturesElObj),
/* harmony export */   updateArrayInLocalStorage: () => (/* binding */ updateArrayInLocalStorage),
/* harmony export */   updatemodalStateInLocalStorage: () => (/* binding */ updatemodalStateInLocalStorage)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header */ "./src/header/header.js");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main */ "./src/main/main.js");
/* harmony import */ var _side_side__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side/side */ "./src/side/side.js");
/* harmony import */ var _main_edit_labels_edit_labels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/edit-labels/edit_labels */ "./src/main/edit-labels/edit_labels.js");
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







/* ─────────────────────────────────────────────────
   Bootstrap
───────────────────────────────────────────────── */

function loadApp() {
  initializeLabels();
  initializeModalState();

  // Restore Edit Labels modal if it was open on last reload
  (0,_main_edit_labels_edit_labels__WEBPACK_IMPORTED_MODULE_4__.loadEditLabels)(getModalStateFromLocalStorage());
  (0,_header_header__WEBPACK_IMPORTED_MODULE_1__.loadHeader)();
  (0,_main_main__WEBPACK_IMPORTED_MODULE_2__.loadMain)();
  (0,_side_side__WEBPACK_IMPORTED_MODULE_3__.loadSide)();
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
function createSVGIcon(svgString) {
  var parser = new DOMParser();
  var svgDocument = parser.parseFromString(svgString, "image/svg+xml");
  return svgDocument.documentElement;
}

/**
 * Wrap an element in a container div (or other tag) and append it to a parent.
 * @param {HTMLElement} El        – the element to wrap
 * @param {HTMLElement} grandParent – where to append the wrapper
 * @param {string}      classes   – space-separated class names for the wrapper
 * @param {string}      type      – HTML tag for the wrapper (default: "div")
 */
function provideContainer(El, grandParent) {
  var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "div";
  var container = document.createElement(type);
  container.appendChild(El);
  if (classes) container.className = classes;
  grandParent.appendChild(container);
}

/** Remove inline styles from an element. */
function removeInlineStyling(El) {
  El.removeAttribute("style");
}

/* ─────────────────────────────────────────────────
   Accessibility helpers
───────────────────────────────────────────────── */

function makeFocusable(el) {
  el.setAttribute("role", "button");
  el.setAttribute("tabindex", "0");
}
function makeUnfocusable(el) {
  el.removeAttribute("role");
  el.removeAttribute("tabindex");
}
function makeHoverable(el, txt) {
  el.setAttribute("data-tool-tip", txt);
}
function makeUnhoverable(el) {
  el.removeAttribute("data-tool-tip");
}

/* ─────────────────────────────────────────────────
   Sidebar feature map + navigation
───────────────────────────────────────────────── */

// Built after loadSide() renders elements into the DOM
var sideFeaturesElObj = {};
var sideFeatures = document.querySelectorAll(".side__feature");
sideFeatures.forEach(function (feature) {
  if (feature.id) {
    sideFeaturesElObj[feature.id] = document.querySelector("#".concat(feature.id));
  }
});

// Mark the first feature (Notes) as active on load
var featureEls = Object.values(sideFeaturesElObj);
if (featureEls.length) featureEls[0].classList.add("active");

// Build icon array for focus management
var Icons = [];
featureEls.forEach(function (el) {
  var _el$firstChild;
  var icon = (_el$firstChild = el.firstChild) === null || _el$firstChild === void 0 ? void 0 : _el$firstChild.firstChild;
  if (icon) Icons.push(icon);
});

/** Sidebar collapsed: only icons are focusable, not the full rows. */
function focusOut() {
  featureEls.forEach(function (el) {
    return makeUnfocusable(el);
  });
  Icons.forEach(function (el) {
    return makeFocusable(el);
  });
}

/** Sidebar expanded: full rows are focusable. */
function focusIn() {
  featureEls.forEach(function (el) {
    return makeFocusable(el);
  });
  Icons.forEach(function (el) {
    return makeUnfocusable(el);
  });
}

// Initialize focus state
var logoContainer = document.querySelector(".logo-container");
var logoImg = document.querySelector(".logo-container img");
featureEls.forEach(function (feature) {
  feature.addEventListener("click", function () {
    // Deactivate all
    featureEls.forEach(function (feat) {
      feat.classList.remove("active");
    });

    // Activate clicked
    feature.classList.add("active");

    // Update logo text
    var isNotes = feature.id === "Notes";
    var isLabel = !["Notes", "Reminders", "Edit-labels", "Archive", "Trash"].includes(feature.id);
    logoContainer.removeChild(_header_header__WEBPACK_IMPORTED_MODULE_1__.logoTxt);
    if (isNotes) {
      if (!logoContainer.contains(logoImg)) logoContainer.appendChild(logoImg);
      _header_header__WEBPACK_IMPORTED_MODULE_1__.logoTxt.textContent = "Keep";
      makeHoverable(_header_header__WEBPACK_IMPORTED_MODULE_1__.logoTxt, "Keep");
      makeFocusable(_header_header__WEBPACK_IMPORTED_MODULE_1__.logoTxt);
    } else {
      if (logoContainer.contains(logoImg)) logoContainer.removeChild(logoImg);
      _header_header__WEBPACK_IMPORTED_MODULE_1__.logoTxt.textContent = feature.id === "Edit-labels" ? "Edit Labels" : feature.id.split("-").join(" ");
      makeUnhoverable(_header_header__WEBPACK_IMPORTED_MODULE_1__.logoTxt);
      makeUnfocusable(_header_header__WEBPACK_IMPORTED_MODULE_1__.logoTxt);
    }
    logoContainer.appendChild(_header_header__WEBPACK_IMPORTED_MODULE_1__.logoTxt);

    // Load content
    (0,_main_main__WEBPACK_IMPORTED_MODULE_2__.loadMain)(feature.id);
  });
});


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
function createEditableDiv(txt, parent) {
  var expandable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var wrapper = document.createElement("div");

  // Placeholder text
  var placeholder = document.createElement("div");
  placeholder.classList.add("placeholder");
  placeholder.textContent = txt;
  wrapper.appendChild(placeholder);

  // Contenteditable region
  var editable = document.createElement("div");
  editable.classList.add("mainInput");
  editable.contentEditable = "true";
  editable.setAttribute("aria-multiline", "true");
  editable.setAttribute("role", "textbox");
  editable.setAttribute("tabindex", "0");
  editable.setAttribute("spellcheck", "true");
  editable.setAttribute("aria-label", txt);
  wrapper.appendChild(editable);

  // Hide placeholder as soon as user types
  editable.addEventListener("input", function () {
    placeholder.style.display = editable.textContent.trim() ? "none" : "";
  });
  if (expandable) {
    editable.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        var selection = window.getSelection();
        var range = selection.getRangeAt(0);
        var br = document.createElement("br");
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
function initializeLabels() {
  if (!localStorage.getItem("labels")) {
    localStorage.setItem("labels", JSON.stringify(["CSS3", "RANDOM THOUGHTS"]));
  }
}
function getArrayFromLocalStorage() {
  return JSON.parse(localStorage.getItem("labels")) || [];
}
function updateArrayInLocalStorage(arr) {
  localStorage.setItem("labels", JSON.stringify(arr));
}

/** Seed modal-state flag if absent. */
function initializeModalState() {
  if (!localStorage.getItem("modalState")) {
    localStorage.setItem("modalState", JSON.stringify(false));
  }
}
function getModalStateFromLocalStorage() {
  return JSON.parse(localStorage.getItem("modalState"));
}
function updatemodalStateInLocalStorage(state) {
  localStorage.setItem("modalState", JSON.stringify(state));
}

/** Hard-reload the page. */
function refresh() {
  location.reload();
}

/* ─────────────────────────────────────────────────
   Responsive sidebar behaviour
───────────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", function () {
  var mediaQuery = window.matchMedia("(max-width: 600px)");
  (0,_side_side__WEBPACK_IMPORTED_MODULE_3__.removeClassOnSmallScreen)(mediaQuery);
  mediaQuery.addEventListener("change", function (event) {
    return (0,_side_side__WEBPACK_IMPORTED_MODULE_3__.removeClassOnSmallScreen)(event.target);
  });
  focusOut();
});

/***/ }),

/***/ "./src/main/archive/archive.js":
/*!*************************************!*\
  !*** ./src/main/archive/archive.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadArchive: () => (/* binding */ loadArchive)
/* harmony export */ });
/* harmony import */ var _notes_notes_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notes/notes-store */ "./src/main/notes/notes-store.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/**
 * archive.js – Archive section.
 * Shows notes that have been archived.
 */



var SVG_UNARCHIVE = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"18\" viewBox=\"0 -960 960 960\" width=\"18\"><path d=\"M480-200 240-440l56-56 144 144v-368h80v368l144-144 56 56-240 240ZM160-800v-80h640v80H160Z\"/></svg>";
var SVG_DELETE = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"18\" viewBox=\"0 -960 960 960\" width=\"18\"><path d=\"M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z\"/></svg>";
function loadArchive() {
  var existingMain = document.querySelector("main");
  if (existingMain) existingMain.remove();
  var main = document.createElement("main");
  renderArchiveContent(main);
  document.querySelector("body").appendChild(main);
}
function renderArchiveContent(main) {
  main.innerHTML = "";
  var notes = (0,_notes_notes_store__WEBPACK_IMPORTED_MODULE_0__.getArchivedNotes)();
  if (!notes.length) {
    var emptyState = document.createElement("div");
    emptyState.classList.add("empty-state");
    emptyState.innerHTML = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"120\" viewBox=\"0 -960 960 960\" width=\"120\">\n        <path d=\"m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z\"/>\n      </svg>\n      <p>Your archived notes appear here</p>\n    ";
    main.appendChild(emptyState);
    return;
  }
  var grid = document.createElement("div");
  grid.classList.add("notes-grid");
  grid.style.padding = "24px 16px";
  notes.forEach(function (note) {
    var card = document.createElement("div");
    card.classList.add("note-card");
    if (note.title) {
      var title = document.createElement("div");
      title.classList.add("note-card__title");
      title.textContent = note.title;
      card.appendChild(title);
    }
    if (note.body) {
      var body = document.createElement("div");
      body.classList.add("note-card__body");
      body.textContent = note.body;
      card.appendChild(body);
    }
    var actions = document.createElement("div");
    actions.classList.add("note-card__actions");
    var unarchiveBtn = document.createElement("button");
    unarchiveBtn.classList.add("note-card__action-btn");
    unarchiveBtn.appendChild((0,___WEBPACK_IMPORTED_MODULE_1__.createSVGIcon)(SVG_UNARCHIVE));
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeHoverable)(unarchiveBtn, "Unarchive");
    unarchiveBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      (0,_notes_notes_store__WEBPACK_IMPORTED_MODULE_0__.restoreNote)(note.id);
      renderArchiveContent(main);
    });
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("note-card__action-btn");
    deleteBtn.appendChild((0,___WEBPACK_IMPORTED_MODULE_1__.createSVGIcon)(SVG_DELETE));
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeHoverable)(deleteBtn, "Delete note");
    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      (0,_notes_notes_store__WEBPACK_IMPORTED_MODULE_0__.permanentlyDelete)(note.id);
      renderArchiveContent(main);
    });
    actions.append(unarchiveBtn, deleteBtn);
    card.appendChild(actions);
    grid.appendChild(card);
  });
  main.appendChild(grid);
}

/***/ }),

/***/ "./src/main/edit-labels/edit_labels.js":
/*!*********************************************!*\
  !*** ./src/main/edit-labels/edit_labels.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadEditLabels: () => (/* binding */ loadEditLabels)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ "./src/main/main.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../header/header */ "./src/header/header.js");



var labels = (0,___WEBPACK_IMPORTED_MODULE_0__.getArrayFromLocalStorage)();
var modalState = (0,___WEBPACK_IMPORTED_MODULE_0__.getModalStateFromLocalStorage)();
function loadEditLabels(bool) {
  if (bool) {
    var loadModal = function loadModal() {
      var modal = document.createElement("div");
      modal.classList.add("modal");
      var top = document.createElement("div");
      top.classList.add("modal__top");
      var topTitle = document.createElement("span");
      topTitle.textContent = "Edit labels";
      var topCreateNewLabel = document.createElement("div");
      topCreateNewLabel.classList.add("label");
      var firstBtnContainer = document.createElement("div");
      var addBtn = (0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)("<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z\"/></svg>");
      var cancelBtn = (0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)("<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\" > <path d=\"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z\" /> </svg>");
      firstBtnContainer.appendChild(addBtn);
      (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(firstBtnContainer, "Create label");
      (0,___WEBPACK_IMPORTED_MODULE_0__.makeFocusable)(firstBtnContainer);
      var InputContainer = document.createElement("div");
      InputContainer.classList.add("modal__inputContainer");
      var input = document.createElement("input");
      input.classList.add("modal__input");
      input.placeholder = "Create new label";
      input.addEventListener("focus", function () {
        return InputContainer.classList.add("focused");
      });
      input.addEventListener("focus", function () {
        (0,_main__WEBPACK_IMPORTED_MODULE_1__.toggleIcon)(firstBtnContainer, addBtn, cancelBtn);
        (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(firstBtnContainer, "Cancel");
        topCreateNewLabel.classList.add("block");
      }, {
        once: true
      });
      cancelBtn.addEventListener("click", function () {
        (0,_main__WEBPACK_IMPORTED_MODULE_1__.toggleIcon)(firstBtnContainer, addBtn, cancelBtn);
        topCreateNewLabel.classList.remove("block");
        (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(firstBtnContainer, "Create label");
        input.value = "";
        input.addEventListener("focus", function () {
          (0,_main__WEBPACK_IMPORTED_MODULE_1__.toggleIcon)(firstBtnContainer, addBtn, cancelBtn);
          topCreateNewLabel.classList.add("block");
          (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(firstBtnContainer, "Cancel");
        }, {
          once: true
        });
      });
      addBtn.addEventListener("click", function () {
        (0,_main__WEBPACK_IMPORTED_MODULE_1__.toggleIcon)(firstBtnContainer, addBtn, cancelBtn);
        topCreateNewLabel.classList.add("block");
        (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(firstBtnContainer, "Cancel");
        input.addEventListener("focus", function () {
          (0,_main__WEBPACK_IMPORTED_MODULE_1__.toggleIcon)(firstBtnContainer, addBtn, cancelBtn);
          topCreateNewLabel.classList.add("block");
          (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(firstBtnContainer, "Cancel");
        }, {
          once: true
        });
      });
      input.addEventListener("focus", function () {
        InputContainer.classList.add("focused");
      });
      input.addEventListener("blur", function () {
        return InputContainer.classList.remove("focused");
      });
      InputContainer.appendChild(input);
      var createBtn = (0,_main__WEBPACK_IMPORTED_MODULE_1__.createSVGIcon_Container)("<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z\"/></svg>");
      createBtn.addEventListener("click", function () {
        if (isLabelUnique(labels, input.value)) {
          (0,_main__WEBPACK_IMPORTED_MODULE_1__.toggleIcon)(firstBtnContainer, addBtn, cancelBtn);
          topCreateNewLabel.classList.remove("block");
          (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(firstBtnContainer, "Create label");
          labels.push(input.value);
          modalState = true;
          (0,___WEBPACK_IMPORTED_MODULE_0__.updatemodalStateInLocalStorage)(modalState);
          (0,___WEBPACK_IMPORTED_MODULE_0__.updateArrayInLocalStorage)(labels);
          (0,___WEBPACK_IMPORTED_MODULE_0__.refresh)();
        }
      });
      (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(createBtn, "Create label");
      (0,___WEBPACK_IMPORTED_MODULE_0__.makeFocusable)(createBtn);
      topCreateNewLabel.append(firstBtnContainer, InputContainer, createBtn);
      top.append(topTitle, topCreateNewLabel);
      createLabels();
      var bottom = document.createElement("div");
      bottom.classList.add("modal__bottom");
      DoneBtn = document.createElement("button");
      DoneBtn.classList.add("special__button");
      DoneBtn.textContent = "Done";
      bottom.appendChild(DoneBtn);
      modal.append(top, bottom);
      return modal;
      function createLabel(label) {
        var newLabel = document.createElement("div");
        newLabel.classList.add("label");
        var firstBtnContainer = document.createElement("div");
        (0,___WEBPACK_IMPORTED_MODULE_0__.makeFocusable)(firstBtnContainer);
        (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(firstBtnContainer, "Delete note");
        var labelBtn = (0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)("<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M840-480 666-234q-11 16-28.5 25t-37.5 9H200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l174 246Z\"/></svg>");
        var deleteBtn = (0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)("<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z\"/></svg>");
        firstBtnContainer.appendChild(labelBtn);
        firstBtnContainer.addEventListener("mouseenter", function () {
          (0,_main__WEBPACK_IMPORTED_MODULE_1__.toggleIcon)(firstBtnContainer, labelBtn, deleteBtn);
        });
        firstBtnContainer.addEventListener("mouseleave", function () {
          (0,_main__WEBPACK_IMPORTED_MODULE_1__.toggleIcon)(firstBtnContainer, labelBtn, deleteBtn);
        });
        var InputContainer = document.createElement("div");
        InputContainer.classList.add("modal__inputContainer");
        var input = document.createElement("input");
        input.classList.add("modal__input");
        input.value = label;
        oldValue = label;
        input.addEventListener("focus", function () {
          InputContainer.classList.add("focused");
        });
        input.addEventListener("blur", function () {
          return InputContainer.classList.remove("focused");
        });
        InputContainer.appendChild(input);
        var editBtnContainer = document.createElement("div");
        var editBtn = (0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)("<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z\"></path></svg>");
        var renameBtn = (0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)("<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z\"/></svg>");
        firstBtnContainer.addEventListener("click", function () {
          // you should confirm the deletion decision
          var order = labels.indexOf(input.value);
          labels.splice(order, 1);
          modalState = true;
          (0,___WEBPACK_IMPORTED_MODULE_0__.updatemodalStateInLocalStorage)(modalState);
          (0,___WEBPACK_IMPORTED_MODULE_0__.updateArrayInLocalStorage)(labels);
          (0,___WEBPACK_IMPORTED_MODULE_0__.refresh)();
        });
        function changeLabel() {
          var order = Array.from(top.childNodes).indexOf(newLabel);
          labels[order - 2] = input.value;
          Object.values(___WEBPACK_IMPORTED_MODULE_0__.sideFeaturesElObj)[order].id = input.value;
          if (_header_header__WEBPACK_IMPORTED_MODULE_2__.logoTxt.textContent !== "Keep" && input.value !== oldValue) {
            _header_header__WEBPACK_IMPORTED_MODULE_2__.logoTxt.textContent = input.value;
          }
          Object.values(___WEBPACK_IMPORTED_MODULE_0__.sideFeaturesElObj)[order].childNodes[1].firstChild.textContent = input.value;
        }
        editBtnContainer.appendChild(renameBtn);
        (0,___WEBPACK_IMPORTED_MODULE_0__.makeFocusable)(editBtnContainer);
        (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(editBtnContainer, "Rename label");
        renameBtn.addEventListener("click", function () {
          input.focus();
          (0,_main__WEBPACK_IMPORTED_MODULE_1__.toggleIcon)(editBtnContainer, editBtn, renameBtn);
        });
        editBtn.addEventListener("click", function () {
          if (isLabelUnique(labels, input.value)) {
            changeLabel();
            (0,___WEBPACK_IMPORTED_MODULE_0__.updateArrayInLocalStorage)(labels);
            input.blur;
            (0,_main__WEBPACK_IMPORTED_MODULE_1__.toggleIcon)(editBtnContainer, editBtn, renameBtn);
          }
        });
        (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(editBtnContainer, "Rename label");
        (0,___WEBPACK_IMPORTED_MODULE_0__.makeFocusable)(editBtnContainer);
        newLabel.append(firstBtnContainer, InputContainer, editBtnContainer);
        top.appendChild(newLabel);
      }
      function createLabels() {
        for (var i = 0; i < labels.length; i++) {
          createLabel(labels[i]);
        }
      }
    };
    var loadOverlay = function loadOverlay() {
      var overlay = document.createElement("div");
      overlay.classList.add("overlay");
      return overlay;
    };
    var addEditLabelsModal = function addEditLabelsModal() {
      var modal = loadModal();
      var overlay = loadOverlay();
      var body = document.querySelector("body");
      body.append(modal, overlay);
      modalState = true;
      (0,___WEBPACK_IMPORTED_MODULE_0__.updatemodalStateInLocalStorage)(modalState);
      overlay.addEventListener("click", function () {
        body.removeChild(modal);
        body.removeChild(overlay);
        modalState = false;
        (0,___WEBPACK_IMPORTED_MODULE_0__.updatemodalStateInLocalStorage)(modalState);
      });
      DoneBtn.addEventListener("click", function () {
        body.removeChild(modal);
        body.removeChild(overlay);
        modalState = false;
        (0,___WEBPACK_IMPORTED_MODULE_0__.updatemodalStateInLocalStorage)(modalState);
      });
    };
    var DoneBtn;
    var oldValue;
    addEditLabelsModal();
  }
}
function isLabelUnique(labels, newLabel) {
  return !labels.includes(newLabel);
}

/***/ }),

/***/ "./src/main/labels/labels.js":
/*!***********************************!*\
  !*** ./src/main/labels/labels.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadLabel: () => (/* binding */ loadLabel)
/* harmony export */ });
/**
 * labels.js – Label section view.
 * Renders notes that are tagged with the given label.
 * (Labels are stored as an array of strings in localStorage under "labels".)
 */
function loadLabel(labelName) {
  var existingMain = document.querySelector("main");
  if (existingMain) existingMain.remove();
  var main = document.createElement("main");
  var emptyState = document.createElement("div");
  emptyState.classList.add("empty-state");
  var icon = document.createElement("div");
  icon.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"120\" viewBox=\"0 -960 960 960\" width=\"120\">\n    <path d=\"M840-480 666-234q-11 16-28.5 25t-37.5 9H200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l174 246Zm-98 0L600-680H200v400h400l142-200Zm-542 0v200-400 200Z\"/>\n  </svg>";
  var text = document.createElement("p");
  text.textContent = "No notes with label \"".concat(labelName, "\"");
  var sub = document.createElement("small");
  sub.textContent = "Add a label to a note to see it here.";
  emptyState.append(icon, text, sub);
  main.appendChild(emptyState);
  document.querySelector("body").appendChild(main);
}

/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSVGIcon_Container: () => (/* binding */ createSVGIcon_Container),
/* harmony export */   loadMain: () => (/* binding */ loadMain),
/* harmony export */   toggleIcon: () => (/* binding */ toggleIcon)
/* harmony export */ });
/* harmony import */ var _edit_labels_edit_labels_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-labels/edit_labels.js */ "./src/main/edit-labels/edit_labels.js");
/* harmony import */ var _notes_notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes/notes */ "./src/main/notes/notes.js");
/* harmony import */ var _reminders_reminders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reminders/reminders */ "./src/main/reminders/reminders.js");
/* harmony import */ var _archive_archive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./archive/archive */ "./src/main/archive/archive.js");
/* harmony import */ var _trash_trash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trash/trash */ "./src/main/trash/trash.js");
/* harmony import */ var _labels_labels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./labels/labels */ "./src/main/labels/labels.js");







/**
 * Router – switches the main content area based on the active sidebar feature.
 * @param {string} [elementId] – The id of the selected sidebar feature.
 */
function loadMain(elementId) {
  switch (elementId) {
    case "Notes":
      (0,_notes_notes__WEBPACK_IMPORTED_MODULE_1__.loadNotes)();
      break;
    case "Reminders":
      (0,_reminders_reminders__WEBPACK_IMPORTED_MODULE_2__.loadReminders)();
      break;
    case "Edit-labels":
      (0,_edit_labels_edit_labels_js__WEBPACK_IMPORTED_MODULE_0__.loadEditLabels)(true);
      break;
    case "Archive":
      (0,_archive_archive__WEBPACK_IMPORTED_MODULE_3__.loadArchive)();
      break;
    case "Trash":
      (0,_trash_trash__WEBPACK_IMPORTED_MODULE_4__.loadTrash)();
      break;
    default:
      // Could be a label name like "CSS3" or "RANDOM-THOUGHTS"
      if (elementId) {
        var labelName = elementId.split("-").join(" ");
        (0,_labels_labels__WEBPACK_IMPORTED_MODULE_5__.loadLabel)(labelName);
      } else {
        (0,_notes_notes__WEBPACK_IMPORTED_MODULE_1__.loadNotes)();
      }
  }
}

/**
 * Create an SVG element inside a wrapper element.
 * @param {string} svgString – Raw SVG markup.
 * @param {string} [type]    – Wrapper tag name (default: "div").
 * @returns {HTMLElement}
 */
function createSVGIcon_Container(svgString) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";
  var parser = new DOMParser();
  var svgDocument = parser.parseFromString(svgString, "image/svg+xml");
  var SVGContainer = document.createElement(type);
  SVGContainer.appendChild(svgDocument.documentElement);
  return SVGContainer;
}

/**
 * Swap the child icon inside an element, cycling between two icons.
 * @param {HTMLElement} element
 * @param {SVGElement} childIcon1
 * @param {SVGElement} childIcon2
 */
function toggleIcon(element, childIcon1, childIcon2) {
  var currentIcon = element.firstChild;
  var newIcon = currentIcon === childIcon1 ? childIcon2 : childIcon1;
  element.removeChild(currentIcon);
  element.appendChild(newIcon);
}

/***/ }),

/***/ "./src/main/notes/notes-store.js":
/*!***************************************!*\
  !*** ./src/main/notes/notes-store.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   archiveNote: () => (/* binding */ archiveNote),
/* harmony export */   deleteNote: () => (/* binding */ deleteNote),
/* harmony export */   emptyTrash: () => (/* binding */ emptyTrash),
/* harmony export */   getArchivedNotes: () => (/* binding */ getArchivedNotes),
/* harmony export */   getDeletedNotes: () => (/* binding */ getDeletedNotes),
/* harmony export */   getNotes: () => (/* binding */ getNotes),
/* harmony export */   permanentlyDelete: () => (/* binding */ permanentlyDelete),
/* harmony export */   restoreNote: () => (/* binding */ restoreNote),
/* harmony export */   saveNote: () => (/* binding */ saveNote),
/* harmony export */   togglePin: () => (/* binding */ togglePin),
/* harmony export */   updateNote: () => (/* binding */ updateNote)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

var STORE_KEY = "keep_notes";

/** Generate a simple unique ID. */
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
function getInitialNotes() {
  return [{
    id: uid(),
    title: "Clean Architecture",
    body: "Dependency rules are about controlling the flow of control and data. Dependencies must point inward toward the domain model.",
    pinned: true,
    archived: false,
    deleted: false,
    color: "",
    createdAt: Date.now() - 100000,
    updatedAt: Date.now() - 100000
  }, {
    id: uid(),
    title: "The Pragmatic Programmer",
    body: "It's not just what you write, it's how you manage state over time. Don't live with broken windows.",
    pinned: false,
    archived: false,
    deleted: false,
    color: "",
    createdAt: Date.now() - 200000,
    updatedAt: Date.now() - 200000
  }, {
    id: uid(),
    title: "Deep Work",
    body: "Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit.",
    pinned: false,
    archived: false,
    deleted: false,
    color: "",
    createdAt: Date.now() - 300000,
    updatedAt: Date.now() - 300000
  }];
}

/** Read all notes from localStorage. */
function readAll() {
  try {
    var parsed = JSON.parse(localStorage.getItem(STORE_KEY));
    if (!parsed || parsed.length === 0) {
      var initial = getInitialNotes();
      localStorage.setItem(STORE_KEY, JSON.stringify(initial));
      return initial;
    }
    return parsed;
  } catch (_unused) {
    var _initial = getInitialNotes();
    localStorage.setItem(STORE_KEY, JSON.stringify(_initial));
    return _initial;
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
function getNotes() {
  return readAll().filter(function (n) {
    return !n.archived && !n.deleted;
  }).sort(function (a, b) {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return b.createdAt - a.createdAt;
  });
}

/** Return archived notes. */
function getArchivedNotes() {
  return readAll().filter(function (n) {
    return n.archived && !n.deleted;
  }).sort(function (a, b) {
    return b.updatedAt - a.updatedAt;
  });
}

/** Return deleted notes. */
function getDeletedNotes() {
  return readAll().filter(function (n) {
    return n.deleted;
  }).sort(function (a, b) {
    return b.updatedAt - a.updatedAt;
  });
}

/**
 * Create a new note and persist it.
 * @param {{ title?: string, body?: string, pinned?: boolean, color?: string }} partial
 */
function saveNote() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "" : _ref$title,
    _ref$body = _ref.body,
    body = _ref$body === void 0 ? "" : _ref$body,
    _ref$pinned = _ref.pinned,
    pinned = _ref$pinned === void 0 ? false : _ref$pinned,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "" : _ref$color;
  if (!title.trim() && !body.trim()) return null; // skip empty

  var note = {
    id: uid(),
    title: title.trim(),
    body: body.trim(),
    pinned: pinned,
    archived: false,
    deleted: false,
    color: color,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  var notes = readAll();
  notes.unshift(note);
  writeAll(notes);
  return note;
}

/**
 * Update an existing note by id.
 * @param {string} id
 * @param {Partial<Note>} changes
 */
function updateNote(id, changes) {
  var notes = readAll().map(function (n) {
    return n.id === id ? _objectSpread(_objectSpread(_objectSpread({}, n), changes), {}, {
      updatedAt: Date.now()
    }) : n;
  });
  writeAll(notes);
}

/**
 * Toggle pinned state of a note.
 */
function togglePin(id) {
  var notes = readAll().map(function (n) {
    return n.id === id ? _objectSpread(_objectSpread({}, n), {}, {
      pinned: !n.pinned,
      updatedAt: Date.now()
    }) : n;
  });
  writeAll(notes);
}

/**
 * Move note to archive (or unarchive it).
 */
function archiveNote(id) {
  var notes = readAll().map(function (n) {
    return n.id === id ? _objectSpread(_objectSpread({}, n), {}, {
      archived: !n.archived,
      updatedAt: Date.now()
    }) : n;
  });
  writeAll(notes);
}

/**
 * Move note to trash (soft delete).
 */
function deleteNote(id) {
  var notes = readAll().map(function (n) {
    return n.id === id ? _objectSpread(_objectSpread({}, n), {}, {
      deleted: true,
      updatedAt: Date.now()
    }) : n;
  });
  writeAll(notes);
}

/**
 * Permanently remove a note.
 */
function permanentlyDelete(id) {
  writeAll(readAll().filter(function (n) {
    return n.id !== id;
  }));
}

/**
 * Restore a deleted or archived note back to active.
 */
function restoreNote(id) {
  var notes = readAll().map(function (n) {
    return n.id === id ? _objectSpread(_objectSpread({}, n), {}, {
      deleted: false,
      archived: false,
      updatedAt: Date.now()
    }) : n;
  });
  writeAll(notes);
}

/**
 * Empty the trash permanently.
 */
function emptyTrash() {
  writeAll(readAll().filter(function (n) {
    return !n.deleted;
  }));
}

/***/ }),

/***/ "./src/main/notes/notes.js":
/*!*********************************!*\
  !*** ./src/main/notes/notes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeNoteContainer: () => (/* binding */ _activeNoteContainer),
/* harmony export */   loadNotes: () => (/* binding */ loadNotes),
/* harmony export */   toggleSide: () => (/* binding */ toggleSide)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ "./src/main/main.js");
/* harmony import */ var _side_side__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../side/side */ "./src/side/side.js");
/* harmony import */ var _notes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes-store */ "./src/main/notes/notes-store.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var _activeNoteContainer;
var toggleSide;
var SVG = {
  pin: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z\"/></svg>",
  pinFilled: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z\"/></svg>",
  remindMe: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M440-360h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z\"/></svg>",
  collaborator: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z\"/></svg>",
  bgOptions: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z\"/></svg>",
  addImage: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z\"/></svg>",
  archive: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z\"/></svg>",
  more: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z\"/></svg>",
  undo: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z\"/></svg>",
  redo: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M396-200q-97 0-166.5-63T160-420q0-94 69.5-157T396-640h252L544-744l56-56 200 200-200 200-56-56 104-104H396q-63 0-109.5 40T240-420q0 60 46.5 100T396-280h284v80H396Z\"/></svg>",
  "delete": "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z\"/></svg>",
  checkbox: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z\"/></svg>",
  image: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z\"/></svg>"
};
function loadNotes() {
  // Remove any existing main
  var existingMain = document.querySelector("main");
  if (existingMain) existingMain.remove();
  var main = document.createElement("main");
  toggleSide = function toggleSide() {
    document.querySelector("main").classList.toggle("minimize");
    _side_side__WEBPACK_IMPORTED_MODULE_2__.SideBarDiv.classList.toggle("open");
  };
  var noteDiv = document.createElement("div");

  /* ── Take-a-note bar ── */
  function loadTakeNoteDiv() {
    var noteContainer = document.createElement("div");
    noteContainer.classList.add("take-note");
    var noteInputContainer = document.createElement("div");
    var noteInput = document.createElement("input");
    noteInput.placeholder = "Take a note…";
    noteInput.setAttribute("aria-label", "Take a note");
    noteInputContainer.appendChild(noteInput);
    var checkboxIconContainer = document.createElement("div");
    checkboxIconContainer.appendChild((0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)(SVG.checkbox));
    (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(checkboxIconContainer, "New list");
    var noteImageIconContainer = document.createElement("div");
    noteImageIconContainer.appendChild((0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)(SVG.image));
    (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(noteImageIconContainer, "New note with image");
    noteContainer.append(noteInputContainer, checkboxIconContainer, noteImageIconContainer);
    noteDiv.appendChild(noteContainer);

    /* Expand on click ─────────────────────────── */
    _activeNoteContainer = function activeNoteContainer() {
      // Detach collapsed controls
      noteContainer.removeChild(noteInputContainer);
      noteContainer.removeChild(checkboxIconContainer);
      noteContainer.removeChild(noteImageIconContainer);
      noteContainer.classList.remove("take-note");
      noteContainer.classList.add("take-note--active");

      /* ─── TOP: title + pin ─── */
      var top = document.createElement("div");
      top.classList.add("top");
      var titleWrapper = (0,___WEBPACK_IMPORTED_MODULE_0__.createEditableDiv)("Title", top);
      titleWrapper.addEventListener("keydown", function () {
        return titleWrapper.firstChild.style.display = "none";
      }, {
        once: true
      });
      var pinIcon = (0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)(SVG.pin);
      var pinIconFilled = (0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)(SVG.pinFilled);
      var isPinned = false;
      var pinBtn = document.createElement("div");
      pinBtn.appendChild(pinIcon);
      (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(pinBtn, "Pin note");
      (0,___WEBPACK_IMPORTED_MODULE_0__.makeFocusable)(pinBtn);
      pinBtn.addEventListener("click", function () {
        isPinned = !isPinned;
        (0,_main__WEBPACK_IMPORTED_MODULE_1__.toggleIcon)(pinBtn, isPinned ? pinIcon : pinIconFilled, isPinned ? pinIconFilled : pinIcon);
      });
      var IconDiv = document.createElement("div");
      IconDiv.appendChild(pinBtn);
      top.append(titleWrapper, IconDiv);

      /* ─── MIDDLE: body text ─── */
      var middle = document.createElement("div");
      middle.classList.add("middle");
      var bodyWrapper = (0,___WEBPACK_IMPORTED_MODULE_0__.createEditableDiv)("Take a note…", middle, true);
      bodyWrapper.addEventListener("keydown", function () {
        return bodyWrapper.firstChild.style.display = "none";
      }, {
        once: true
      });
      middle.appendChild(bodyWrapper);

      /* ─── BOTTOM: toolbar + close ─── */
      var bottom = document.createElement("div");
      bottom.classList.add("bottom");
      var actionsContainer = document.createElement("div");
      var iconsContainer = document.createElement("div");
      var toolbarButtons = [{
        svg: SVG.remindMe,
        tip: "Remind me"
      }, {
        svg: SVG.collaborator,
        tip: "Collaborator"
      }, {
        svg: SVG.bgOptions,
        tip: "Background options"
      }, {
        svg: SVG.addImage,
        tip: "Add image"
      }, {
        svg: SVG.archive,
        tip: "Archive"
      }, {
        svg: SVG.more,
        tip: "More"
      }, {
        svg: SVG.undo,
        tip: "Undo"
      }, {
        svg: SVG.redo,
        tip: "Redo"
      }];
      toolbarButtons.forEach(function (_ref) {
        var svg = _ref.svg,
          tip = _ref.tip;
        var btn = (0,_main__WEBPACK_IMPORTED_MODULE_1__.createSVGIcon_Container)(svg);
        (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(btn, tip);
        (0,___WEBPACK_IMPORTED_MODULE_0__.makeFocusable)(btn);
        iconsContainer.appendChild(btn);
      });
      var closeBtn = document.createElement("button");
      closeBtn.classList.add("special__button");
      closeBtn.textContent = "Close";
      closeBtn.setAttribute("aria-label", "Close note");
      function closeAndSaveNote() {
        var title = (titleWrapper.querySelector(".mainInput") || titleWrapper.lastChild).textContent.trim();
        var body = (bodyWrapper.querySelector(".mainInput") || bodyWrapper.lastChild).textContent.trim();
        if (title || body) {
          (0,_notes_store__WEBPACK_IMPORTED_MODULE_3__.saveNote)({
            title: title,
            body: body,
            pinned: isPinned,
            archived: false
          });
          renderNoteCards(notesGrid);
        }

        // Re-collapse the note bar
        noteContainer.classList.remove("take-note--active");
        noteContainer.classList.add("take-note");

        // Clear children and restore collapsed UI
        while (noteContainer.firstChild) noteContainer.removeChild(noteContainer.firstChild);
        var freshNoteInput = document.createElement("input");
        freshNoteInput.placeholder = "Take a note…";
        freshNoteInput.setAttribute("aria-label", "Take a note");
        var freshNoteInputContainer = document.createElement("div");
        freshNoteInputContainer.appendChild(freshNoteInput);
        var freshCheckbox = document.createElement("div");
        freshCheckbox.appendChild((0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)(SVG.checkbox));
        (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(freshCheckbox, "New list");
        var freshImage = document.createElement("div");
        freshImage.appendChild((0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)(SVG.image));
        (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(freshImage, "New note with image");
        noteContainer.append(freshNoteInputContainer, freshCheckbox, freshImage);

        // Re-bind click to expand again
        setTimeout(function () {
          [freshNoteInputContainer, freshCheckbox, freshImage].forEach(function (el) {
            return el.addEventListener("click", _activeNoteContainer);
          });
        }, 0);
        document.removeEventListener("click", onClickOutside);
      }
      function onClickOutside(e) {
        if (!noteContainer.contains(e.target)) {
          closeAndSaveNote();
        }
      }
      closeBtn.addEventListener("click", closeAndSaveNote);
      setTimeout(function () {
        document.addEventListener("click", onClickOutside);
      }, 0);
      var closeBtnContainer = document.createElement("div");
      closeBtnContainer.appendChild(closeBtn);
      actionsContainer.append(iconsContainer, closeBtnContainer);
      bottom.appendChild(actionsContainer);
      noteContainer.append(top, middle, bottom);
    };
    [noteInputContainer, checkboxIconContainer, noteImageIconContainer].forEach(function (el) {
      return el.addEventListener("click", _activeNoteContainer);
    });
  }

  /* ── Saved note cards ── */
  var notesGrid = document.createElement("div");
  notesGrid.classList.add("notes-grid");
  function renderNoteCards(container) {
    container.innerHTML = "";
    var notes = (0,_notes_store__WEBPACK_IMPORTED_MODULE_3__.getNotes)();
    var pinned = notes.filter(function (n) {
      return n.pinned;
    });
    var others = notes.filter(function (n) {
      return !n.pinned;
    });
    function renderGroup(group, label) {
      if (!group.length) return;
      if (label) {
        var lbl = document.createElement("p");
        lbl.classList.add("notes-section-label");
        lbl.textContent = label;
        container.appendChild(lbl);
      }
      group.forEach(function (note) {
        var card = buildNoteCard(note, container);
        container.appendChild(card);
      });
    }
    if (pinned.length && others.length) {
      renderGroup(pinned, "Pinned");
      renderGroup(others, "Others");
    } else {
      renderGroup([].concat(_toConsumableArray(pinned), _toConsumableArray(others)), "");
    }
  }
  function buildNoteCard(note, container) {
    var card = document.createElement("div");
    card.classList.add("note-card");
    if (note.pinned) card.classList.add("pinned");
    if (note.title) {
      var title = document.createElement("div");
      title.classList.add("note-card__title");
      title.textContent = note.title;
      card.appendChild(title);
    }
    if (note.body) {
      var _body = document.createElement("div");
      _body.classList.add("note-card__body");
      _body.textContent = note.body;
      card.appendChild(_body);
    }
    if (note.pinned) {
      var badge = document.createElement("div");
      badge.classList.add("pinned-badge");
      badge.appendChild((0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)(SVG.pinFilled));
      card.appendChild(badge);
    }

    /* Action buttons */
    var actions = document.createElement("div");
    actions.classList.add("note-card__actions");
    var archiveBtn = document.createElement("button");
    archiveBtn.classList.add("note-card__action-btn");
    archiveBtn.appendChild((0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)(SVG.archive));
    (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(archiveBtn, "Archive");
    archiveBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      (0,_notes_store__WEBPACK_IMPORTED_MODULE_3__.archiveNote)(note.id);
      renderNoteCards(container);
    });
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("note-card__action-btn");
    deleteBtn.appendChild((0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)(SVG["delete"]));
    (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(deleteBtn, "Delete note");
    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      (0,_notes_store__WEBPACK_IMPORTED_MODULE_3__.deleteNote)(note.id);
      card.style.transition = "opacity 0.2s ease, transform 0.2s ease";
      card.style.opacity = "0";
      card.style.transform = "scale(0.95)";
      setTimeout(function () {
        return renderNoteCards(container);
      }, 220);
    });
    var pinBtn = document.createElement("button");
    pinBtn.classList.add("note-card__action-btn");
    pinBtn.appendChild((0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)(note.pinned ? SVG.pinFilled : SVG.pin));
    (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(pinBtn, note.pinned ? "Unpin note" : "Pin note");
    pinBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      (0,_notes_store__WEBPACK_IMPORTED_MODULE_3__.togglePin)(note.id);
      renderNoteCards(container);
    });
    actions.append(pinBtn, archiveBtn, deleteBtn);
    card.appendChild(actions);
    return card;
  }

  /* ── Bootstrap ── */
  function createNotes() {
    loadTakeNoteDiv();
    renderNoteCards(notesGrid);
    main.append(noteDiv, notesGrid);
    return main;
  }
  createNotes();
  var body = document.querySelector("body");
  body.appendChild(main);
}


/***/ }),

/***/ "./src/main/reminders/reminders.js":
/*!*****************************************!*\
  !*** ./src/main/reminders/reminders.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadReminders: () => (/* binding */ loadReminders)
/* harmony export */ });
/**
 * reminders.js – Reminders section placeholder.
 * Renders an "empty state" view consistent with the app's design.
 */
function loadReminders() {
  var existingMain = document.querySelector("main");
  if (existingMain) existingMain.remove();
  var main = document.createElement("main");
  var emptyState = document.createElement("div");
  emptyState.classList.add("empty-state");
  var icon = document.createElement("div");
  icon.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"120\" viewBox=\"0 -960 960 960\" width=\"120\">\n    <path d=\"M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z\"/>\n  </svg>";
  var text = document.createElement("p");
  text.textContent = "No reminders";
  var sub = document.createElement("small");
  sub.textContent = "Notes with upcoming reminders appear here.";
  emptyState.append(icon, text, sub);
  main.appendChild(emptyState);
  document.querySelector("body").appendChild(main);
}

/***/ }),

/***/ "./src/main/trash/trash.js":
/*!*********************************!*\
  !*** ./src/main/trash/trash.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadTrash: () => (/* binding */ loadTrash)
/* harmony export */ });
/* harmony import */ var _notes_notes_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notes/notes-store */ "./src/main/notes/notes-store.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/**
 * trash.js – Trash section.
 * Shows deleted notes with permanent delete and restore options.
 */


var SVG_RESTORE = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"18\" viewBox=\"0 -960 960 960\" width=\"18\"><path d=\"M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z\"/></svg>";
var SVG_DELETE = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"18\" viewBox=\"0 -960 960 960\" width=\"18\"><path d=\"M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z\"/></svg>";
function loadTrash() {
  var existingMain = document.querySelector("main");
  if (existingMain) existingMain.remove();
  var main = document.createElement("main");
  renderTrashContent(main);
  document.querySelector("body").appendChild(main);
}
function renderTrashContent(main) {
  main.innerHTML = "";
  var notes = (0,_notes_notes_store__WEBPACK_IMPORTED_MODULE_0__.getDeletedNotes)();
  if (!notes.length) {
    var emptyState = document.createElement("div");
    emptyState.classList.add("empty-state");
    emptyState.innerHTML = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"120\" viewBox=\"0 -960 960 960\" width=\"120\">\n        <path d=\"M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z\"/>\n      </svg>\n      <p>No notes in Trash</p>\n      <small>Notes in Trash are deleted after 7 days.</small>\n    ";
    main.appendChild(emptyState);
    return;
  }
  var header = document.createElement("div");
  header.style.cssText = "padding: 24px 24px 8px; display: flex; align-items: center; justify-content: space-between;";
  var info = document.createElement("small");
  info.textContent = "Notes in Trash are permanently deleted after 7 days.";
  info.style.color = "var(--text-muted)";
  var emptyBtn = document.createElement("button");
  emptyBtn.classList.add("special__button");
  emptyBtn.textContent = "Empty Trash";
  emptyBtn.addEventListener("click", function () {
    (0,_notes_notes_store__WEBPACK_IMPORTED_MODULE_0__.emptyTrash)();
    renderTrashContent(main);
  });
  header.append(info, emptyBtn);
  main.appendChild(header);
  var grid = document.createElement("div");
  grid.classList.add("notes-grid");
  grid.style.padding = "8px 16px 24px";
  notes.forEach(function (note) {
    var card = document.createElement("div");
    card.classList.add("note-card");
    card.style.opacity = "0.7";
    if (note.title) {
      var title = document.createElement("div");
      title.classList.add("note-card__title");
      title.textContent = note.title;
      card.appendChild(title);
    }
    if (note.body) {
      var body = document.createElement("div");
      body.classList.add("note-card__body");
      body.textContent = note.body;
      card.appendChild(body);
    }
    var actions = document.createElement("div");
    actions.classList.add("note-card__actions");
    var restoreBtn = document.createElement("button");
    restoreBtn.classList.add("note-card__action-btn");
    restoreBtn.appendChild((0,___WEBPACK_IMPORTED_MODULE_1__.createSVGIcon)(SVG_RESTORE));
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeHoverable)(restoreBtn, "Restore");
    restoreBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      (0,_notes_notes_store__WEBPACK_IMPORTED_MODULE_0__.restoreNote)(note.id);
      renderTrashContent(main);
    });
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("note-card__action-btn");
    deleteBtn.appendChild((0,___WEBPACK_IMPORTED_MODULE_1__.createSVGIcon)(SVG_DELETE));
    (0,___WEBPACK_IMPORTED_MODULE_1__.makeHoverable)(deleteBtn, "Delete forever");
    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      (0,_notes_notes_store__WEBPACK_IMPORTED_MODULE_0__.permanentlyDelete)(note.id);
      renderTrashContent(main);
    });
    actions.append(restoreBtn, deleteBtn);
    card.appendChild(actions);
    grid.appendChild(card);
  });
  main.appendChild(grid);
}

/***/ }),

/***/ "./src/side/side.js":
/*!**************************!*\
  !*** ./src/side/side.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SideBarDiv: () => (/* binding */ SideBarDiv),
/* harmony export */   loadSide: () => (/* binding */ loadSide),
/* harmony export */   removeClassOnSmallScreen: () => (/* binding */ removeClassOnSmallScreen)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
var SideBarDiv = document.createElement("div");


var labels = (0,___WEBPACK_IMPORTED_MODULE_0__.getArrayFromLocalStorage)();
function createFeature(txt, svg) {
  var featureDiv = document.createElement("div");
  featureDiv.classList.add("side__feature");
  featureDiv.id = (txt.charAt(0).toUpperCase() + txt.slice(1)).split(" ").join("-");
  var IconDiv = document.createElement("div");
  var Icon = (0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)(svg);
  var IconContainer = document.createElement("div");
  IconContainer.classList.add("side__feature--Icon");
  IconContainer.appendChild(Icon);
  IconDiv.appendChild(IconContainer);
  var featureTxtDiv = document.createElement("div");
  var featureTxt = document.createElement("span");
  featureTxt.classList.add("side__feature--txt");
  featureTxt.textContent = txt.charAt(0).toUpperCase() + txt.slice(1);
  (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(IconContainer, featureTxt.textContent);
  featureTxtDiv.appendChild(featureTxt);
  featureDiv.append(IconDiv, featureTxtDiv);
  SideBarDiv.appendChild(featureDiv);
}
function createLabelsFeatures() {
  function createLabelFeature(txt) {
    var featureDiv = document.createElement("div");
    featureDiv.classList.add("side__feature");
    featureDiv.id = txt.split(" ").join("-");
    var IconDiv = document.createElement("div");
    var Icon = (0,___WEBPACK_IMPORTED_MODULE_0__.createSVGIcon)("<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M840-480 666-234q-11 16-28.5 25t-37.5 9H200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h400q20 0 37.5 9t28.5 25l174 246Zm-98 0L600-680H200v400h400l142-200Zm-542 0v200-400 200Z\"/></svg>");
    var IconContainer = document.createElement("div");
    IconContainer.classList.add("side__feature--Icon");
    (0,___WEBPACK_IMPORTED_MODULE_0__.makeHoverable)(IconContainer, txt);
    IconContainer.appendChild(Icon);
    IconDiv.appendChild(IconContainer);
    var featureTxtDiv = document.createElement("div");
    var featureTxt = document.createElement("span");
    featureTxt.classList.add("side__feature--txt");
    featureTxt.textContent = txt;
    featureTxtDiv.appendChild(featureTxt);
    featureDiv.append(IconDiv, featureTxtDiv);
    SideBarDiv.appendChild(featureDiv);
  }
  for (var i = 0; i < labels.length; i++) {
    createLabelFeature(labels[i]);
  }
}
function loadSide() {
  var body = document.querySelector("body");

  // const exisitingSide = document.querySelectorAll(".side");
  // const exisitingSideFeature = document.querySelectorAll(".side__feature");
  // exisitingSide.forEach(() => {
  //   if (exisitingSide) {
  //     exisitingSideFeature.forEach(() => {
  //       if (exisitingSideFeature) {
  //         exisitingSide.remove(exisitingSideFeature);
  //       }
  //     });
  //   body.removeChild(exisitingSide);
  // });
  SideBarDiv.classList.add("side");
  createFeature("notes", "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z\"></path></svg>");
  createFeature("reminders", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z\"/></svg>");
  createLabelsFeatures();
  createFeature("edit labels", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z\"/></svg>");
  createFeature("archive", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z\"/></svg>");
  createFeature("trash", "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z\"/></svg>");
  body.appendChild(SideBarDiv);
}
function removeClassOnSmallScreen(mediaQuery) {
  var i = 0;
  if (SideBarDiv.classList.contains("clicked") && i === 0) {
    if (mediaQuery.matches) {
      SideBarDiv.classList.remove("open");
      SideBarDiv.classList.remove("clicked");
      i++;
    }
  }
}
SideBarDiv.addEventListener("mouseenter", function () {
  setTimeout(function () {
    SideBarDiv.classList.add("open");
  }, 250);
  (0,___WEBPACK_IMPORTED_MODULE_0__.focusIn)();
});
SideBarDiv.addEventListener("mouseleave", function () {
  if (!SideBarDiv.classList.contains("clicked")) {
    SideBarDiv.classList.remove("open");
    (0,___WEBPACK_IMPORTED_MODULE_0__.focusOut)();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/header/header.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/header/header.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ────────────────────────────────────────────
   Header shell
──────────────────────────────────────────── */

header {
  height: 64px;
  padding: 8px 16px 8px 8px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 20;
  background-color: var(--body-bg);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(10px);
}

/* ────────────────────────────────────────────
   Three-column layout
──────────────────────────────────────────── */

.left,
.middle,
.right {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.left,
.right {
  height: 48px;
}

.left {
  flex: 0 0 232px;
  padding-right: 24px;
  gap: 4px;
}

.right {
  flex: 0 0 144px;
}

header .middle {
  flex: 1;
  padding: 0 16px;
  justify-content: center;
}

/* ────────────────────────────────────────────
   Menu icon button
──────────────────────────────────────────── */

.left > div:first-child {
  flex: 0 0 48px;
}

.left > div:first-child div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.left > div:first-child:hover div,
.left > div.active > div {
  background-color: var(--hover-overlay);
}

.left svg path {
  fill: var(--text-primary);
}

.left svg {
  width: 24px;
  height: 24px;
}

/* ────────────────────────────────────────────
   Logo
──────────────────────────────────────────── */

.left > div:nth-child(2) {
  flex: 1;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
}

.logo-container:hover {
  background-color: var(--hover-overlay);
}

.logo-container img {
  height: 40px;
  width: 40px;
  object-fit: contain;
  flex-shrink: 0;
}

.logo-container span {
  font-size: 22px;
  font-weight: 400;
  font-family: "Product Sans", sans-serif;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  white-space: nowrap;
  position: relative;
  top: 1px;
}

.logo-container span:hover,
.logo-container span:focus {
  outline: none;
  text-decoration: underline;
}

/* ────────────────────────────────────────────
   Search field
──────────────────────────────────────────── */

.search-field {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min(720px, 100%);
  height: 48px;
  border-radius: var(--radius-md);
  background-color: var(--surface-raised);
  border: 1px solid transparent;
  transition: background-color var(--transition-med), border-color var(--transition-med), box-shadow var(--transition-med);
}

.search-field:hover {
  background-color: #333438;
}

.search-field.focused {
  background-color: #fff;
  border-color: var(--border-focus);
  box-shadow: 0 4px 20px rgba(251, 188, 4, 0.15);
}

.search-field input {
  flex: 1;
  height: 100%;
  padding: 0 8px;
  font-size: 16px;
  font-family: inherit;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--text-secondary);
  font-weight: 400;
}

.search-field.focused input {
  color: #202124;
}

.search-field.focused input::placeholder {
  color: #9aa0a6;
}

.search-field ::placeholder {
  color: var(--text-secondary);
}

.search-field div:nth-child(1),
.search-field div:nth-child(3) {
  flex: 0 0 48px;
  height: 48px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Clear button: hidden until focused */
.search-field div:nth-child(3) button {
  display: none;
}

.search-field.focused div:nth-child(3) button {
  display: flex;
}

.search-field button {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.search-field button:hover {
  background-color: var(--hover-overlay);
}

.search-field.focused button:hover {
  background-color: var(--off-white);
}

.search-field button svg path {
  fill: var(--text-secondary);
  transition: fill var(--transition-fast);
}

.search-field.focused button svg path {
  fill: var(--grey);
}

.search-field button:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

/* ────────────────────────────────────────────
   Right action buttons
──────────────────────────────────────────── */

.additional-btns {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  height: 48px;
}

.additional-btns > div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.additional-btns > div > div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.additional-btns > div:hover {
  background-color: var(--hover-overlay);
}

.additional-btns > div:hover svg path {
  fill: var(--text-primary);
}

.additional-btns > div:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
  border-radius: 50%;
}

/* ────────────────────────────────────────────
   Logo tooltip override
──────────────────────────────────────────── */

.logo-container [data-tool-tip]::before {
  background-color: rgba(30, 30, 35, 0.95);
  padding: 8px 14px;
  font-size: 13px;
  left: 0;
  transform: translate(0, 5px);
}

header .left div:first-child [data-tool-tip]::before {
  top: calc(100% + 4px);
}

/* ────────────────────────────────────────────
   Responsive
──────────────────────────────────────────── */

@media (max-width: 1024px) {
  .left {
    flex: 0 0 190px;
  }
  header .middle {
    padding: 0 8px;
  }
}

@media (max-width: 794px) {
  .left {
    flex: 0 0 auto;
    padding-right: 8px;
  }

  header .middle {
    flex: 1;
    padding: 0 8px;
  }

  .search-field {
    width: 100%;
  }

  /* Collapse search on very small screens */
  @media (max-width: 480px) {
    .search-field {
      width: 44px;
      background-color: transparent;
    }

    .search-field input,
    .search-field div:nth-child(3) {
      display: none;
    }

    .search-field.focused {
      width: 100%;
      background-color: #fff;
    }

    .search-field.focused input {
      display: block;
    }

    .search-field.focused div:nth-child(3) {
      display: flex;
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/header/header.css"],"names":[],"mappings":"AAAA;;8CAE8C;;AAE9C;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,gCAAgC;EAChC,sCAAsC;EACtC,2BAA2B;AAC7B;;AAEA;;8CAE8C;;AAE9C;;;EAGE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,eAAe;EACf,uBAAuB;AACzB;;AAEA;;8CAE8C;;AAE9C;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,mDAAmD;AACrD;;AAEA;;EAEE,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;;8CAE8C;;AAE9C;EACE,OAAO;AACT;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,qBAAqB;EACrB,gBAAgB;EAChB,+BAA+B;EAC/B,mDAAmD;AACrD;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,uCAAuC;EACvC,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;AACV;;AAEA;;EAEE,aAAa;EACb,0BAA0B;AAC5B;;AAEA;;8CAE8C;;AAE9C;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,+BAA+B;EAC/B,uCAAuC;EACvC,6BAA6B;EAC7B,wHAAwH;AAC1H;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,iCAAiC;EACjC,8CAA8C;AAChD;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;;EAEE,cAAc;EACd,YAAY;EACZ,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA,uCAAuC;AACvC;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,mDAAmD;AACrD;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;;8CAE8C;;AAE9C;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,mDAAmD;AACrD;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sCAAsC;EACtC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;8CAE8C;;AAE9C;EACE,wCAAwC;EACxC,iBAAiB;EACjB,eAAe;EACf,OAAO;EACP,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;8CAE8C;;AAE9C;EACE;IACE,eAAe;EACjB;EACA;IACE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,cAAc;IACd,kBAAkB;EACpB;;EAEA;IACE,OAAO;IACP,cAAc;EAChB;;EAEA;IACE,WAAW;EACb;;EAEA,0CAA0C;EAC1C;IACE;MACE,WAAW;MACX,6BAA6B;IAC/B;;IAEA;;MAEE,aAAa;IACf;;IAEA;MACE,WAAW;MACX,sBAAsB;IACxB;;IAEA;MACE,cAAc;IAChB;;IAEA;MACE,aAAa;IACf;EACF;AACF","sourcesContent":["/* ────────────────────────────────────────────\n   Header shell\n──────────────────────────────────────────── */\n\nheader {\n  height: 64px;\n  padding: 8px 16px 8px 8px;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  z-index: 20;\n  background-color: var(--body-bg);\n  border-bottom: 1px solid var(--border);\n  backdrop-filter: blur(10px);\n}\n\n/* ────────────────────────────────────────────\n   Three-column layout\n──────────────────────────────────────────── */\n\n.left,\n.middle,\n.right {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.left,\n.right {\n  height: 48px;\n}\n\n.left {\n  flex: 0 0 232px;\n  padding-right: 24px;\n  gap: 4px;\n}\n\n.right {\n  flex: 0 0 144px;\n}\n\nheader .middle {\n  flex: 1;\n  padding: 0 16px;\n  justify-content: center;\n}\n\n/* ────────────────────────────────────────────\n   Menu icon button\n──────────────────────────────────────────── */\n\n.left > div:first-child {\n  flex: 0 0 48px;\n}\n\n.left > div:first-child div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  width: 48px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color var(--transition-fast);\n}\n\n.left > div:first-child:hover div,\n.left > div.active > div {\n  background-color: var(--hover-overlay);\n}\n\n.left svg path {\n  fill: var(--text-primary);\n}\n\n.left svg {\n  width: 24px;\n  height: 24px;\n}\n\n/* ────────────────────────────────────────────\n   Logo\n──────────────────────────────────────────── */\n\n.left > div:nth-child(2) {\n  flex: 1;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  text-decoration: none;\n  padding: 4px 8px;\n  border-radius: var(--radius-sm);\n  transition: background-color var(--transition-fast);\n}\n\n.logo-container:hover {\n  background-color: var(--hover-overlay);\n}\n\n.logo-container img {\n  height: 40px;\n  width: 40px;\n  object-fit: contain;\n  flex-shrink: 0;\n}\n\n.logo-container span {\n  font-size: 22px;\n  font-weight: 400;\n  font-family: \"Product Sans\", sans-serif;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n  position: relative;\n  top: 1px;\n}\n\n.logo-container span:hover,\n.logo-container span:focus {\n  outline: none;\n  text-decoration: underline;\n}\n\n/* ────────────────────────────────────────────\n   Search field\n──────────────────────────────────────────── */\n\n.search-field {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: min(720px, 100%);\n  height: 48px;\n  border-radius: var(--radius-md);\n  background-color: var(--surface-raised);\n  border: 1px solid transparent;\n  transition: background-color var(--transition-med), border-color var(--transition-med), box-shadow var(--transition-med);\n}\n\n.search-field:hover {\n  background-color: #333438;\n}\n\n.search-field.focused {\n  background-color: #fff;\n  border-color: var(--border-focus);\n  box-shadow: 0 4px 20px rgba(251, 188, 4, 0.15);\n}\n\n.search-field input {\n  flex: 1;\n  height: 100%;\n  padding: 0 8px;\n  font-size: 16px;\n  font-family: inherit;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  color: var(--text-secondary);\n  font-weight: 400;\n}\n\n.search-field.focused input {\n  color: #202124;\n}\n\n.search-field.focused input::placeholder {\n  color: #9aa0a6;\n}\n\n.search-field ::placeholder {\n  color: var(--text-secondary);\n}\n\n.search-field div:nth-child(1),\n.search-field div:nth-child(3) {\n  flex: 0 0 48px;\n  height: 48px;\n  padding: 0 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Clear button: hidden until focused */\n.search-field div:nth-child(3) button {\n  display: none;\n}\n\n.search-field.focused div:nth-child(3) button {\n  display: flex;\n}\n\n.search-field button {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color var(--transition-fast);\n}\n\n.search-field button:hover {\n  background-color: var(--hover-overlay);\n}\n\n.search-field.focused button:hover {\n  background-color: var(--off-white);\n}\n\n.search-field button svg path {\n  fill: var(--text-secondary);\n  transition: fill var(--transition-fast);\n}\n\n.search-field.focused button svg path {\n  fill: var(--grey);\n}\n\n.search-field button:focus-visible {\n  outline: 2px solid var(--border-focus);\n  outline-offset: 2px;\n}\n\n/* ────────────────────────────────────────────\n   Right action buttons\n──────────────────────────────────────────── */\n\n.additional-btns {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 4px;\n  height: 48px;\n}\n\n.additional-btns > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color var(--transition-fast);\n}\n\n.additional-btns > div > div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.additional-btns > div:hover {\n  background-color: var(--hover-overlay);\n}\n\n.additional-btns > div:hover svg path {\n  fill: var(--text-primary);\n}\n\n.additional-btns > div:focus-visible {\n  outline: 2px solid var(--border-focus);\n  outline-offset: 2px;\n  border-radius: 50%;\n}\n\n/* ────────────────────────────────────────────\n   Logo tooltip override\n──────────────────────────────────────────── */\n\n.logo-container [data-tool-tip]::before {\n  background-color: rgba(30, 30, 35, 0.95);\n  padding: 8px 14px;\n  font-size: 13px;\n  left: 0;\n  transform: translate(0, 5px);\n}\n\nheader .left div:first-child [data-tool-tip]::before {\n  top: calc(100% + 4px);\n}\n\n/* ────────────────────────────────────────────\n   Responsive\n──────────────────────────────────────────── */\n\n@media (max-width: 1024px) {\n  .left {\n    flex: 0 0 190px;\n  }\n  header .middle {\n    padding: 0 8px;\n  }\n}\n\n@media (max-width: 794px) {\n  .left {\n    flex: 0 0 auto;\n    padding-right: 8px;\n  }\n\n  header .middle {\n    flex: 1;\n    padding: 0 8px;\n  }\n\n  .search-field {\n    width: 100%;\n  }\n\n  /* Collapse search on very small screens */\n  @media (max-width: 480px) {\n    .search-field {\n      width: 44px;\n      background-color: transparent;\n    }\n\n    .search-field input,\n    .search-field div:nth-child(3) {\n      display: none;\n    }\n\n    .search-field.focused {\n      width: 100%;\n      background-color: #fff;\n    }\n\n    .search-field.focused input {\n      display: block;\n    }\n\n    .search-field.focused div:nth-child(3) {\n      display: flex;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./header/header.css */ "./node_modules/css-loader/dist/cjs.js!./src/header/header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_side_side_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./side/side.css */ "./node_modules/css-loader/dist/cjs.js!./src/side/side.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./main/main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main/main.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_6__);
// Imports







var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/pxiDypQkot1TnFhsFMOfGShVF9eO.woff2 */ "./src/assets/pxiDypQkot1TnFhsFMOfGShVF9eO.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_header_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_side_side_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_main_main_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_6___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Google Sans";
  src: url("https://fonts.gstatic.com/s/googlesans/v58/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvQ.woff2")
    format("woff2");
  font-style: normal;
  font-weight: 400;
  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+304,
    U+308, U+329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
    U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: "Product Sans";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2");
  font-style: normal;
  font-weight: 400;
  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+304,
    U+308, U+329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
    U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: "Roboto";
  src: url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2")
    format("woff2");
  font-style: normal;
  font-weight: 400;
  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+304,
    U+308, U+329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
    U+2215, U+FEFF, U+FFFD;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

:root {
  /* Core palette */
  --body-bg: #1a1b1e;
  --surface: #202124;
  --surface-raised: #2a2b2e;
  --surface-overlay: #313235;

  /* Text */
  --text-primary: #e8e8e8;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;

  /* Brand amber/yellow — Google Keep warmth */
  --accent: #fbbc04;
  --accent-dim: rgba(251, 188, 4, 0.12);

  /* Legacy aliases (kept for existing code) */
  --grey: rgb(82, 83, 85);
  --light-grey: #a1a1aa;
  --off-white: #e8e8e8;
  --lighter-grey: #e8e8e8;

  /* Interaction states */
  --hover-overlay: rgba(255, 255, 255, 0.07);
  --active-feature: rgba(251, 188, 4, 0.18);
  --header-svg-hover: rgba(255, 255, 255, 0.075);

  /* Borders */
  --border: rgba(255, 255, 255, 0.12);
  --border-focus: rgba(251, 188, 4, 0.6);

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.4);

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 9999px;

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-med: 0.25s ease;
  --transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

body {
  font-family: "Google Sans", "Product Sans", sans-serif;
  font-weight: 400;
  color: var(--text-primary);
  background-color: var(--body-bg);
  position: relative;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

svg path {
  fill: var(--light-grey);
  transition: fill var(--transition-fast);
}

svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

/* ────────────────────────────────────────────
   Tooltip system
──────────────────────────────────────────── */

[data-tool-tip] {
  position: relative;
}

[data-tool-tip]::before {
  content: attr(data-tool-tip);
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.02em;
  z-index: 100;
  background-color: rgba(50, 50, 55, 0.95);
  backdrop-filter: blur(8px);
  color: var(--text-primary);
  padding: 5px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  visibility: hidden;
  opacity: 0;
  transition: opacity var(--transition-med), visibility var(--transition-med);
  white-space: nowrap;
  pointer-events: none;
  box-shadow: var(--shadow-sm);
}

[data-tool-tip]:focus::before,
[data-tool-tip]:hover::before {
  visibility: visible;
  opacity: 1;
}

/* ────────────────────────────────────────────
   Shared button style
──────────────────────────────────────────── */

.special__button {
  height: 36px;
  padding: 8px 20px;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
  color: var(--accent);
  border-radius: var(--radius-sm);
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.special__button:hover {
  background-color: var(--accent-dim);
}

.special__button:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

/* ────────────────────────────────────────────
   Scrollbar styling
──────────────────────────────────────────── */

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--grey);
  border-radius: var(--radius-pill);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--light-grey);
}

/* ────────────────────────────────────────────
   Focus ring (accessibility)
──────────────────────────────────────────── */

:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

/* ────────────────────────────────────────────
   Placeholder / input text colour fix
──────────────────────────────────────────── */

::placeholder {
  color: var(--text-muted);
  opacity: 1;
}

input {
  color: var(--text-primary);
  font-family: inherit;
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAKA;EACE,0BAA0B;EAC1B;mBACiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB;;0BAEwB;AAC1B;;AAEA;EACE,2BAA2B;EAC3B,4DAAuE;EACvE,kBAAkB;EAClB,gBAAgB;EAChB;;0BAEwB;AAC1B;;AAEA;EACE,qBAAqB;EACrB;mBACiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB;;0BAEwB;AAC1B;;AAEA;EACE,8BAA8B;EAC9B,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,0BAA0B;;EAE1B,SAAS;EACT,uBAAuB;EACvB,yBAAyB;EACzB,qBAAqB;;EAErB,4CAA4C;EAC5C,iBAAiB;EACjB,qCAAqC;;EAErC,4CAA4C;EAC5C,uBAAuB;EACvB,qBAAqB;EACrB,oBAAoB;EACpB,uBAAuB;;EAEvB,uBAAuB;EACvB,0CAA0C;EAC1C,yCAAyC;EACzC,8CAA8C;;EAE9C,YAAY;EACZ,mCAAmC;EACnC,sCAAsC;;EAEtC,YAAY;EACZ,iEAAiE;EACjE,kEAAkE;EAClE,kEAAkE;;EAElE,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;;EAErB,gBAAgB;EAChB,6BAA6B;EAC7B,4BAA4B;EAC5B,oDAAoD;AACtD;;AAEA;EACE,sDAAsD;EACtD,gBAAgB;EAChB,0BAA0B;EAC1B,gCAAgC;EAChC,kBAAkB;EAClB,iBAAiB;EACjB,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,uCAAuC;AACzC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;;8CAE8C;;AAE9C;EACE,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,qBAAqB;EACrB,SAAS;EACT,2BAA2B;EAC3B,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,wCAAwC;EACxC,0BAA0B;EAC1B,0BAA0B;EAC1B,iBAAiB;EACjB,+BAA+B;EAC/B,+BAA+B;EAC/B,kBAAkB;EAClB,UAAU;EACV,2EAA2E;EAC3E,mBAAmB;EACnB,oBAAoB;EACpB,4BAA4B;AAC9B;;AAEA;;EAEE,mBAAmB;EACnB,UAAU;AACZ;;AAEA;;8CAE8C;;AAE9C;EACE,YAAY;EACZ,iBAAiB;EACjB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,oBAAoB;EACpB,+BAA+B;EAC/B,eAAe;EACf,sBAAsB;EACtB,iFAAiF;AACnF;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;;8CAE8C;;AAE9C;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,iCAAiC;AACnC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;8CAE8C;;AAE9C;EACE,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;;8CAE8C;;AAE9C;EACE,wBAAwB;EACxB,UAAU;AACZ;;AAEA;EACE,0BAA0B;EAC1B,oBAAoB;AACtB","sourcesContent":["@import \"../node_modules/normalize.css/normalize.css\";\n@import \"./header/header.css\";\n@import \"./side/side.css\";\n@import \"./main/main.css\";\n\n@font-face {\n  font-family: \"Google Sans\";\n  src: url(\"https://fonts.gstatic.com/s/googlesans/v58/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvQ.woff2\")\n    format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+304,\n    U+308, U+329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n    U+2215, U+FEFF, U+FFFD;\n}\n\n@font-face {\n  font-family: \"Product Sans\";\n  src: url(\"./assets/pxiDypQkot1TnFhsFMOfGShVF9eO.woff2\") format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+304,\n    U+308, U+329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n    U+2215, U+FEFF, U+FFFD;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(\"https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2\")\n    format(\"woff2\");\n  font-style: normal;\n  font-weight: 400;\n  unicode-range: U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+304,\n    U+308, U+329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n    U+2215, U+FEFF, U+FFFD;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n:root {\n  /* Core palette */\n  --body-bg: #1a1b1e;\n  --surface: #202124;\n  --surface-raised: #2a2b2e;\n  --surface-overlay: #313235;\n\n  /* Text */\n  --text-primary: #e8e8e8;\n  --text-secondary: #a1a1aa;\n  --text-muted: #71717a;\n\n  /* Brand amber/yellow — Google Keep warmth */\n  --accent: #fbbc04;\n  --accent-dim: rgba(251, 188, 4, 0.12);\n\n  /* Legacy aliases (kept for existing code) */\n  --grey: rgb(82, 83, 85);\n  --light-grey: #a1a1aa;\n  --off-white: #e8e8e8;\n  --lighter-grey: #e8e8e8;\n\n  /* Interaction states */\n  --hover-overlay: rgba(255, 255, 255, 0.07);\n  --active-feature: rgba(251, 188, 4, 0.18);\n  --header-svg-hover: rgba(255, 255, 255, 0.075);\n\n  /* Borders */\n  --border: rgba(255, 255, 255, 0.12);\n  --border-focus: rgba(251, 188, 4, 0.6);\n\n  /* Shadows */\n  --shadow-sm: 0 1px 3px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3);\n  --shadow-md: 0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3);\n  --shadow-lg: 0 8px 24px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.4);\n\n  /* Radius */\n  --radius-sm: 4px;\n  --radius-md: 8px;\n  --radius-lg: 16px;\n  --radius-pill: 9999px;\n\n  /* Transitions */\n  --transition-fast: 0.15s ease;\n  --transition-med: 0.25s ease;\n  --transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\nbody {\n  font-family: \"Google Sans\", \"Product Sans\", sans-serif;\n  font-weight: 400;\n  color: var(--text-primary);\n  background-color: var(--body-bg);\n  position: relative;\n  min-height: 100vh;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nsvg path {\n  fill: var(--light-grey);\n  transition: fill var(--transition-fast);\n}\n\nsvg {\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n}\n\n/* ────────────────────────────────────────────\n   Tooltip system\n──────────────────────────────────────────── */\n\n[data-tool-tip] {\n  position: relative;\n}\n\n[data-tool-tip]::before {\n  content: attr(data-tool-tip);\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  z-index: 100;\n  background-color: rgba(50, 50, 55, 0.95);\n  backdrop-filter: blur(8px);\n  color: var(--text-primary);\n  padding: 5px 10px;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity var(--transition-med), visibility var(--transition-med);\n  white-space: nowrap;\n  pointer-events: none;\n  box-shadow: var(--shadow-sm);\n}\n\n[data-tool-tip]:focus::before,\n[data-tool-tip]:hover::before {\n  visibility: visible;\n  opacity: 1;\n}\n\n/* ────────────────────────────────────────────\n   Shared button style\n──────────────────────────────────────────── */\n\n.special__button {\n  height: 36px;\n  padding: 8px 20px;\n  background-color: transparent;\n  border: none;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  color: var(--accent);\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  letter-spacing: 0.01em;\n  transition: background-color var(--transition-fast), color var(--transition-fast);\n}\n\n.special__button:hover {\n  background-color: var(--accent-dim);\n}\n\n.special__button:focus-visible {\n  outline: 2px solid var(--border-focus);\n  outline-offset: 2px;\n}\n\n/* ────────────────────────────────────────────\n   Scrollbar styling\n──────────────────────────────────────────── */\n\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n\n::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--grey);\n  border-radius: var(--radius-pill);\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--light-grey);\n}\n\n/* ────────────────────────────────────────────\n   Focus ring (accessibility)\n──────────────────────────────────────────── */\n\n:focus-visible {\n  outline: 2px solid var(--border-focus);\n  outline-offset: 2px;\n}\n\n/* ────────────────────────────────────────────\n   Placeholder / input text colour fix\n──────────────────────────────────────────── */\n\n::placeholder {\n  color: var(--text-muted);\n  opacity: 1;\n}\n\ninput {\n  color: var(--text-primary);\n  font-family: inherit;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main/archive/archive.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main/archive/archive.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* archive section — layout is handled by shared .notes-grid and .note-card classes */
`, "",{"version":3,"sources":["webpack://./src/main/archive/archive.css"],"names":[],"mappings":"AAAA,qFAAqF","sourcesContent":["/* archive section — layout is handled by shared .notes-grid and .note-card classes */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main/edit-labels/edit_labels.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main/edit-labels/edit_labels.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ────────────────────────────────────────────
   Modal overlay
──────────────────────────────────────────── */

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  z-index: 50;
  animation: overlayIn 0.2s ease;
}

@keyframes overlayIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* ────────────────────────────────────────────
   Modal card
──────────────────────────────────────────── */

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 60;
  background-color: var(--surface-overlay);
  color: var(--text-primary);
  width: min(340px, calc(100vw - 32px));
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
  animation: modalIn 0.22s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

@keyframes modalIn {
  from { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }
  to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}

/* ────────────────────────────────────────────
   Modal top section
──────────────────────────────────────────── */

.modal__top {
  width: 100%;
  padding: 20px 16px 12px;
}

.modal__top > span {
  display: block;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.01em;
  margin-bottom: 12px;
  color: var(--text-primary);
}

/* ────────────────────────────────────────────
   Label row (create new + existing labels)
──────────────────────────────────────────── */

.label {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  height: 48px;
  padding: 0 4px;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
}

.label:hover {
  background-color: var(--hover-overlay);
}

/* ────────────────────────────────────────────
   Label input
──────────────────────────────────────────── */

.modal__inputContainer {
  flex: 1;
  position: relative;
}

.modal__input {
  width: 100%;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border: none;
  color: var(--text-primary);
  padding: 2px 0;
}

.modal__inputContainer::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background-color: var(--accent);
  border-radius: 1px;
  transform: scaleX(0);
  transition: transform 0.15s ease;
}

.modal__inputContainer.focused::after {
  transform: scaleX(1);
}

.modal__input::placeholder {
  color: var(--text-muted);
  font-weight: 400;
}

/* ────────────────────────────────────────────
   Label icon buttons
──────────────────────────────────────────── */

.label > div:nth-child(1),
.label > div:nth-child(3) {
  flex: 0 0 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.label > div:nth-child(1) svg,
.label > div:nth-child(3) svg {
  width: 20px;
  height: 20px;
}

.label > div:nth-child(1):hover,
.label > div:nth-child(3):hover {
  background-color: var(--hover-overlay);
}

.label > div:nth-child(1):hover svg path,
.label > div:nth-child(3):hover svg path {
  fill: var(--text-primary);
}

.label > div:nth-child(1):focus-visible,
.label > div:nth-child(3):focus-visible {
  outline: 2px solid var(--border-focus);
  border-radius: 50%;
}

/* The create-label row: hide "done" icon until editing */
.label:nth-child(2) > div:nth-child(3) {
  visibility: hidden;
}

.label.block:nth-child(2) > div:nth-child(3) {
  visibility: visible;
}

/* ────────────────────────────────────────────
   Modal bottom (Done button)
──────────────────────────────────────────── */

.modal__bottom {
  padding: 12px 16px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: flex-end;
}
`, "",{"version":3,"sources":["webpack://./src/main/edit-labels/edit_labels.css"],"names":[],"mappings":"AAAA;;8CAE8C;;AAE9C;EACE,eAAe;EACf,QAAQ;EACR,+BAA+B;EAC/B,0BAA0B;EAC1B,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,OAAO,UAAU,EAAE;EACnB,OAAO,UAAU,EAAE;AACrB;;AAEA;;8CAE8C;;AAE9C;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,WAAW;EACX,wCAAwC;EACxC,0BAA0B;EAC1B,qCAAqC;EACrC,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,+BAA+B;EAC/B,+BAA+B;EAC/B,4BAA4B;EAC5B,qDAAqD;EACrD,gBAAgB;AAClB;;AAEA;EACE,OAAO,UAAU,EAAE,4CAA4C,EAAE;EACjE,OAAO,UAAU,EAAE,yCAAyC,EAAE;AAChE;;AAEA;;8CAE8C;;AAE9C;EACE,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;;8CAE8C;;AAE9C;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,2BAA2B;EAC3B,SAAS;EACT,YAAY;EACZ,cAAc;EACd,+BAA+B;EAC/B,mDAAmD;AACrD;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;8CAE8C;;AAE9C;EACE,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,YAAY;EACZ,0BAA0B;EAC1B,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,+BAA+B;EAC/B,kBAAkB;EAClB,oBAAoB;EACpB,gCAAgC;AAClC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;;8CAE8C;;AAE9C;;EAEE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,mDAAmD;AACrD;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,sCAAsC;AACxC;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;EAEE,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA,yDAAyD;AACzD;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;8CAE8C;;AAE9C;EACE,kBAAkB;EAClB,mCAAmC;EACnC,aAAa;EACb,yBAAyB;AAC3B","sourcesContent":["/* ────────────────────────────────────────────\n   Modal overlay\n──────────────────────────────────────────── */\n\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  backdrop-filter: blur(4px);\n  z-index: 50;\n  animation: overlayIn 0.2s ease;\n}\n\n@keyframes overlayIn {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n/* ────────────────────────────────────────────\n   Modal card\n──────────────────────────────────────────── */\n\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 60;\n  background-color: var(--surface-overlay);\n  color: var(--text-primary);\n  width: min(340px, calc(100vw - 32px));\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n  box-shadow: var(--shadow-lg);\n  animation: modalIn 0.22s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n\n@keyframes modalIn {\n  from { opacity: 0; transform: translate(-50%, -50%) scale(0.95); }\n  to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }\n}\n\n/* ────────────────────────────────────────────\n   Modal top section\n──────────────────────────────────────────── */\n\n.modal__top {\n  width: 100%;\n  padding: 20px 16px 12px;\n}\n\n.modal__top > span {\n  display: block;\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  margin-bottom: 12px;\n  color: var(--text-primary);\n}\n\n/* ────────────────────────────────────────────\n   Label row (create new + existing labels)\n──────────────────────────────────────────── */\n\n.label {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 12px;\n  height: 48px;\n  padding: 0 4px;\n  border-radius: var(--radius-sm);\n  transition: background-color var(--transition-fast);\n}\n\n.label:hover {\n  background-color: var(--hover-overlay);\n}\n\n/* ────────────────────────────────────────────\n   Label input\n──────────────────────────────────────────── */\n\n.modal__inputContainer {\n  flex: 1;\n  position: relative;\n}\n\n.modal__input {\n  width: 100%;\n  outline: none;\n  background-color: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: inherit;\n  border: none;\n  color: var(--text-primary);\n  padding: 2px 0;\n}\n\n.modal__inputContainer::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -2px;\n  height: 2px;\n  background-color: var(--accent);\n  border-radius: 1px;\n  transform: scaleX(0);\n  transition: transform 0.15s ease;\n}\n\n.modal__inputContainer.focused::after {\n  transform: scaleX(1);\n}\n\n.modal__input::placeholder {\n  color: var(--text-muted);\n  font-weight: 400;\n}\n\n/* ────────────────────────────────────────────\n   Label icon buttons\n──────────────────────────────────────────── */\n\n.label > div:nth-child(1),\n.label > div:nth-child(3) {\n  flex: 0 0 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color var(--transition-fast);\n}\n\n.label > div:nth-child(1) svg,\n.label > div:nth-child(3) svg {\n  width: 20px;\n  height: 20px;\n}\n\n.label > div:nth-child(1):hover,\n.label > div:nth-child(3):hover {\n  background-color: var(--hover-overlay);\n}\n\n.label > div:nth-child(1):hover svg path,\n.label > div:nth-child(3):hover svg path {\n  fill: var(--text-primary);\n}\n\n.label > div:nth-child(1):focus-visible,\n.label > div:nth-child(3):focus-visible {\n  outline: 2px solid var(--border-focus);\n  border-radius: 50%;\n}\n\n/* The create-label row: hide \"done\" icon until editing */\n.label:nth-child(2) > div:nth-child(3) {\n  visibility: hidden;\n}\n\n.label.block:nth-child(2) > div:nth-child(3) {\n  visibility: visible;\n}\n\n/* ────────────────────────────────────────────\n   Modal bottom (Done button)\n──────────────────────────────────────────── */\n\n.modal__bottom {\n  padding: 12px 16px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: flex-end;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main/labels/labels.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main/labels/labels.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* labels section — layout is handled by shared .empty-state and .notes-grid classes */
`, "",{"version":3,"sources":["webpack://./src/main/labels/labels.css"],"names":[],"mappings":"AAAA,sFAAsF","sourcesContent":["/* labels section — layout is handled by shared .empty-state and .notes-grid classes */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main/main.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main/main.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_notes_notes_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./notes/notes.css */ "./node_modules/css-loader/dist/cjs.js!./src/main/notes/notes.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reminders_reminders_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reminders/reminders.css */ "./node_modules/css-loader/dist/cjs.js!./src/main/reminders/reminders.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_labels_labels_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./labels/labels.css */ "./node_modules/css-loader/dist/cjs.js!./src/main/labels/labels.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_edit_labels_edit_labels_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./edit-labels/edit_labels.css */ "./node_modules/css-loader/dist/cjs.js!./src/main/edit-labels/edit_labels.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_archive_archive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./archive/archive.css */ "./node_modules/css-loader/dist/cjs.js!./src/main/archive/archive.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_trash_trash_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./trash/trash.css */ "./node_modules/css-loader/dist/cjs.js!./src/main/trash/trash.css");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_notes_notes_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reminders_reminders_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_labels_labels_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_edit_labels_edit_labels_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_archive_archive_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_trash_trash_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ────────────────────────────────────────────
   Main content area
──────────────────────────────────────────── */

main {
  width: 100%;
  min-height: calc(100vh - 64px);
  padding-top: 64px;
  padding-left: 80px;
  transition: padding-left var(--transition-slow);
}

main.minimize {
  padding-left: 280px;
}

/* ────────────────────────────────────────────
   Empty state (for sections not yet built)
──────────────────────────────────────────── */

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  gap: 16px;
  opacity: 0;
  animation: fadeIn 0.4s ease forwards 0.1s;
}

.empty-state svg {
  width: 120px;
  height: 120px;
  opacity: 0.15;
}

.empty-state svg path {
  fill: var(--text-primary);
}

.empty-state p {
  font-size: 22px;
  font-weight: 400;
  color: var(--text-muted);
  margin: 0;
  text-align: center;
}

.empty-state small {
  font-size: 14px;
  color: var(--text-muted);
  opacity: 0.7;
  text-align: center;
  max-width: 280px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
`, "",{"version":3,"sources":["webpack://./src/main/main.css"],"names":[],"mappings":"AAOA;;8CAE8C;;AAE9C;EACE,WAAW;EACX,8BAA8B;EAC9B,iBAAiB;EACjB,kBAAkB;EAClB,+CAA+C;AACjD;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;8CAE8C;;AAE9C;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,yCAAyC;AAC3C;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,OAAO,UAAU,EAAE,0BAA0B,EAAE;EAC/C,OAAO,UAAU,EAAE,wBAAwB,EAAE;AAC/C","sourcesContent":["@import \"./notes/notes.css\";\n@import \"./reminders/reminders.css\";\n@import \"./labels/labels.css\";\n@import \"./edit-labels/edit_labels.css\";\n@import \"./archive/archive.css\";\n@import \"./trash/trash.css\";\n\n/* ────────────────────────────────────────────\n   Main content area\n──────────────────────────────────────────── */\n\nmain {\n  width: 100%;\n  min-height: calc(100vh - 64px);\n  padding-top: 64px;\n  padding-left: 80px;\n  transition: padding-left var(--transition-slow);\n}\n\nmain.minimize {\n  padding-left: 280px;\n}\n\n/* ────────────────────────────────────────────\n   Empty state (for sections not yet built)\n──────────────────────────────────────────── */\n\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 40vh;\n  gap: 16px;\n  opacity: 0;\n  animation: fadeIn 0.4s ease forwards 0.1s;\n}\n\n.empty-state svg {\n  width: 120px;\n  height: 120px;\n  opacity: 0.15;\n}\n\n.empty-state svg path {\n  fill: var(--text-primary);\n}\n\n.empty-state p {\n  font-size: 22px;\n  font-weight: 400;\n  color: var(--text-muted);\n  margin: 0;\n  text-align: center;\n}\n\n.empty-state small {\n  font-size: 14px;\n  color: var(--text-muted);\n  opacity: 0.7;\n  text-align: center;\n  max-width: 280px;\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(8px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main/notes/notes.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main/notes/notes.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ────────────────────────────────────────────
   Notes wrapper
──────────────────────────────────────────── */

main > div:first-child {
  width: 100%;
  padding: 24px 16px 16px;
}

/* ────────────────────────────────────────────
   "Take a note" collapsed bar
──────────────────────────────────────────── */

.take-note,
.take-note--active {
  color: var(--text-secondary);
  width: min(600px, calc(100% - 32px));
  margin: 0 auto;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background-color: var(--surface);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-med), border-color var(--transition-med);
}

.take-note {
  display: flex;
  align-items: center;
  padding: 0 4px 0 0;
  cursor: text;
}

.take-note:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--border);
}

.take-note > div:first-child {
  flex: 1;
}

.take-note > div:first-child > input {
  height: 48px;
  width: 100%;
  padding: 12px 16px;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 15px;
  font-family: inherit;
  color: var(--text-secondary);
  cursor: text;
}

.take-note input::placeholder {
  color: var(--text-muted);
}

.take-note > div:not(:first-child) {
  flex: 0 0 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.take-note > div:not(:first-child):hover {
  background-color: var(--hover-overlay);
}

.take-note > div:not(:first-child):hover svg path {
  fill: var(--text-primary);
}

/* ────────────────────────────────────────────
   Expanded note card
──────────────────────────────────────────── */

.take-note--active {
  flex-direction: column;
  animation: noteExpand 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-lg);
  border-color: var(--border);
}

@keyframes noteExpand {
  from { transform: scaleY(0.95); opacity: 0.7; }
  to   { transform: scaleY(1); opacity: 1; }
}

/* Top row: title + pin */
.take-note--active .top,
.take-note--active .middle,
.take-note--active .bottom {
  display: flex;
  width: 100%;
}

main .top {
  min-height: 52px;
  position: relative;
  align-items: flex-start;
}

main .top > div:first-child {
  flex: 1;
  position: relative;
  min-height: 52px;
}

main .top > div:first-child > div {
  width: 100%;
  height: 100%;
  min-height: 52px;
  outline: none;
  border: none;
  padding: 14px 16px 6px;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  color: var(--text-primary);
}

main .top > div:nth-child(2) {
  flex: 0 0 48px;
}

main .top > div:nth-child(2) > div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  margin: 8px auto 0;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

main .top > div:nth-child(2) > div:hover {
  background-color: var(--hover-overlay);
}

main .top > div:nth-child(2) > div svg path {
  fill: var(--text-secondary);
  transition: fill var(--transition-fast);
}

main .top > div:nth-child(2) > div:hover svg path {
  fill: var(--text-primary);
}

/* Middle row: body text */
.take-note--active .middle {
  min-height: 60px;
  position: relative;
}

.take-note--active .middle > div {
  min-width: 100%;
  min-height: 60px;
  position: relative;
}

.take-note--active .middle > div > div {
  font-size: 14px;
  outline: none;
  border: none;
  padding: 8px 16px 12px;
  color: var(--text-primary);
  line-height: 1.6;
}

/* ────────────────────────────────────────────
   Placeholder overlay
──────────────────────────────────────────── */

.placeholder {
  position: absolute;
  inset: 0;
  pointer-events: none;
  letter-spacing: 0.01785714em;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: var(--text-muted);
  padding: 14px 16px 6px;
}

/* Title placeholder offset */
main .top .placeholder {
  padding: 14px 16px 6px;
}

/* Body placeholder offset */
.take-note--active .middle .placeholder {
  padding: 8px 16px 12px;
  font-weight: 400;
}

.mainInput {
  position: relative;
  z-index: 1;
  color: var(--text-primary);
  font-size: 14px;
  outline: none;
  min-height: 24px;
}

main .top .mainInput {
  font-size: 16px;
  font-weight: 600;
}

/* ────────────────────────────────────────────
   Bottom toolbar
──────────────────────────────────────────── */

main .bottom {
  min-height: 44px;
  border-top: 1px solid var(--border);
}

main .bottom > div {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 4px 8px;
}

main .bottom > div > div:first-child {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2px;
}

main .bottom > div > div:first-child > div {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  flex-shrink: 0;
}

main .bottom > div > div:first-child > div:hover {
  background-color: var(--hover-overlay);
}

main .bottom > div > div:first-child > div:hover svg path {
  fill: var(--text-primary);
}

main .bottom > div > div:not(:first-child) {
  flex: 0 0 auto;
}

main .bottom svg {
  width: 18px;
  height: 18px;
}

/* ────────────────────────────────────────────
   Saved notes grid
──────────────────────────────────────────── */

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  padding: 16px;
  animation: fadeIn 0.3s ease;
}

.note-card {
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 16px;
  cursor: pointer;
  position: relative;
  transition: box-shadow var(--transition-med), border-color var(--transition-med), transform var(--transition-fast);
  animation: noteIn 0.25s ease;
}

@keyframes noteIn {
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.note-card:hover {
  box-shadow: var(--shadow-md);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.note-card__title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
  word-break: break-word;
}

.note-card__body {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
  word-break: break-word;
  white-space: pre-wrap;
  max-height: 200px;
  overflow: hidden;
}

.note-card__actions {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 12px;
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.note-card:hover .note-card__actions {
  opacity: 1;
}

.note-card__action-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.note-card__action-btn:hover {
  background-color: var(--hover-overlay);
}

.note-card__action-btn svg {
  width: 18px;
  height: 18px;
}

.note-card__action-btn svg path {
  fill: var(--text-secondary);
}

.note-card__action-btn:hover svg path {
  fill: var(--text-primary);
}

.note-card.pinned {
  border-color: rgba(251, 188, 4, 0.3);
}

.pinned-badge {
  position: absolute;
  top: 10px;
  right: 10px;
}

.pinned-badge svg {
  width: 16px;
  height: 16px;
}

.pinned-badge svg path {
  fill: var(--accent);
}

/* Section label above grids */
.notes-section-label {
  padding: 4px 16px 2px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* ────────────────────────────────────────────
   Responsive
──────────────────────────────────────────── */

@media (max-width: 680px) {
  .take-note,
  .take-note--active {
    width: calc(100% - 16px);
  }

  .notes-grid {
    grid-template-columns: 1fr;
    padding: 8px;
  }
}

@media (max-width: 530px) {
  main .bottom > div {
    flex-wrap: wrap;
    height: auto;
    padding: 6px 8px;
    gap: 4px;
  }

  main .bottom > div > div:not(:first-child) {
    margin-left: auto;
  }
}
`, "",{"version":3,"sources":["webpack://./src/main/notes/notes.css"],"names":[],"mappings":"AAAA;;8CAE8C;;AAE9C;EACE,WAAW;EACX,uBAAuB;AACzB;;AAEA;;8CAE8C;;AAE9C;;EAEE,4BAA4B;EAC5B,oCAAoC;EACpC,cAAc;EACd,+BAA+B;EAC/B,+BAA+B;EAC/B,gCAAgC;EAChC,4BAA4B;EAC5B,gFAAgF;AAClF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,6BAA6B;EAC7B,aAAa;EACb,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,4BAA4B;EAC5B,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,mDAAmD;AACrD;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;8CAE8C;;AAE9C;EACE,sBAAsB;EACtB,uDAAuD;EACvD,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,OAAO,uBAAuB,EAAE,YAAY,EAAE;EAC9C,OAAO,oBAAoB,EAAE,UAAU,EAAE;AAC3C;;AAEA,yBAAyB;AACzB;;;EAGE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,OAAO;EACP,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,0BAA0B;AAC5B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,mDAAmD;AACrD;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,0BAA0B;AAC1B;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;;8CAE8C;;AAE9C;EACE,kBAAkB;EAClB,QAAQ;EACR,oBAAoB;EACpB,4BAA4B;EAC5B,qDAAqD;EACrD,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;EACpB,wBAAwB;EACxB,sBAAsB;AACxB;;AAEA,6BAA6B;AAC7B;EACE,sBAAsB;AACxB;;AAEA,4BAA4B;AAC5B;EACE,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,0BAA0B;EAC1B,eAAe;EACf,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;;8CAE8C;;AAE9C;EACE,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,mDAAmD;EACnD,cAAc;AAChB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;;8CAE8C;;AAE9C;EACE,aAAa;EACb,4DAA4D;EAC5D,SAAS;EACT,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,gCAAgC;EAChC,+BAA+B;EAC/B,+BAA+B;EAC/B,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,kHAAkH;EAClH,4BAA4B;AAC9B;;AAEA;EACE,OAAO,UAAU,EAAE,uCAAuC,EAAE;EAC5D,OAAO,UAAU,EAAE,iCAAiC,EAAE;AACxD;;AAEA;EACE,4BAA4B;EAC5B,sCAAsC;EACtC,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,0BAA0B;EAC1B,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,4BAA4B;EAC5B,gBAAgB;EAChB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,gBAAgB;EAChB,UAAU;EACV,0CAA0C;AAC5C;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,mDAAmD;AACrD;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA,8BAA8B;AAC9B;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,qBAAqB;EACrB,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;;8CAE8C;;AAE9C;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;IACE,0BAA0B;IAC1B,YAAY;EACd;AACF;;AAEA;EACE;IACE,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,QAAQ;EACV;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["/* ────────────────────────────────────────────\n   Notes wrapper\n──────────────────────────────────────────── */\n\nmain > div:first-child {\n  width: 100%;\n  padding: 24px 16px 16px;\n}\n\n/* ────────────────────────────────────────────\n   \"Take a note\" collapsed bar\n──────────────────────────────────────────── */\n\n.take-note,\n.take-note--active {\n  color: var(--text-secondary);\n  width: min(600px, calc(100% - 32px));\n  margin: 0 auto;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  background-color: var(--surface);\n  box-shadow: var(--shadow-sm);\n  transition: box-shadow var(--transition-med), border-color var(--transition-med);\n}\n\n.take-note {\n  display: flex;\n  align-items: center;\n  padding: 0 4px 0 0;\n  cursor: text;\n}\n\n.take-note:hover {\n  box-shadow: var(--shadow-md);\n  border-color: var(--border);\n}\n\n.take-note > div:first-child {\n  flex: 1;\n}\n\n.take-note > div:first-child > input {\n  height: 48px;\n  width: 100%;\n  padding: 12px 16px;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  font-size: 15px;\n  font-family: inherit;\n  color: var(--text-secondary);\n  cursor: text;\n}\n\n.take-note input::placeholder {\n  color: var(--text-muted);\n}\n\n.take-note > div:not(:first-child) {\n  flex: 0 0 46px;\n  height: 46px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color var(--transition-fast);\n}\n\n.take-note > div:not(:first-child):hover {\n  background-color: var(--hover-overlay);\n}\n\n.take-note > div:not(:first-child):hover svg path {\n  fill: var(--text-primary);\n}\n\n/* ────────────────────────────────────────────\n   Expanded note card\n──────────────────────────────────────────── */\n\n.take-note--active {\n  flex-direction: column;\n  animation: noteExpand 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: var(--shadow-lg);\n  border-color: var(--border);\n}\n\n@keyframes noteExpand {\n  from { transform: scaleY(0.95); opacity: 0.7; }\n  to   { transform: scaleY(1); opacity: 1; }\n}\n\n/* Top row: title + pin */\n.take-note--active .top,\n.take-note--active .middle,\n.take-note--active .bottom {\n  display: flex;\n  width: 100%;\n}\n\nmain .top {\n  min-height: 52px;\n  position: relative;\n  align-items: flex-start;\n}\n\nmain .top > div:first-child {\n  flex: 1;\n  position: relative;\n  min-height: 52px;\n}\n\nmain .top > div:first-child > div {\n  width: 100%;\n  height: 100%;\n  min-height: 52px;\n  outline: none;\n  border: none;\n  padding: 14px 16px 6px;\n  font-size: 16px;\n  font-weight: 600;\n  font-family: inherit;\n  color: var(--text-primary);\n}\n\nmain .top > div:nth-child(2) {\n  flex: 0 0 48px;\n}\n\nmain .top > div:nth-child(2) > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  margin: 8px auto 0;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color var(--transition-fast);\n}\n\nmain .top > div:nth-child(2) > div:hover {\n  background-color: var(--hover-overlay);\n}\n\nmain .top > div:nth-child(2) > div svg path {\n  fill: var(--text-secondary);\n  transition: fill var(--transition-fast);\n}\n\nmain .top > div:nth-child(2) > div:hover svg path {\n  fill: var(--text-primary);\n}\n\n/* Middle row: body text */\n.take-note--active .middle {\n  min-height: 60px;\n  position: relative;\n}\n\n.take-note--active .middle > div {\n  min-width: 100%;\n  min-height: 60px;\n  position: relative;\n}\n\n.take-note--active .middle > div > div {\n  font-size: 14px;\n  outline: none;\n  border: none;\n  padding: 8px 16px 12px;\n  color: var(--text-primary);\n  line-height: 1.6;\n}\n\n/* ────────────────────────────────────────────\n   Placeholder overlay\n──────────────────────────────────────────── */\n\n.placeholder {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  letter-spacing: 0.01785714em;\n  font-family: \"Google Sans\", Roboto, Arial, sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.25rem;\n  color: var(--text-muted);\n  padding: 14px 16px 6px;\n}\n\n/* Title placeholder offset */\nmain .top .placeholder {\n  padding: 14px 16px 6px;\n}\n\n/* Body placeholder offset */\n.take-note--active .middle .placeholder {\n  padding: 8px 16px 12px;\n  font-weight: 400;\n}\n\n.mainInput {\n  position: relative;\n  z-index: 1;\n  color: var(--text-primary);\n  font-size: 14px;\n  outline: none;\n  min-height: 24px;\n}\n\nmain .top .mainInput {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n/* ────────────────────────────────────────────\n   Bottom toolbar\n──────────────────────────────────────────── */\n\nmain .bottom {\n  min-height: 44px;\n  border-top: 1px solid var(--border);\n}\n\nmain .bottom > div {\n  width: 100%;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  padding: 4px 8px;\n}\n\nmain .bottom > div > div:first-child {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\nmain .bottom > div > div:first-child > div {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color var(--transition-fast);\n  flex-shrink: 0;\n}\n\nmain .bottom > div > div:first-child > div:hover {\n  background-color: var(--hover-overlay);\n}\n\nmain .bottom > div > div:first-child > div:hover svg path {\n  fill: var(--text-primary);\n}\n\nmain .bottom > div > div:not(:first-child) {\n  flex: 0 0 auto;\n}\n\nmain .bottom svg {\n  width: 18px;\n  height: 18px;\n}\n\n/* ────────────────────────────────────────────\n   Saved notes grid\n──────────────────────────────────────────── */\n\n.notes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n  padding: 16px;\n  animation: fadeIn 0.3s ease;\n}\n\n.note-card {\n  background-color: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  cursor: pointer;\n  position: relative;\n  transition: box-shadow var(--transition-med), border-color var(--transition-med), transform var(--transition-fast);\n  animation: noteIn 0.25s ease;\n}\n\n@keyframes noteIn {\n  from { opacity: 0; transform: translateY(10px) scale(0.98); }\n  to   { opacity: 1; transform: translateY(0) scale(1); }\n}\n\n.note-card:hover {\n  box-shadow: var(--shadow-md);\n  border-color: rgba(255, 255, 255, 0.2);\n  transform: translateY(-2px);\n}\n\n.note-card__title {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n  word-break: break-word;\n}\n\n.note-card__body {\n  font-size: 14px;\n  color: var(--text-secondary);\n  line-height: 1.5;\n  word-break: break-word;\n  white-space: pre-wrap;\n  max-height: 200px;\n  overflow: hidden;\n}\n\n.note-card__actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 12px;\n  opacity: 0;\n  transition: opacity var(--transition-fast);\n}\n\n.note-card:hover .note-card__actions {\n  opacity: 1;\n}\n\n.note-card__action-btn {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: transparent;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color var(--transition-fast);\n}\n\n.note-card__action-btn:hover {\n  background-color: var(--hover-overlay);\n}\n\n.note-card__action-btn svg {\n  width: 18px;\n  height: 18px;\n}\n\n.note-card__action-btn svg path {\n  fill: var(--text-secondary);\n}\n\n.note-card__action-btn:hover svg path {\n  fill: var(--text-primary);\n}\n\n.note-card.pinned {\n  border-color: rgba(251, 188, 4, 0.3);\n}\n\n.pinned-badge {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.pinned-badge svg {\n  width: 16px;\n  height: 16px;\n}\n\n.pinned-badge svg path {\n  fill: var(--accent);\n}\n\n/* Section label above grids */\n.notes-section-label {\n  padding: 4px 16px 2px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n\n/* ────────────────────────────────────────────\n   Responsive\n──────────────────────────────────────────── */\n\n@media (max-width: 680px) {\n  .take-note,\n  .take-note--active {\n    width: calc(100% - 16px);\n  }\n\n  .notes-grid {\n    grid-template-columns: 1fr;\n    padding: 8px;\n  }\n}\n\n@media (max-width: 530px) {\n  main .bottom > div {\n    flex-wrap: wrap;\n    height: auto;\n    padding: 6px 8px;\n    gap: 4px;\n  }\n\n  main .bottom > div > div:not(:first-child) {\n    margin-left: auto;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main/reminders/reminders.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main/reminders/reminders.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* reminders section — layout is handled by shared .empty-state class */
`, "",{"version":3,"sources":["webpack://./src/main/reminders/reminders.css"],"names":[],"mappings":"AAAA,uEAAuE","sourcesContent":["/* reminders section — layout is handled by shared .empty-state class */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main/trash/trash.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main/trash/trash.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* trash section — layout is handled by shared .notes-grid and .note-card classes */
`, "",{"version":3,"sources":["webpack://./src/main/trash/trash.css"],"names":[],"mappings":"AAAA,mFAAmF","sourcesContent":["/* trash section — layout is handled by shared .notes-grid and .note-card classes */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/side/side.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/side/side.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ────────────────────────────────────────────
   Sidebar shell
──────────────────────────────────────────── */

.side {
  position: fixed;
  top: 64px;
  left: 0;
  padding-top: 8px;
  padding-bottom: 16px;
  width: 80px;
  background-color: var(--body-bg);
  z-index: 10;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 64px);
  font-family: "Google Sans", "Roboto", Arial, sans-serif;
  transition: width var(--transition-slow);
  will-change: width;
}

/* ────────────────────────────────────────────
   Feature rows
──────────────────────────────────────────── */

.side__feature {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 48px;
  border-radius: 0 24px 24px 0;
  margin-right: 16px;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  position: relative;
  overflow: hidden;
}

.side__feature:hover {
  background-color: var(--hover-overlay);
}

.side__feature:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: -2px;
  border-radius: 0 24px 24px 0;
}

/* ────────────────────────────────────────────
   Active state
──────────────────────────────────────────── */

.side__feature.active .side__feature--Icon {
  background-color: var(--active-feature);
}

.side__feature.active svg path {
  fill: var(--accent);
}

.side.open .side__feature.active {
  background-color: var(--active-feature);
}

.side.open .side__feature.active .side__feature--Icon,
.side.open .side__feature.active:hover {
  background-color: transparent;
}

.side.open .side__feature:not(.active):hover {
  background-color: var(--hover-overlay);
}

/* ────────────────────────────────────────────
   Icon column
──────────────────────────────────────────── */

.side__feature > div:first-child {
  flex: 0 0 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
}

.side__feature--Icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
  transition: background-color var(--transition-fast);
}

.side__feature--Icon:hover {
  background-color: var(--hover-overlay);
}

/* ────────────────────────────────────────────
   Label column (collapsed → 0 width)
──────────────────────────────────────────── */

.side__feature > div:nth-child(2) {
  flex: 0;
  overflow: hidden;
  width: 0;
  transition: width var(--transition-slow), flex var(--transition-slow);
}

.side__feature--txt {
  color: transparent;
  letter-spacing: 0.01785714em;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: nowrap;
  transition: color var(--transition-slow);
}

/* ────────────────────────────────────────────
   Open state
──────────────────────────────────────────── */

.side.open {
  width: 280px;
}

.side.open .side__feature > div:nth-child(2) {
  flex: 1;
  width: auto;
}

.side.open .side__feature--txt {
  color: var(--text-primary);
}

/* When sidebar is open, the individual icon pill background is suppressed
   (the whole row turns amber instead) */
.side.open .side__feature--Icon:hover {
  background-color: transparent;
}

/* ────────────────────────────────────────────
   Tooltip suppression when sidebar is open
──────────────────────────────────────────── */

.side [data-tool-tip]::before {
  z-index: 1;
  left: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(6px);
}

.side.open [data-tool-tip]::before {
  visibility: hidden !important;
  opacity: 0 !important;
}

/* ────────────────────────────────────────────
   Section divider label (e.g. "Labels")
──────────────────────────────────────────── */

.side__section-header {
  padding: 12px 16px 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  height: 0;
  transition: opacity var(--transition-slow), height var(--transition-slow);
}

.side.open .side__section-header {
  opacity: 1;
  height: auto;
}

/* ────────────────────────────────────────────
   Scrollbar
──────────────────────────────────────────── */

.side::-webkit-scrollbar {
  width: 4px;
}

.side::-webkit-scrollbar-thumb {
  background: var(--grey);
  border-radius: var(--radius-pill);
}
`, "",{"version":3,"sources":["webpack://./src/side/side.css"],"names":[],"mappings":"AAAA;;8CAE8C;;AAE9C;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,gBAAgB;EAChB,oBAAoB;EACpB,WAAW;EACX,gCAAgC;EAChC,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;EAC1B,uDAAuD;EACvD,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;;8CAE8C;;AAE9C;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,4BAA4B;EAC5B,kBAAkB;EAClB,eAAe;EACf,mDAAmD;EACnD,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;EACtC,oBAAoB;EACpB,4BAA4B;AAC9B;;AAEA;;8CAE8C;;AAE9C;EACE,uCAAuC;AACzC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;;EAEE,6BAA6B;AAC/B;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;8CAE8C;;AAE9C;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;EACd,mDAAmD;AACrD;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;8CAE8C;;AAE9C;EACE,OAAO;EACP,gBAAgB;EAChB,QAAQ;EACR,qEAAqE;AACvE;;AAEA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,qDAAqD;EACrD,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;;8CAE8C;;AAE9C;EACE,YAAY;AACd;;AAEA;EACE,OAAO;EACP,WAAW;AACb;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;wCACwC;AACxC;EACE,6BAA6B;AAC/B;;AAEA;;8CAE8C;;AAE9C;EACE,UAAU;EACV,UAAU;EACV,QAAQ;EACR,2CAA2C;AAC7C;;AAEA;EACE,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;;8CAE8C;;AAE9C;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,yBAAyB;EACzB,wBAAwB;EACxB,mBAAmB;EACnB,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,yEAAyE;AAC3E;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;;8CAE8C;;AAE9C;EACE,UAAU;AACZ;;AAEA;EACE,uBAAuB;EACvB,iCAAiC;AACnC","sourcesContent":["/* ────────────────────────────────────────────\n   Sidebar shell\n──────────────────────────────────────────── */\n\n.side {\n  position: fixed;\n  top: 64px;\n  left: 0;\n  padding-top: 8px;\n  padding-bottom: 16px;\n  width: 80px;\n  background-color: var(--body-bg);\n  z-index: 10;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: calc(100vh - 64px);\n  font-family: \"Google Sans\", \"Roboto\", Arial, sans-serif;\n  transition: width var(--transition-slow);\n  will-change: width;\n}\n\n/* ────────────────────────────────────────────\n   Feature rows\n──────────────────────────────────────────── */\n\n.side__feature {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  height: 48px;\n  border-radius: 0 24px 24px 0;\n  margin-right: 16px;\n  cursor: pointer;\n  transition: background-color var(--transition-fast);\n  position: relative;\n  overflow: hidden;\n}\n\n.side__feature:hover {\n  background-color: var(--hover-overlay);\n}\n\n.side__feature:focus-visible {\n  outline: 2px solid var(--border-focus);\n  outline-offset: -2px;\n  border-radius: 0 24px 24px 0;\n}\n\n/* ────────────────────────────────────────────\n   Active state\n──────────────────────────────────────────── */\n\n.side__feature.active .side__feature--Icon {\n  background-color: var(--active-feature);\n}\n\n.side__feature.active svg path {\n  fill: var(--accent);\n}\n\n.side.open .side__feature.active {\n  background-color: var(--active-feature);\n}\n\n.side.open .side__feature.active .side__feature--Icon,\n.side.open .side__feature.active:hover {\n  background-color: transparent;\n}\n\n.side.open .side__feature:not(.active):hover {\n  background-color: var(--hover-overlay);\n}\n\n/* ────────────────────────────────────────────\n   Icon column\n──────────────────────────────────────────── */\n\n.side__feature > div:first-child {\n  flex: 0 0 80px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-left: 16px;\n}\n\n.side__feature--Icon {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  flex-shrink: 0;\n  transition: background-color var(--transition-fast);\n}\n\n.side__feature--Icon:hover {\n  background-color: var(--hover-overlay);\n}\n\n/* ────────────────────────────────────────────\n   Label column (collapsed → 0 width)\n──────────────────────────────────────────── */\n\n.side__feature > div:nth-child(2) {\n  flex: 0;\n  overflow: hidden;\n  width: 0;\n  transition: width var(--transition-slow), flex var(--transition-slow);\n}\n\n.side__feature--txt {\n  color: transparent;\n  letter-spacing: 0.01785714em;\n  font-family: \"Google Sans\", Roboto, Arial, sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.25rem;\n  white-space: nowrap;\n  transition: color var(--transition-slow);\n}\n\n/* ────────────────────────────────────────────\n   Open state\n──────────────────────────────────────────── */\n\n.side.open {\n  width: 280px;\n}\n\n.side.open .side__feature > div:nth-child(2) {\n  flex: 1;\n  width: auto;\n}\n\n.side.open .side__feature--txt {\n  color: var(--text-primary);\n}\n\n/* When sidebar is open, the individual icon pill background is suppressed\n   (the whole row turns amber instead) */\n.side.open .side__feature--Icon:hover {\n  background-color: transparent;\n}\n\n/* ────────────────────────────────────────────\n   Tooltip suppression when sidebar is open\n──────────────────────────────────────────── */\n\n.side [data-tool-tip]::before {\n  z-index: 1;\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%) translateX(6px);\n}\n\n.side.open [data-tool-tip]::before {\n  visibility: hidden !important;\n  opacity: 0 !important;\n}\n\n/* ────────────────────────────────────────────\n   Section divider label (e.g. \"Labels\")\n──────────────────────────────────────────── */\n\n.side__section-header {\n  padding: 12px 16px 4px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  opacity: 0;\n  height: 0;\n  transition: opacity var(--transition-slow), height var(--transition-slow);\n}\n\n.side.open .side__section-header {\n  opacity: 1;\n  height: auto;\n}\n\n/* ────────────────────────────────────────────\n   Scrollbar\n──────────────────────────────────────────── */\n\n.side::-webkit-scrollbar {\n  width: 4px;\n}\n\n.side::-webkit-scrollbar-thumb {\n  background: var(--grey);\n  border-radius: var(--radius-pill);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/keep_2020q4_48dp.png":
/*!************************************************!*\
  !*** ./src/assets/images/keep_2020q4_48dp.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/keep_2020q4_48dp.png";

/***/ }),

/***/ "./src/assets/pxiDypQkot1TnFhsFMOfGShVF9eO.woff2":
/*!*******************************************************!*\
  !*** ./src/assets/pxiDypQkot1TnFhsFMOfGShVF9eO.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/pxiDypQkot1TnFhsFMOfGShVF9eO.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map