namespace Typescript {

    const resetButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reset");
    const entereventButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enterevent");
   

resetButton.addEventListener("click", resetButtonHandler);
entereventButton.addEventListener("click", entereventButtonHandler);

function resetButtonHandler () {
console.log("Reset Button wurde gedrückt");


}
function entereventButtonHandler (){

}




}