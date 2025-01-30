import { selectElem, unselectElem } from "./selectElem";
import { moveElem } from "./moveElem";
import { properties } from "../GUIinteractions/rightPanel";

let isSelected;

// Add an element to the viewport + add all necessary event listeners.
export function addElem(elem) {
    const viewport = document.getElementById("viewport");
    const element = document.createElement(elem);
    element.classList.add(elem);
    viewport.appendChild(element);
    properties(element);

    element.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!isSelected) {
            selectElem(element);
            properties(element);
            isSelected = true;
        }
    });

    viewport.addEventListener("click", () => {
        const elements = viewport.querySelectorAll(".selected");

        elements.forEach(element => {
            unselectElem(element);
        });

        const rightPanel = document.getElementById("right-panel");
        rightPanel.innerHTML = "";

        isSelected = false;
    });

    moveElem(element);
    
    return element;
}