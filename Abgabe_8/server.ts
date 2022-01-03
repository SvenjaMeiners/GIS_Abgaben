import * as http from "http";
import * as mongo from "mongodb";

//HTTP
const hostname: string = "127.0.0.1"; //localhost
const port: number = 3020; //Port

//Mongo
let url: string = "mongodb://localhost:27017"; // für lokale MongoDB
let mongoClient: mongo.MongoClient = new mongo.MongoClient(url);

// Beispiel: mongoClient.connect(); //verbindung
//zeug

//mongoClient.close(); //schließt die verbindung 

const server: http.Server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {

        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.setHeader("Access-Control-Allow-Origin", "*");

        //Routing
        let url: URL = new URL(request.url || "", `http://${request.headers.host}`);

        if (url.pathname === "/Events") {
            await mongoClient.connect();
            response.write(await dbGet());
           
        }
        else if (request.method === "POST") {
            let input: string;
            request.on("data", (data) => {
                input += data;
            });
            request.on("end", async () => {
                await mongoClient.connect();
                input = input.replace("undefined", "");// the Stringfy has an undifnied in front?
                await dbSet(input);
               
            });
         
        } else {
            response.statusCode = 404;
        }
        mongoClient.close();
        response.end();
    }
);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

async function dbGet(): Promise<string> {
    let result = await mongoClient.db("Eventdatenbank").collection("Events").find(/*leer -> oder wenn du was suchst den namen*/).toArray(); // collection --> array[] 
    return JSON.stringify(result);
    mongoClient.close();
}

async function dbSet(event: string) {
    mongoClient.db("Eventdatenbank").collection("Events").insertOne(JSON.parse(event));
    mongoClient.close();
}
