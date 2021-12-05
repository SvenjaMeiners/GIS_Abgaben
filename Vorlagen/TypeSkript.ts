// -- [Aufgabe 1]

/
 * @var {number} age: Bitte anstatt der 23 dein Alter eintragen
 */
let age: number = 23;

/
 * @var {string} firstName: Bitte anstatt 'Svenja' deinen Vornamen eintragen
 /
let firstName: string = Svenja;

function func1(age: number): number {
  return 2021 - age;
}

let output: string = func2(firstName);

function func3(meal?: string): string {
  console.log(Ich esse gerne ${meal || "Pommes"}.);
  return func1(age) > 1998
    ? Ich gehöre zur Generation Z
    : Ich gehöre zur Generation Y;
}

console.log(output);

function func2(name: string): string {
  console.log(Ich heiße ${name}.);
  return func3();
}

/ -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich heiße Svenja.
 * Ich esse gerne Pommes.
 */

// -- [Aufgabe 2]

let events: any[][] = [
  ["Mark Knopfler", 10.1],
  ["Pink Floyd", 15.9],
  ["Metallica", 20.1],
  ["Michael Bublé", 11.1],
  ["Dire Straits", 12.2],
  ["Mariah Carey", 1.1],
  ["Cat Stevens", 12.99],
  ["Mark Forster", 2.1],
  ["Helene Fischer", 3.1],
  ["Bee Gees", 25.2],
];

// -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN

// Lösung a) 

var multi:number[][] = [[1,2,3],[4,5,6,7],[8,9,10]]
console.log(multi[0][2])
console.log(multi[1][0]) 
console.log(multi[1][1]) 
console.log(multi[1][2]) 
console.log(multi[1][3])
console.log(multi[2][0]) 
console.log(multi[2][1]) 
console.log(multi[2][2])
console.log(event.length)

// Lösung b) ...


let x: any[] = [];
x[0] = ["Mark Knopfler", 10.1];
x[1] = ["Pink Floyd", 15.9];
x[2] = ["Metallica", 20.1];
x[3] = ["Michael Bublé", 11.1];
x[4] = ["Dire Straits", 12.2;
x[5] = ["Mariah Carey", 1.1];
x[6] = ["Cat Stevens", 12.99];
x[7] = ["Mark Forster", 2.1];
x[8] = ["Helene Fischer", 3.1];
x[9] = ["Bee Gees", 25.2];
console.log(x);


// Lösung c) ...

let Ticketpreis: any [] = [];
x[0] = ["Einzelticket", 30.00];
x[1] = ["Gruppen Ticket", 100.00];
x[2] = ["VIP Ticket", 250.00];
x[3] = ["Beste Freunde Ticket", 50.00];
x[4] = ["Studententicket", 20.00];

console.log(Ticketpreis.max);


// Lösung d) ...

return x ();

let Künstlername: any [] = [;
  ["Mark Knopfler", 10.1];
  ["Pink Floyd", 15.9];
  ["Metallica", 20.1];
  ["Michael Bublé", 11.1];
  ["Dire Straits", 12.2];
  ["Mariah Carey", 1.1];
  ["Cat Stevens", 12.99];
  ["Mark Forster", 2.1];
  ["Helene Fischer", 3.1];
  ["Bee Gees", 25.2];
];

if (Künstlername == true) {
console.log("true");
} else {
console.log("false");    
}


// Lösung e) ...

// Lösung f) ...

// Lösung g) ...

// Lösung h) ...