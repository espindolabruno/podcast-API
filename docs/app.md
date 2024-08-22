# PodManager

## Descrição
- Um app ao estilo netflix onde eu possa centralizar diferentes podcasts separados por categoria

### Domínio 
- Podcasts feitos em vídeos

### funcionalidades
- Listar os podcasts em seções categoriazadas
    [Saúde, Games, Fitness, Desenvolvimento Pessoal, musica, miscellaneous]

- Filtrar episódios por nome de podcast

## Como?

### Feature
- Listar os episódios dos principais podcasts categorizado por seções

### Como implementar:
- Retornar em uma API rest o nome do podcast, episódio, capa e o link

    ```js
    [
        {
            PodcastName: "Flow",
            EpisodeName: "VINTAGE CULTURE - Flow #376",
            videoId: "lz56aZYuoY0",
            thumbnail: "https://i.ytimg.com/vi/lz56aZYuoY0/maxresdefault.jpg?",
            link: "https://www.youtube.com/watch?v=lz56aZYuoY0",
            category: "[music, miscellaneous]"
        },

        {
            PodcastName: "Flow",
            EpisodeName: "VINTAGE CULTURE - Flow #376",
            VideoId: "lz56aZYuoY0",
            thumbnail: "https://i.ytimg.com/vi/lz56aZYuoY0/maxresdefault.jpg?",
            link: "https://www.youtube.com/watch?v=lz56aZYuoY0",
            category: "[music, miscellaneous]"
        }
    ]
    ```