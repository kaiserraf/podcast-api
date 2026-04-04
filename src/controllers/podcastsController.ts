import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEp } from '../services/listEp';
import { serverFilterEp } from '../services/filterEp';
import { ContentType } from '../utils/contentType';
import { FilterPodcastModel } from '../models/responseModel';

export const getListEps = async (req:IncomingMessage, res:ServerResponse) => {

    const content:FilterPodcastModel = await serviceListEp(); // puxa a listEp de services

    res.writeHead(content.statusCode, {'content-type': ContentType.JSON}); // escrever no cabeçalho
    res.write(JSON.stringify(content.body));// escrever no conteudo
    res.end();
};

export const getFilterEps = async (req:IncomingMessage, res:ServerResponse) => {
    const content:FilterPodcastModel = await serverFilterEp(req.url);

    res.writeHead(content.statusCode, {'content-type': ContentType.JSON});
    res.write(JSON.stringify(content.body)); // stringfy = muda de json pra texto
    res.end();
}