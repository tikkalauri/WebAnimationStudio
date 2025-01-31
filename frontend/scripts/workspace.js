const mainContainer = document.getElementById("main-container");

const workspace = `
    <div class="layout-container">
        <div class="bar" style="border-bottom: var(--border); border-top: none;"></div>
        <div class="middle-container" id="middle-container">
            <div class="sidebar">
                <div class="sb-btn-container">
                    <button class="sb-btn" id="sb-add-btn">
                           <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                    </button>
                </div>
            </div>      
            <div class="viewport-container" id="viewport-container">
                <div class="viewport" id="viewport"></div>
            </div>
            <div class="right-panel" id="right-panel"></div>
        </div>
        <div class="bar"></div>
    </div>
`;

mainContainer.innerHTML = workspace;

document.addEventListener('keydown', (event) => {
    if (event.key == "delete") {
    }
});

