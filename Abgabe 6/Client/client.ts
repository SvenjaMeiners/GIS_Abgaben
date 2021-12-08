namespace MyClient {
    console.log("Client läuft"); 

    const url: string = "http://127.0.0.1:3020"; 
    const path: string = "/convertDate"; 

    //const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myForm");
    const dateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("date"); 
    const sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button"); 

    sendButton.addEventListener("click", function(evt: Event){
        evt.preventDefault(); 
        request(); 
    });
    async function request (): Promise<void> {
        /*
        let formData: FormData= new FormData; 
        let query: URLSearchParams = new URLSearchParams("<any>formData"); //<any>formData

        console.log(query.toString());
        console.log(new Date(dateInput.value));
        */

        let urlWithQuery: string = url + path + "?b=" + JSON.stringify(new Date(dateInput.value)); 
        
        let response: Response = await fetch(urlWithQuery); 
        let responseText: string = await response.text(); 
        console.log(responseText); 
    }
}
/*
cd '/Users/svenjameiners/Documents/GitHub/GIS_Abgaben/Abgabe 6/Server'
node server.js
*/