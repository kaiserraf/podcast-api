import { repoPodcast } from "../repositories/podcastsRepository";

export const serviceListEp = async () => {
    const data = await repoPodcast();
    
    return data;
};