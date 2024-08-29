import { getAllPodcasts } from "../repositories/podcasts-repository"


export const serviceListEpisodes = async () => {
    const data = await getAllPodcasts()

    const result = {
        status: 200,
        message: "Episodes fetched successfully",
        data
    }

    if(result.data.length <= 0)
        result.status = 204

    return result
}