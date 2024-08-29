import { IncomingMessage } from "http"
import { getAllPodcasts } from "../repositories/podcasts-repository"



export const filterEpisodes = async (podcastName:IncomingMessage) => {
 
    const content = podcastName
    const queryParams = content.url?.split("?p=")[1] ?? "";
    const data = await getAllPodcasts(queryParams)
    const result = {
        status: 200,
        message: "Episodes filtered successfully",
        data
    }

    if((data).length <= 0) 
        result.status = 204

    return result
}