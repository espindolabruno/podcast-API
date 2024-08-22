import { getAllPodcasts } from "../repositories/podcasts-repository"


export const serviceListEpisodes = async () => {
    const data = await getAllPodcasts()

    return data
}