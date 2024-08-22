import * as http from "http";
import {getEpisodes, getFilteredEpisodes} from "./controllers/podcast-controller" 

console.log("hello server")

const server = http.createServer(async (req,res) => {
    if(req.method === "GET" && req.url === "/api/list")
        await getEpisodes(req,res)

    if(req.method === "GET" && req.url === "/api/episode")
            await getFilteredEpisodes(req,res)
})

server.listen(3333, () => {
    console.log("server listening on port 3333")
})

