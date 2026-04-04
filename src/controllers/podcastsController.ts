import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEp } from '../services/listEp';
import { serverFilterEp } from '../services/filterEp';
import { StatusCode } from '../utils/statusCode';
import { ContentType } from '../utils/contentType';

export const getListEps = async (req:IncomingMessage, res:ServerResponse) => {

    const content = await serviceListEp(); // puxa a listEp de services

    res.writeHead(StatusCode.SUCCESS, {'content-type': ContentType.JSON}); // escrever no cabeçalho
    res.end(JSON.stringify(content));// escrever no conteudo
};

export const getFilterEps = async (req:IncomingMessage, res:ServerResponse) => {
    const content = await serverFilterEp(req.url);

    res.writeHead(StatusCode.SUCCESS, {'content-type': ContentType.JSON});
    res.end(JSON.stringify(content)); // stringfy = muda de json pra texto
}