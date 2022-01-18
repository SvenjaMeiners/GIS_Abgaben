
namespace Aufgabe8 {

    interface TodoElement {

        interpret: string;
        price: number;
        date: Date;
    }
    //serverpfad URL "http://localhost:3200"

    const interpretInput: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
    const datetimeInput: HTMLInputElement = <HTMLInputElement>document.getElementById("datetime");
    const priceInput: HTMLInputElement = <HTMLInputElement>document.getElementById("price");
    const entereventButton: HTMLElement = <HTMLButtonElement>document.getElementById("enterevent");
    const eventtabelle: HTMLElement = <HTMLElement>document.getElementById("eventtabelle");


    entereventButton.addEventListener("click", enterEvent);
    load();


 

    async function enterEvent(): Promise<void> {

        let interpret: string = interpretInput.value;
        let price: number = parseInt(priceInput.value);
        let date: Date = new Date(datetimeInput.value);
        console.log(interpret + "\n" + priceInput + "\n" + date);

        let event: TodoElement = {
            interpret,
            price,
            date
        };
        //db set event --> verbundung zum HTTP srever mit POST
        await versenden(event);

        createEvent(interpret, price, date);
    }

    
    function createEvent(interpret: string, price: number, datetime: Date): void {
        let tr: HTMLElement = document.createElement("tr");
        let interpretElement: HTMLElement = document.createElement("td");
        let priceElement: HTMLElement = document.createElement("td");
        let datetimeElement: HTMLElement = document.createElement("td");
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

    async function versenden(event: TodoElement): Promise<void> {
        //per post versenden
        await fetch("http://localhost:3200/concertEvents", {
            method: "post",
            //body ist der Inhalt der nachricht--> 
            body: JSON.stringify(event)
        });

    }   
    async function load(): Promise<void> {

        let events: TodoElement[];
        //verbindung zum HTTP server -> get
        //server get bekommen intepret, price ... usw füllen
        let response: Response = await fetch("http://localhost:3200/concertEvents", {
            method: "GET"
        });
        events = JSON.parse(await response.text());

        //schleife erstellen für events --> zu event
        for (let i: number = 0; i < events.length; i++) {
            createEvent(events[i].interpret, events[i].price, events[i].date);
        }

    }

}


/*
await fetch("http://localhost:3020", {
    method: "post",
    body: JSON.stringify(/*json Sting*//*),
}); */

/*
await fetch("http://localhost:3020" /*search parameter *//*, {
    method: "get",*/
/*});*/

