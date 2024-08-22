import { IncomingMessage, ServerResponse } from "http";
import {serviceListEpisodes} from '../services/list-episodes'
import { filterEpisodes } from "../services/filter-episodes";

export const getEpisodes = async (req: IncomingMessage, res : ServerResponse) => {
    
    const content = await serviceListEpisodes()
    
    
    res.writeHead(200,{'Content-Type': 'application/json'})
    res.end(JSON.stringify(content))
 
}

export const getFilteredEpisodes = async (req: IncomingMessage, res : ServerResponse) => {
    const content = await filterEpisodes("Podpah")

    res.writeHead(200,{'Content-Type': 'application/json'})
    res.end(JSON.stringify(content))
 
}