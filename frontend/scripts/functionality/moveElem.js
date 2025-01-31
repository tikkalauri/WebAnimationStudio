import { isSelected } from "./selectElem";

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

export function moveElem(elem) {
    elem.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - elem.offsetLeft;
        offsetY = e.clientY - elem.offsetTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging || !isSelected(elem)) return;
        elem.style.left = `${e.clientX - offsetX}px`;
        elem.style.top = `${e.clientY - offsetY}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}
