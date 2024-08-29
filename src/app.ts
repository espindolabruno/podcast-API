import * as http from "http";
import { getEpisodes, getFilteredCategorys, getFilteredEpisodes } from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";

export const app = async (req: http.IncomingMessage,res: http.ServerResponse<http.IncomingMessage>) => {

    const [baseUrl, queryParams] = req.url?.split("?") ?? ["",""];

    if(req.method === "GET" && baseUrl === Routes.List)
        await getEpisodes(req,res)

    if(req.method === "GET" && baseUrl === Routes.Episode)
            await getFilteredEpisodes(req,res)

    if(req.method === "GET" && baseUrl === Routes.category)
        await getFilteredCategorys(req,res)

    // Add more routes as needed...

}