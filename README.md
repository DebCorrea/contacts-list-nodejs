# Lista de contatos - Node.js

Esta api consiste em criar um pequeno cadastro de clientes com vínculo de contatos, recebendo e salvando essas informações em um banco de dados.

## Principais tecnologias utilizadas

<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Typescript</li>
  <li>TypeORM</li>
  <li>JWT</li>
  <li>Bcrypt.js</li>
  <li>Yup</li>
</ul>

## Passos para instalação e execução

<ol>
  <li>Clone o repositório do github.</li>
  <li>Para instalar as dependências do projeto, utilize o comando `yarn install`.</li>
  <li>Crie um arquivo `.env` na raiz do projeto, seguindo o padrão do arquivo `.env.example` adicionando suas credenciais.</li>
  <li>Crie um banco de dados com o mesmo nome que a variável `DB` em seu arquivo `.env`.</li>
  <li>Agora, rode as migrações com o comando `yarn typeorm migration:run -d src/data-source.ts`</li>
  <li>Agora, seu banco já possui tabelas e pode começar a ser populado, logo, use o comando `yarn dev` para iniciar a api.</li>
</ol>

## Endpoints da API

### Criação de usuário:

Método: _POST_

```
http://localhost:3003/users
```

### Request

```
{
	"fullName": "Deb Correa",
	"username": "debs",
	"password": "1234",
	"email": "debora@email.com",
	"number": "(21) 99999-9999"
}
```

- Todos os campos são obrigatórios

### Response

```
{
	"id": "f032ee86-2699-45f6-a145-442cf2ae5cd9",
	"fullName": "Deb Correa",
	"username": "debs",
	"email": "debora@email.com",
	"number": "(21) 99999-9999",
	"registrationDate": "2022-12-12T00:16:19.432Z"
}
```

- Status code: 201

<br />
<br />

### Login de usuário:

Método: _POST_

```
http://localhost:3003/users
```

### Request

```
{
	"username": "debs",
	"password": "1234"
}
```

- Todos os campos são obrigatórios

### Response

```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwMzJlZTg2LTI2OTktNDVmNi1hMTQ1LTQ0MmNmMmFlNWNkOSIsImlhdCI6MTY3MDgwNTc3MCwiZXhwIjoxNjcwODkyMTcwfQ.r1WGMyR9bsyH6YenCRawQIrdHEiEwMDPda3QZh4wZfg"
}
```

- Status code: 200

<br />
<br />

### Listagem de usuários:

Método: _GET_

```
http://localhost:3003/users
```

### Request

- Nenhum campo enviado
- Requer autenticação

### Response

```
[
	{
		"id": "178191e8-d558-4874-b31b-ee48e4c466f7",
		"fullName": "Deb Correa",
		"username": "debs",
		"email": "debora@email.com",
		"number": "(21) 99999-9999",
		"registrationDate": "2022-12-09T15:03:49.978Z",
		"contacts": []
	},
	{
		"id": "20e650fd-4a4d-4459-b3c0-95462ac0a085",
		"fullName": "Teste Testando",
		"username": "test",
		"email": "teste@email.com",
		"number": "(21) 99999-8888",
		"registrationDate": "2022-12-09T15:03:52.599Z",
		"contacts": []
	}
]
```

- Status code: 200

<br />
<br />

### Listagem de usuário por id:

Método: _GET_

```
http://localhost:3003/users/:id
```

### Request

- Nenhum campo enviado
- Requer autenticação e autorização (ser dono do usuário)

### Response

```
{
	"id": "178191e8-d558-4874-b31b-ee48e4c466f7",
	"fullName": "Deb Correa",
	"username": "debs",
	"email": "debora@email.com",
	"number": "(21) 99999-9999",
	"registrationDate": "2022-12-09T15:03:49.978Z",
	"contacts": []
}
```

- Status code: 200

<br />
<br />

### Atualizar dados de usuário:

Método: _PATCH_

```
http://localhost:3003/users/:id
```

### Request

```
{
	"fullName": "Débora Corrêa",
	"username": "debs",
	"password": "1234",
	"email": "debs@emaill.com",
	"number": "(21) 99999-9999"
}
```

- Nenhum campo obrigatório
- Requer autenticação e autorização (ser dono do usuário)

### Response

```
{
	"id": "57fade2a-73be-469f-83c3-ce90f9b3e5d2",
	"fullName": "Débora Corrêa",
	"username": "debs",
	"email": "debs@emaill.com",
	"number": "(21) 99999-9999",
	"registrationDate": "2022-12-04T22:03:32.350Z"
}
```

- Status code: 200

<br />
<br />

### Deletar usuário:

Método: _DELETE_

```
http://localhost:3003/users/:id
```

### Request

- Nenhum campo enviado
- Requer autenticação e autorização (ser dono do usuário)

### Response

```
No body returned for response
```

- Status code: 204

<br />
<br />

### Criar contato:

Método: _POST_

```
http://localhost:3003/contacts
```

### Request

```
{
	"fullName": "Gabriel",
	"email": "biel@email.com",
	"number": "(32) 99874-8194"
}
```

- Todos os campos são obrigatórios
- Requer autenticação

### Response

```
{
	"id": "e94d4937-2be7-4e86-8ed1-25e2dd868138",
	"fullName": "Gabriel",
	"email": "biel@email.com",
	"number": "(32) 99874-8194",
	"owner": {
		"id": "178191e8-d558-4874-b31b-ee48e4c466f7",
		"fullName": "Deb Correa",
		"username": "debs",
		"email": "debora@email.com",
		"number": "(21) 99999-9999",
		"registrationDate": "2022-12-09T15:03:49.978Z"
	}
}
```

- Status code: 201

<br />
<br />

### Listar contatos:

Método: _GET_

```
http://localhost:3003/contacts
```

### Request

- Nenhum campo enviado
- Requer autenticação

### Response

```
[
	{
		"id": "e94d4937-2be7-4e86-8ed1-25e2dd868138",
		"fullName": "Gabriel",
		"email": "biel@email.com",
		"number": "(32) 99874-8194"
	},
]
```

- Status code: 200

<br />
<br />

### Listar contato por id:

Método: _GET_

```
http://localhost:3003/contacts/:id
```

### Request

- Nenhum campo enviado
- Requer autenticação

### Response

```
{
	"id": "e94d4937-2be7-4e86-8ed1-25e2dd868138",
	"fullName": "Gabriel",
	"email": "biel@email.com",
	"number": "(32) 99874-8194"
}
```

- Status code: 200

<br />
<br />

### Atualizar dados de contato:

Método: _PATCH_

```
http://localhost:3003/contacts/:id
```

### Request

```
{
	"fullName": "Biel Biel",
	"email": "biel@emaill.com",
	"number": "(32) 99874-8194"
}
```

- Nenhum campo é obrigatório
- Requer autenticação

### Response

```
{
	"id": "e94d4937-2be7-4e86-8ed1-25e2dd868138",
	"fullName": "Biel Biel",
	"email": "biel@emaill.com",
	"number": "(32) 99874-8194"
}
```

- Status code: 200

<br />
<br />

### Deletar contato:

Método: _DELETE_

```
http://localhost:3003/contacts/:id
```

### Request

- Nenhum campo enviado
- Requer autenticação

### Response

```
No body returned for response
```

- Status code: 204
