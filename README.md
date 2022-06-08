<h1> align="center"> Desafio final Pt #1| Compass </h1>

## Libs e versões
```
@hapi/joi: ^17.1.1        
dotenv: ^16.0.1        
express": ^4.18.1    
moment: ^2.29.3        
mongoose: ^6.3.5

```
## Indice
[Descrição](#Descrição)

[Funcionalidades](#Funcionalidades)

[Instalação](#Instalação)

[API-Car](#Api-Car)

[API-Person](#Api-Person)

[API-Authenticate](#API-Authenticate)

## Descrição
Está é uma API RestFull que será utilizada em uma locadora de veículos chamada "Renpass.uol". Nela será feita os cadastros dos veículos da empresa e o cadastro dos clientes.

## Funcionalidades

**Funcionalidade 1:** Realizar cadastro dos veículos:

- É necessário o cadastro de no mínimo 1 (um) acessório e não é possível repetir o mesmo acessório para o mesmo veículo.
- O ano do veículo não pode ser menor que 1950 e também não pode ser maior que 2022.
- O número de passageiros suportados em cada veículo não pode ser menor que 1 (um).
- Descrição completa como modelo, tipo, marca, total, limite, deslocamento e compensações.
- É obrigatório preencher todos os campos.

**Funcionalidade 2:** Listar todos os carros cadrastrados: 

- É possível realizar uma busca por todos os veículos cadastrados.
- É possível filtrar a busca com cor, modelo, type e etc.
- É possível realizar a busca pelo ID de cada veículo.

**Funcionalidade 3:** Atualizar dados de veículos cadastrados:

- É possível realizar a alteração dos campos de dados dos veículos já cadastrados buscando pelo ID do veículo.

**Funcionalidade 4:** Excluir veículos cadastrados:

- É possível excluir os dados de cadastro de um veículo cadastrado usado o seu ID.

**Funcionalidade 5:** Cadastro do usuário:

- O usuário deve ter no mínimo 18 anos.
- Deve ter um cpf válido.
- A senha cadastrada deve ter no mínimo 6 dígitos.
- O email deve ser válido.
- É necessário informar se é o usuário que irá conduzir o veículo.
- É obrigatório preencher todos os campos.


**Funcionalidade 6:** Listar todos os usuários cadrastrados:

- É possível realizar uma busca por todos os usuários cadastrados. 

**Funcionalidade 7:** Listar os usuários cadrastrados por ID:

- É possível realizar uma busca por usuários cadastrados pelo ID.

**Funcionalidade 8:** Alterar dados de usuário cadastrados:

- É possível realizar a alteração dos dados dos usuários já cadastrados através do ID.
- Assim como no cadastro o usuário deve ter no mínimo 18 anos.
- Deve ter um cpf válido.
- A senha cadastrada deve ter no mínimo 6 dígitos.
- O email deve ser válido.
- É necessário informar se é o usuário que irá conduzir o veículo.
- Não é obrigatório preencher todos os campos para alteração dos dados.

**Funcionalidade 9:** Excluir usuários cadastrados:

- É possível excluir os dados de cadastro de um usuário cadastrado usado o seu ID.

**Funcionalidade 10:** Autenticação do usuário:

- É solicitado um login (email) e senha. Caso ambos estejam corretos é enviado um token para autenticação e aprovação do login.


## Instalação

No terminal, é necessário clonar o projeto que se encontra no repoitório publico no github:

`git clone https://github.com/Calixto29/Renpass.Uol-Parte1.git`

Instale as dependências:

`npm install ou npm i` 


## Iniciar servidor:

Caso tenha instalado o nodemon: `npm start ou npm run dev `.

Caso não tenha instalado: `node .\src\index.js`


## API-Car

### Cadastrar Carro
POST: ``/api/v1/car``

### Listar todos os veículos cadastrados
GET: `/api/v1/car`

### Listar veículos cadastrados por ID
GET: `/api/v1/car/:id`

### Atualizar veículo cadastrado
PUT: `/api/v1/car/:id`

### Deletar um veículo
DELETE: `/api/v1/car/:id`


## API-Person

### Criar um endpoint para cadastrar um usuário
POST: `/api/v1/person`

## Listar todos usuários cadastradas
GET: `/api/v1/person`

## Listar todos usuários cadastrados por ID
GET: `/api/v1/person/:id`

## atualizar usuários cadastrados por ID
PUT: `/api/v1/person/:id`

## Deletar um usuário cadastrado por ID
DELETE: `/api/v1/person/:id`


## API-Authenticate

### Autenticação com o usuário 
POST: `/api/v1/authenticate`

