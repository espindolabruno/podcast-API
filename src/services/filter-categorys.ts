import { IncomingMessage } from "http"
import { getAllPodcasts } from "../repositories/podcasts-repository"


export const filterCategorys = async (category:IncomingMessage) => {
    
    const podcasts = await getAllPodcasts()
    const categoryFilter = category.url?.split("?c=")[1]?? "";
    const data = podcasts.filter(podcast => 
        podcast.category.map(c => c.toLowerCase()).includes(categoryFilter)
    );

    const result = {
            status: 200,
            message: "Podcasts filtered successfully",
            data
    }

    return result
}