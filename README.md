
# TrybeSmith API

Neste projeto você vai encontrar um CRUD para uma loja mediaval de um jogo de RPG


## Stack utilizada

**Back-end:** Node, Express ,Mysql, Docker e JWT


## Documentação da API

#### Realiza Login checkando os dados do usúario no banco e retornando um token JWT
```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**. Email Válido |
`password` | `string` | **Obrigatório**. Password Válido |


#### Realiza cadastro de uma nova ORDEM
```http
  POST /orders
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `productsIds` | `object` | **Obrigatório**. Array de Números dos ids dos produtos |

#### Realiza cadastro de um novo USER
```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**. Username Válido
| `vocation` | `string` | **Obrigatório**. Vocation Válido
| `level` | `number` | **Obrigatório**. Level entre 1 e 100
| `password` | `string` | **Obrigatório**. Password Válido


#### Realiza a busca de todos os PEDIDOS
```http
  GET /orders
```



