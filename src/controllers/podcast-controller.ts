import { IncomingMessage, ServerResponse } from "http";
import {serviceListEpisodes} from '../services/list-episodes'
import { filterEpisodes } from "../services/filter-episodes";
import { filterCategorys } from "../services/filter-categorys";

export const getEpisodes = async (req: IncomingMessage, res : ServerResponse) => {
    
    
    const content = await serviceListEpisodes()
    
    
    res.writeHead(content.status)
    res.end(JSON.stringify(content.data))
 
}

export const getFilteredEpisodes = async (req: IncomingMessage, res : ServerResponse) => {

    const content = await filterEpisodes(req)

    res.writeHead(content.status)    
    res.end(JSON.stringify(content.data))
 
}

export const getFilteredCategorys = async (req: IncomingMessage, res : ServerResponse) => {

    const content = await filterCategorys(req)

    res.writeHead(content.status)    
    res.end(JSON.stringify(content.data))

}