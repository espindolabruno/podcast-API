import { getAllPodcasts } from "../repositories/podcasts-repository"



export const filterEpisodes = async (podcastName:string) => {
    const data = getAllPodcasts(podcastName)

    return data
}