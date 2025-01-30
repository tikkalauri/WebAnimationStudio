const propertiesContent = `
    <div class="panel-container">
        <div style="padding: 0rem 0.5rem; margin-bottom: 0.5rem;">
            <h1 class="font-primary font-primary--caption">Properties</h1>
        </div>
        <div class="flex-container flex-container--column" style="padding: 0px 8px;">
            <label class="font-primary font-primary--label">Width</label>
            <input type="text" data-property="width" autocomplete="off" id="width-input" class="properties-input properties-input--dark font-primary--body" style="margin-bottom: 0.5rem;">

            <label class="font-primary font-primary--label">Height</label>
            <input type="text" data-property="height" autocomplete="off" id="height-input" class="properties-input properties-input--dark font-primary--body" style="margin-bottom: 0.5rem;">

            <label class="font-primary font-primary--label">Background Color</label>
            <input type="text" data-property="backgroundColor" autocomplete="off" id="bg-input" class="properties-input properties-input--dark font-primary--body" style="margin-bottom: 0.5rem;">

            <label class="font-primary font-primary--label">Border Width</label>
            <input type="text" data-property="borderWidth" autocomplete="off" id="bw-input" class="properties-input properties-input--dark font-primary--body" style="margin-bottom: 0.5rem;">

            <label class="font-primary font-primary--label">Border Color</label>
            <input type="text" data-property="borderColor" autocomplete="off" id="bc-input" class="properties-input properties-input--dark font-primary--body" style="margin-bottom: 0.5rem;">

            <label class="font-primary font-primary--label">Border Radius</label>
            <input type="text" data-property="borderRadius" autocomplete="off" id="br-input" class="properties-input properties-input--dark font-primary--body" style="margin-bottom: 0.5rem;">
        </div>
        <div class="centered" style="margin-top: 0.5rem;">
            <button id="set" class="btn-primary">Set</button>
        </div>
    </div> 
`;

export function properties(elem) {
    const rightPanel = document.getElementById("right-panel");
    rightPanel.innerHTML = propertiesContent;

    const inputs = document.querySelectorAll("input[type='text']");

    const set = document.getElementById("set");

    showProperties(elem, inputs);

    set.addEventListener("click", () => {
        inputs.forEach(input => {
            const property = input.dataset.property;
            const value = input.value;
            
            if (property && value) {
                if (property && value) {
                    if (property.includes("height")) {
                        const viewportRect = document.getElementById("viewport").getBoundingClientRect();
                        const floatValue = parseFloat(value);
                
                        if (isNaN(floatValue)) {
                            console.log("Invalid value.");
                            return;
                        }

                        if (value.toLowerCase().includes("vh")) {
                            console.log("Set the height relative to container, not the vh.");
                            return;
                        }
                
                        if (floatValue > viewportRect.height) {
                            console.log("The element can't be taller than the viewport height.");
                            return;
                        }
                    } else if (property.includes("width")) {
                        const viewportRect = document.getElementById("viewport").getBoundingClientRect();
                        const floatValue = parseFloat(value);
                
                        if (isNaN(floatValue)) {
                            console.log("Invalid value.");
                            return;
                        }

                        if (value.toLowerCase().includes("vw")) {
                            console.log("Set the width relative to container, not the vw.");
                            return;
                        }
                
                        if (floatValue > viewportRect.width) {
                            console.log("The element can't be wider than the viewport width.");
                            return;
                        }
                    } else if (property.includes("borderWidth")) {
                        const floatValue = parseFloat(value);

                        if (isNaN(floatValue)) {
                            console.log("Invalid value.");
                            return;
                        }

                        if (floatValue > 0) {
                            elem.style.border = "solid";
                        } 
                    } else if (property.includes("borderRadius")) {
                        const floatValue = parseFloat(value);

                        if (isNaN(floatValue)) {
                            console.log("Invalid value.");
                            return;
                        }
                    }
                }

                elem.style[property] = value;
            }
        });
    }); 
}

function showProperties(elem, inputs) {
    inputs.forEach(input => {
        const property = input.dataset.property;
        const elemComputedStyle = window.getComputedStyle(elem);
        input.value = elemComputedStyle[property]
    });
}


