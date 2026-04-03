# Nome do App

### Descrição
Um app com estilo NETFLIX, aonde possam ser centralizados diferentes episódios de podcast, separados por categoria

### Dominio
Podcasts feitos em vídeo

### Features
 - listar os episódios em sessões de categorias
    - [saúde fitness, mentalidade, humor]
 - filtrar episódios por nome de podcast

### Feature
 - Listar os episódios de podcast em sessões de categorias

#### Como implementar:
Vou retornar em uma API REST:
 - nome do podcast
 - nome do episódio
 - videoId
 - imagem de capa
 - link
 - categoria

 ```js
 [
    {
       podcastName: "Flow Podcast",
       episode: "TECNOLOGIA E IA [+ FABIO AKITA]",
       videoId:, "--slRywdonM",
       cover: "https://i.ytimg.com/vi/--slRywdonM/hq720.jpg?",
       link: "https://www.youtube.com/live/--slRywdonM",
       categories: ["tecnologia", "ia"]
    },
    {
       podcastName: "Flow Podcast",
       episode: "ARTHUR PETRY E KAIO D`ELAQUA - Extra Flow",
       videoId:, "kBYXJGooOz0",
       cover: "https://i.ytimg.com/vi/kBYXJGooOz0/hq720.jpg?",
       link: "https://www.youtube.com/live/kBYXJGooOz0",
       categories: ["humor", "Extra Flow"]
    },
 ]  
 ```