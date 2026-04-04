import { repoPodcast } from "../repositories/podcastsRepository"
import { FilterPodcastModel } from "../models/responseModel";
import { StatusCode } from "../utils/statusCode";

export const serverFilterEp = async (podcastName:string | undefined): Promise<FilterPodcastModel> => {

    // define a interface de retorno
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    };

    // buscando os dados
    const queryString = podcastName?.split("?p=")[1] ?? "";
    const data = await repoPodcast(queryString);

    // verifico se tem conteudo
    if(data.length !== 0) responseFormat.statusCode = StatusCode.SUCCESS;
    else responseFormat.statusCode = StatusCode.NO_CONTENT;
    
    responseFormat.body = data;

    return responseFormat;
}