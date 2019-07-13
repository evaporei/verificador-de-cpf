# Verificador De CPF


## Inicialização

Para iniciar o projeto é necessário que o Docker e o Docker Compose ja estejam instalados em sua máquina:

- [Docker](https://docs.docker.com/install/)
- [Docker compose](https://docs.docker.com/compose/install/)

Depois execute os comandos em sequencia:

`docker-compose build`

`docker-compose up`

Quando os containers estiverem rodando, acesse o container do Node utilizando o comando:

`docker exec -ti app sh`

Dentro do container do Node execute o comando para que as migrações sejam efetuadas:

`npm run migrate`
