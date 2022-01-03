"use strict";
var Aufgabe8;
(function (Aufgabe8) {
    //serverpfad URL "http://localhost:3020"
    const interpretInput = document.getElementById("interpret");
    const datetimeInput = document.getElementById("datetime");
    const priceInput = document.getElementById("price");
    const entereventButton = document.getElementById("enterevent");
    const eventtabelle = document.getElementById("eventtabelle");
    entereventButton.addEventListener("click", enterEvent);
    load();
    async function load() {
        let events;
        //verbindung zum HTTP server -> get
        //server get bekommen intepret, price ... usw füllen
        let response = await fetch("http://localhost:3020" + "/Events", {
            method: "get"
        });
        events = JSON.parse(await response.text());
        //schleife erstellen für events --> zu event
        for (let i = 0; i < events.length; i++) {
            createEvent(events[i].interpret, events[i].price, events[i].date);
        }
    }
    async function enterEvent() {
        let interpret = interpretInput.value;
        let price = parseInt(priceInput.value);
        let date = new Date(datetimeInput.value);
        console.log(interpret + "\n" + priceInput + "\n" + date);
        let event = {
            interpret,
            price,
            date
        };
        //db set event --> verbundung zum HTTP srever mit POST
        await versenden(event);
        createEvent(interpret, price, date);
    }
    async function versenden(event) {
        //per post versenden
        await fetch("http://localhost:3020/Event", {
            method: "post",
            //body ist der Inhalt der nachricht--> 
            body: JSON.stringify(event),
        });
    }
    function createEvent(interpret, price, datetime) {
        let tr = document.createElement("tr");
        let interpretElement = document.createElement("td");
        let priceElement = document.createElement("td");
        let datetimeElement = document.createElement("td");
        //let löschenElement: HTMLElement = document.createElement("td");
        //let löschenButton: HTMLElement = document.createElement("button");
        interpretElement.innerText = interpret;
        priceElement.innerText = price + "";
        datetimeElement.innerText = datetime + "";
        //löschenButton.innerHTML = "löschen";
        //löschenElement.append(löschenButton);
        //löschenElement.addEventListener("click", eventLöschen);
        tr.appendChild(interpretElement);
        tr.appendChild(priceElement);
        tr.appendChild(datetimeElement);
        //tr.appendChild(löschenElement);
        eventtabelle.appendChild(tr);
    }
})(Aufgabe8 || (Aufgabe8 = {}));
/*
await fetch("http://localhost:3020", {
    method: "post",
    body: JSON.stringify(/*json Sting*/ /*),
}); */
/*
await fetch("http://localhost:3020" /*search parameter */ /*, {
    method: "get",*/
/*});*/
//# sourceMappingURL=client.js.map