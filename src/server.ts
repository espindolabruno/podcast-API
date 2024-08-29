import * as http from "http";
import { app } from "./app";

console.log("hello server")

const server = http.createServer(app);

server.listen(3333, () => {
    console.log("server listening on port 3333")
})

