import { FilterPodcastModel } from "../models/responseModel";
import { repoPodcast } from "../repositories/podcastsRepository";
import { StatusCode } from "../utils/statusCode";

export const serviceListEp = async (): Promise<FilterPodcastModel> => {
    let responseFormat:FilterPodcastModel = {
        statusCode: 0,
        body: [],
    };

    const data = await repoPodcast();
    
    if(data.length !== 0) responseFormat.statusCode = StatusCode.SUCCESS;
    else responseFormat.statusCode = StatusCode.NO_CONTENT;
    
    responseFormat.body = data;

    return responseFormat;
};