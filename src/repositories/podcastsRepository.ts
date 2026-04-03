import fs from 'fs'; // importa o file system
import path from 'path'; // caminho de arquivo
import { podcastModel } from '../models/podcastModel'; // importa a interface de podcast

const pathData = path.join(__dirname, "../repositories/podcasts.json"); // caminho do .json


// pega os dados do .json, '?' nos parametros -> quer dizer que o parametro é opcional
export const repoPodcast = async (podcastName?:string): Promise<podcastModel[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8"); // le o arquivo em portugues
    let jsonFile = JSON.parse(rawData); // transforma em json

    if(podcastName){
        jsonFile = jsonFile.filter(
            (podcast:podcastModel) => podcast.podcastName === podcastName
        );
    }
    
    return jsonFile; // retorna um json que segue os parametros da interface definica
};