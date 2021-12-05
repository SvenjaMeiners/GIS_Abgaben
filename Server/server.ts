import * as http from "http";

namespace server {
    const hostname: string = "127.0.0.1"; //localhost
    const port: number = 3000; //Port

    const server: http.Server= http.createServer(
        (request: http.IncomingMessage, response:http.ServerResponse) =>  {

            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.setHeader("Access-Control-Allow-Origin", "*");

            //Routing
            let url: URL = new URL (request.url || "", `http://${request.headers.host}`);

            switch(url.pathname){
                case "/":
                    response.write("Hello Svenja");
                    break;
                    case "/greetings":
                        response.write("Hallo mein Freund");
                    break;
                default:
                    response.statusCode = 404
            }
            response.end();
        }
    );

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    });
}