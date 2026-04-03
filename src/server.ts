import * as http from 'http'; // importando o modulo http padrão do node
import { getFilterEps, getListEps } from './controllers/podcastsController';

// criação do servidor com request e response
const server = http.createServer(
    async (req:http.IncomingMessage,res:http.ServerResponse) =>{
        if(req.method === "GET" && req.url === "/api/list"){
            await getListEps(req, res);
        }

        if(req.method === "GET" && req.url === "/api/list/flow-podcast"){
            await getFilterEps(req, res);
        }
    }
);

const port = process.env.PORT; // constante que le o valor da porta no .env

server.listen(port,() =>{
    console.log(`servidor iniciado na porta ${port}`);
})