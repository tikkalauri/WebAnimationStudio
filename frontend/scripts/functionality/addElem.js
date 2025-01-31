import { selectElem, unselectElem, isSelected } from "./selectElem";
import { moveElem } from "./moveElem";
import { properties } from "../GUIinteractions/rightPanel";

let elemSelected = false

function unselectAll() {
    console.log("unselect all")
    const elements = viewport.querySelectorAll(".selected");
    elements.forEach(element => {
        unselectElem(element);
    });
}

// Add an element to the viewport + add all necessary event listeners.
export function addElem(elem) {
    const viewport = document.getElementById("viewport");
    const element = document.createElement(elem);
    element.classList.add(elem);
    viewport.appendChild(element);
    properties(element);

    unselectAll();

    element.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        if (!isSelected(element)) {
            unselectAll();
            selectElem(element);
            properties(element);
            elemSelected = true
        }
    });


    element.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    viewport.addEventListener("click", () => {
        if (elemSelected) {
            unselectAll();
        }

        elemSelected = false

        const rightPanel = document.getElementById("right-panel");
        rightPanel.innerHTML = "";
    });

    moveElem(element);

    return element;
}

document.addEventListener('keydown', (event) => {
    if (event.key == "Delete" && elemSelected) {
        document.querySelector(".selected").remove();
    }
});
