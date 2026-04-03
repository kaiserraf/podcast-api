import * as http from 'http'; // importando o modulo http padrão do node
import { getFilterEps, getListEps } from './controllers/podcastsController';

// criação do servidor com request e response
const server = http.createServer(
    async (req:http.IncomingMessage,res:http.ServerResponse) =>{

        // QueryString
        // http://localhost:3333/api/list?p=PodPah

        const [baseUrl, queryString] = req.url?.split("?") ?? ["",""];

        if(req.method === "GET" && baseUrl === "/api/list"){
            await getListEps(req, res);
        }

        if(req.method === "GET" && baseUrl === "/api/list/flow-podcast"){
            await getFilterEps(req, res);
        }
    }
);

const port = process.env.PORT; // constante que le o valor da porta no .env

server.listen(port,() =>{
    console.log(`servidor iniciado na porta ${port}`);
})