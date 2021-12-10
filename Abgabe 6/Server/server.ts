import * as http from "http";

namespace MyServer {
    const hostname: string = "127.0.0.1"; //localhost
    const port: number = 3020; //Port

    const server: http.Server= http.createServer(
        (request: http.IncomingMessage, response:http.ServerResponse) =>  {

            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.setHeader("Access-Control-Allow-Origin", "*");

            //Routing
            let url: URL = new URL (request.url || "", `http://${request.headers.host}`);
          
            if(url.pathname === "/"){
                response.write("Server erreichbar");
            }
            else if(request.method === "GET"){
                console.log(JSON.parse(url.searchParams.get("b")));
                
            let date: Date = new Date(JSON.parse(url.searchParams.get("b")))
            response.write("Day: " + date.getDay() + "," + "Month:" + date.getMonth() + "," + "Year:" +  date.getFullYear());
            }else{
                response.statusCode = 404;
            }

            
            /*
            switch(url.pathname){
                case "/":
                    response.write("Server erreichbar");
                    break;
                case "/date" + url.searchParams.toString():        
                    let date: string = url.searchParams.get("date"); 
                    console.log(date); 
                    response.write("Day: " + date + "," + "Month:" + date + "," + "Year:" + date); 
                    break;
                default:

                    //let date: string = url.searchParams.toString(); 
                    //console.log(date); 
                    response.statusCode = 404;
            }
            */
            response.end();
        }
    );

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    });
//}(MyServer || (Server = {}));
//# sourceMappingURL=server.js.map
}