export function selectElem(elem) {
    elem.classList.add("selected");
}

export function unselectElem(elem) {
    elem.classList.remove("selected");
}

export function isSelected(elem) {
    return elem.classList.contains("selected");
}
