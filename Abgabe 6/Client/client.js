"use strict";
var MyClient;
(function (MyClient) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3020";
    const path = "/convertDate";
    //const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myForm");
    const dateInput = document.getElementById("date");
    const sendButton = document.getElementById("send-button");
    sendButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        request();
    });
    async function request() {
        /*
        let formData: FormData= new FormData;
        let query: URLSearchParams = new URLSearchParams("<any>formData"); //<any>formData

        console.log(query.toString());
        console.log(new Date(dateInput.value));
        */
        let urlWithQuery = url + path + "?b=" + JSON.stringify(new Date(dateInput.value));
        let response = await fetch(urlWithQuery);
        let responseText = await response.text();
        console.log(responseText);
    }
})(MyClient || (MyClient = {}));
/*
cd '/Users/svenjameiners/Documents/GitHub/GIS_Abgaben/Abgabe 6/Server'
node server.js
*/ 
//# sourceMappingURL=client.js.map