import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEp } from '../services/listEp';
import { serverFilterEp } from '../services/filterEp';

export const getListEps = async (req:IncomingMessage, res:ServerResponse) => {

    const content = await serviceListEp(); // puxa a listEp de services

    res.writeHead(200, {'content-type': "application/json"}); // escrever no cabeçalho
    res.end(JSON.stringify(content));// escrever no conteudo
};

export const getFilterEps = async (req:IncomingMessage, res:ServerResponse) => {
    const queryString = req.url?.split("?p=")[1] ?? "";

    const content = await serverFilterEp(queryString);

    res.writeHead(200, {'content-type': "application/json"});
    res.end(JSON.stringify(content)); // stringfy = muda de json pra texto
}