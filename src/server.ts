import * as http from 'http'; // importando o modulo http padrão do node
import { getListEps } from './controllers/podcastsController';

// criação do servidor com request e response
const server = http.createServer(
    async (req:http.IncomingMessage,res:http.ServerResponse) =>{
        if(req.method === "GET"){
            await getListEps(req, res);
        }   
    }
);

const port = process.env.PORT; // constante que le o valor da porta no .env

server.listen(port,() =>{
    console.log(`servidor iniciado na porta ${port}`);
})