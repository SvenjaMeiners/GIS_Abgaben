"use strict";
var Typescript;
(function (Typescript) {
    const resetButton = document.getElementById("reset");
    const entereventButton = document.getElementById("enterevent");
    resetButton.addEventListener("click", resetButtonHandler);
    entereventButton.addEventListener("click", entereventButtonHandler);
    function resetButtonHandler() {
        console.log("Reset Button wurde gedrückt");
    }
    function entereventButtonHandler() {
    }
})(Typescript || (Typescript = {}));
//# sourceMappingURL=Typescript.js.map