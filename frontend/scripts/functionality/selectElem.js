export function selectElem(elem) {
    elem.classList.add("selected");
    const rect = elem.getBoundingClientRect();
    const outline = document.createElement("div");
    outline.classList.add("outline-selected");

    elem.appendChild(outline)

    outline.style.width = rect.right - rect.left + 4 + "px";
    outline.style.height = rect.bottom - rect.top + 4 + "px";
    outline.style.top = "-3px";
    outline.style.left = "-3px";
}

export function unselectElem(elem) {
    elem.classList.remove("selected");
    elem.removeChild
}

export function isSelected(elem) {
    return elem.classList.contains("selected");
}
