import * as http from 'http'; // importando o modulo http padrão do node
import { getFilterEps, getListEps } from './controllers/podcastsController';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/httpMethods';

// criação do servidor com request e response
const server = http.createServer(
    async (req:http.IncomingMessage,res:http.ServerResponse) =>{
        const [baseUrl, queryString] = req.url?.split("?") ?? ["",""]; // QueryString

        if(req.method === HttpMethod.GET && baseUrl === Routes.LIST) await getListEps(req, res);
        if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) await getFilterEps(req, res);

    }
);

const port = process.env.PORT; // constante que le o valor da porta no .env

server.listen(port,() =>{
    console.log(`servidor iniciado na porta ${port}`);
})