# PodManager

## Descrição
PodManager é um aplicativo no estilo Netflix que centraliza diferentes podcasts, organizando-os por categorias específicas. Com este app, você pode facilmente encontrar e ouvir episódios de podcasts que abordam temas de interesse, como Saúde, Games, Fitness, Desenvolvimento Pessoal, Música, entre outros.

## Funcionalidades

- **Listagem de Podcasts por Categorias**: Navegue pelos podcasts divididos em seções categorizadas, como [Saúde, Games, Fitness, Desenvolvimento Pessoal, Música, Miscellaneous].
- **Filtragem de Episódios**: Filtre episódios por nome de podcast, facilitando a busca por conteúdo específico.

## Como Funciona?

### Feature
- Exibe os episódios dos principais podcasts, organizados por seções de categoria, para uma experiência de navegação intuitiva.

### Tecnologias Utilizadas
- **Node.js**: Plataforma para execução do JavaScript no servidor.
- **TypeScript**: Linguagem que adiciona tipos estáticos ao JavaScript, facilitando a manutenção e escalabilidade do código.
- **Vanilla JavaScript**: Utilizado sem frameworks adicionais, garantindo uma implementação mais direta e personalizável.

## Como Utilizar

### Pré-requisitos
- **Node.js** instalado na sua máquina.
- **NPM** ou **Yarn** para gerenciar pacotes.

### Instalação

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/espindolabruno/podcast-API
    ```

2. **Instale as dependências**:

    ```bash
    npm install
    ```

    ou, se estiver usando Yarn:

    ```bash
    yarn install
    ```

3. **Inicie o servidor**:

    ```bash
    npm run dev
    ```

    ou, com Yarn:

    ```bash
    yarn run dev
    ```

    O servidor estará rodando por padrão na porta `3333`. Você pode acessá-lo em `http://localhost:3333`.

### Endpoints Disponíveis

- **Listar Podcasts**: Retorna uma lista de podcasts categorizados.
  
    **Rota**: `/api/list`

    **Exemplo de uso**:

    ```bash
    curl http://localhost:3000/api/list
    ```

- **Filtrar Episódios por Nome de Podcast**: Retorna episódios de um podcast específico.

    **Rota**: `/api/episode?e=Flow`

    **Exemplo de uso**:

    ```bash
    curl http://localhost:3333/api/episode?e=Flow
    ```

- **Filtrar Podcasts por Categoria**: Retorna podcasts de uma categoria específica.

    **Rota**: `/api/category?c=music`

    **Exemplo de uso**:

    ```bash
    curl http://localhost:3333/api/category?c=music
    ```

## Como Implementar:

### API Rest
A API retorna informações sobre os podcasts, incluindo nome, episódio, capa e link para visualização. O retorno é em formato JSON.

```json
[
    {
        "PodcastName": "Flow",
        "EpisodeName": "VINTAGE CULTURE - Flow #376",
        "videoId": "lz56aZYuoY0",
        "thumbnail": "https://i.ytimg.com/vi/lz56aZYuoY0/maxresdefault.jpg?",
        "link": "https://www.youtube.com/watch?v=lz56aZYuoY0",
        "category": ["music", "miscellaneous"]
    },
    {
        "PodcastName": "Joe Rogan Experience",
        "EpisodeName": "Elon Musk Interview",
        "videoId": "DYz0p4OpFzM",
        "thumbnail": "https://i.ytimg.com/vi/DYz0p4OpFzM/maxresdefault.jpg?",
        "link": "https://www.youtube.com/watch?v=DYz0p4OpFzM",
        "category": ["technology", "science"]
    }
]
```

### Estrutura Básica do Código

#### `App.ts`
O arquivo `App.ts` é o ponto de entrada da aplicação, responsável por lidar com as requisições HTTP e encaminhá-las para os controladores apropriados com base nas rotas.

```typescript
import * as http from "http";
import { getEpisodes, getFilteredCategorys, getFilteredEpisodes } from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    const [baseUrl, queryParams] = req.url?.split("?") ?? ["", ""];

    if (req.method === "GET" && baseUrl === Routes.List)
        await getEpisodes(req, res);

    if (req.method === "GET" && baseUrl === Routes.Episode)
        await getFilteredEpisodes(req, res);

    if (req.method === "GET" && baseUrl === Routes.category)
        await getFilteredCategorys(req, res);

    // Add more routes as needed...
}
```

## Como Contribuir
- **Issues**: Relate bugs ou sugira novas funcionalidades através das issues no repositório.
- **Pull Requests**: Contribuições são bem-vindas! Siga as diretrizes de contribuição e submeta um pull request.

## Licença
Este projeto é licenciado sob a [Licença MIT](LICENSE).
```
