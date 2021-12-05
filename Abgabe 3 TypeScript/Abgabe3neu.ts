// -- [Aufgabe 1]

/**
 * @var {number} age: Bitte anstatt der 23 dein Alter eintragen
 */
let age: number = 23;

/**
 * @var {string} firstName: Bitte anstatt 'Svenja' deinen Vornamen eintragen
 */
let firstName: string = `Svenja`;

function func1(age: number): number {
  return 2021 - age;
}

let output: string = func2(firstName);

function func3(meal?: string): string {
  console.log(`Ich esse gerne ${meal || "Pommes"}.`);
  return func1(age) > 1998
    ? `Ich gehöre zur Generation Z`
    : `Ich gehöre zur Generation Y`;
}

console.log(output);

function func2(name: string): string {
  console.log(`Ich heiße ${name}.`);
  return func3();
}

/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich heiße Svenja. 
 * Ich esse gerne Pommes.
 * Ich gehöre zur Generation Y.
 */

// -- [Aufgabe 2]

let events: any [][] = [
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

var multi: number[][] = [[1, 2, 3], [4, 5, 6, 7], [8, 9, 10]];
console.log(multi[0][2]);
console.log(multi[1][0]);
console.log(multi[1][1]);
console.log(multi[1][2]);
console.log(multi[1][3]);
console.log(multi[2][0]);
console.log(multi[2][1]);
console.log(multi[2][2]);
console.log(events.length);

// Lösung b) 

for (let i = 0; i < events.length; i++) {
  console.log(events[i][0], events [i][1]);
}

// Lösung c) 
function maxPrice(array: any [][]): number {
  let resultat = 0;
  for (let i = 0; i < array.length; i++) {
      if (array[i][1] > resultat) {
        resultat = array [i][1];
      }
  }

  return resultat; 
}
let max = maxPrice(events);
console.log(max);

// Lösung d) 
function interpretSearch(array: any [][], interpret: string): boolean {

for (let i = 0; i < events.length; i++) {
  if (array[i][0] == interpret) {
    return true; 
  }
}
  return false;
}
console.log(interpretSearch(events, "Metallica"));

// Lösung e) 

function factorial(n: number): void {
    let result: number = 1;
    while (n > 0) {
      result *= n;
      n--;
    }
    console.log(result);
  }
  factorial (5);

// Lösung f) 
let count: number = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        count++;
        console.log(i);
    }
}
console.log("count: ", count);

// Lösung g) 
class ConcertEvent {
    private interpret: string;
    private price: number = 0; 
  
    constructor(interpret: string, price: number) {
      this.interpret = interpret;
      this.price = price;
    }
  
    preis(): void {
      this.price++;
      }
  
    show(): string {
      return `Das Konzert von ${this.interpret} kostet ${this.price} Euro.`;
    }
  }
  

// Lösung h) 

let concertArray: ConcertEvent[] = [
    new ConcertEvent("Mark Knopfler", 10.1),
    new ConcertEvent("Pink Floyd", 15.9),
    new ConcertEvent("Metallica", 20.1),
    new ConcertEvent("Michael Bublé", 11.1),
    new ConcertEvent("Dire Straits", 12.2),
    new ConcertEvent("Mariah Carey", 1.1),
    new ConcertEvent("Cat Stevens", 12.99),
    new ConcertEvent("Mark Forster", 2.1),
    new ConcertEvent("Helene Fischer", 3.1),
    new ConcertEvent("Bee Gees", 25.2)
  ];
  for (let number = 0; number < concertArray.length; number++) {
    console.log(concertArray[number]).
  }
  