# API RASTREAMENTO CORREIOS

API em Node para rastreamento de encomendas dos Correios. As informações das encomendas são obtidas através de web scraping.

## 🚀 Como executar

### 🔧 Instalação

1 - Clone o projeto

```
git clone https://github.com/phosantos/api-rastreamento-correios.git

cd api-rastreamento-correios
```

2 - Instale as dependências

```
npm install
```

3 - Inicie a aplicação

```
npm run init
```

Por padrão, a aplicação rodará na porta 3000. Para alterar, crie um arquivo .env na raiz do projeto e dentro crie a variável PORT. Exemplo:

```
PORT=5000
```

### 📦 Acessando

A aplicação possui apenas uma rota, onde o código de rastreamento do objeto é passado, e retorna o histórico do objeto em JSON.

```
localhost:3000/api/[CÓDIGO]
```

Exemplo da resposta:

```
[
  {
    "status": "Objeto recebido pelos Correios do Brasil",
    "data": "03/12/2022",
    "hora": "07:23",
    "local": "Unidade Operacional - Curitiba / PR"
  },

  {
    "status": "Objeto postado",
    "data": "26/11/2022",
    "hora": "16:37",
    "local": "País -  /"
  }
]
```

## 🛠️ Construído com

- [Node](https://nodejs.dev/en/api/v19/documentation/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/) - Usado para requisição HTTP
- [Cheerio](https://cheerio.js.org/) - Usado para extrair informações da página HTML
- [Link Correios](https://www.linkcorreios.com.br/) - Usado para obter o status dos objetos nos Correios
