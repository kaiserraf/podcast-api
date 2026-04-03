import { repoPodcast } from "../repositories/podcastsRepository"

export const serverFilterEp = async (podcastName:string) => {
    const data = await repoPodcast(podcastName);

    return
}