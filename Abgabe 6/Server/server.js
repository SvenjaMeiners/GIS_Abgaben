"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
var MyServer;
(function (MyServer) {
    const hostname = "127.0.0.1"; //localhost
    const port = 3000; //Port
    const server = http.createServer((request, response) => {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.setHeader("Access-Control-Allow-Origin", "*");
        //Routing
        let url = new URL(request.url || "", `http://${request.headers.host}`);
        switch (url.pathname) {
            case "/":
                response.write("Server erreichbar");
                break;
            case "/convertDate" + url.searchParams.toString():
                let convertDate = url.searchParams.get("convertDate");
                console.log(convertDate);
                response.write("Day: " + convertDate + "," + "Month:" + convertDate + "," + "Year:" + convertDate);
                break;
            default:
            //let convertDate: string = url.searchParams.toString(); 
            //console.log(convertDate); 
            //response.statusCode = 404;
        }
        response.end();
    });
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    });
})(MyServer || (MyServer = {}));
//# sourceMappingURL=server.js.map