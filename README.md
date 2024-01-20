# Desafio Full Cycle - Docker com Node

Este projeto é a resolução para o desafio do módulo `Docker` com `NodeJs`.

## Descrição

Nesse desafio, foi pedido para criar uma aplicação `Node` que se conecte ao `MySQL`, para a criação de nomes na tabela `people`.

Ao chamar a rota disponível, o `NGINX` irá receber a requisição e fará o proxy reverso para a aplicação `Node`.

Na execução da rota, é inserido um nome randômico na tabela `people` do `MySQL` e retornado uma lista com os usuários existentes.

### Requisitos

- É necessário ter o [Docker](https://docs.docker.com/get-docker/) instalado.

### Executando o Projeto

Para executar o projeto, basta executar o seguinte comando:

```sh
docker compose up -d
```

Após iniciar os containeres, basta chamar a rota disponível em http://localhost:8080
