# Verificador De CPF

Aplicação que verifica se um determinado número de CPF se encontra em uma lista negra. Também é possível adicionar e remover CPFs da lista.

## Inicialização

Para iniciar o projeto é necessário que o Docker e o Docker Compose ja estejam instalados em sua máquina:

- [Docker](https://docs.docker.com/install/)
- [Docker compose](https://docs.docker.com/compose/install/)

Depois execute os comandos em sequencia:

```
docker-compose build

docker-compose up app
```

Quando os containers estiverem rodando, acesse o container do Node utilizando o comando:

```
docker exec -ti app sh
```

Dentro do container do Node execute o comando para que as migrações sejam efetuadas:

```
npm run migrate
```

Depois você pode acessar [localhost:3000](http://localhost:3000/) em seu navegador para interagir com o formulário da aplicação.

Para parar a aplicação, execute:

```
docker-compose down
```

## Rotas

### `GET /`

Retorna uma página acessível via browser, com um formulário para interagir com as rotas de cpf da aplicação.

### `GET /v1/cpf`

Checa se um CPF existe na lista negra. Ex: `GET /v1/cpf?cpf=902.378.02058`

Retorno:
```js
{
  "cpf": "902.378.02058", // O CPF pesquisado
  "blacklisted": false // Se ele se encontra ou não na lista
}
```

### `POST /v1/cpf`

Adiciona um CPF na lista negra.

Aceita um JSON neste formato:
```js
{
  "cpf": "902.378.02058", // O CPF a ser adicionado
}
```

Retorno:
```js
{
  "cpf": "902.378.02058", // O CPF adicionado
  "blacklisted": true // Na blacklist
}
```

### `DELETE /v1/cpf`

Remove um CPF da lista negra. Ex: `DELETE /v1/cpf?cpf=902.378.02058`

Retorno:
```js
{
  "cpf": "902.378.02058", // O CPF removido
  "blacklisted": false // Não está na blacklist
}
```

### `GET /v1/status`

Retorna informações de status do servidor.

Retorno:
```js
{
  "uptime": 1238, // Tempo em segundos que o servidor está no ar
  "amount": {
    "blacklist": 2, // Quantidade de CPFs na lista negra
    "searches": 1 // Quantidade de vezes que CPFs foram consultados
  }
}
```

## Estrutura de pastas

```
├── configuration
├── controllers
├── database
│   ├── migrations
│   ├── models
│   └── seeders
├── middlewares
├── services
└── static
    ├── public
    └── src
        └── components
```

- `configuration`: Contem configurações do servidor, em arquivos JSON.
- `controllers`: Controladores da aplicação, responsáveis em receber as requisições e repassa-las para os serviços correspondentes.
- `database`: Tudo relacionado ao Sequelize e interações com o banco de dados.
- `middlewares`: Responsáveis em validar as requisições antes de repassá-las para os controladores.
- `services`: Contém a lógica de negócio da aplicação.
- `static`: Tudo relacionado ao front-end fica aqui, é uma aplicação React.

## Testes

Os testes da aplicação são executados dentro de um container Docker, através do comando abaixo:

```
docker-compose up --abort-on-container-exit app-test
```
