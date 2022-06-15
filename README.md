# Desafio Final | Compass.Uol

# Renpass.Uol



## Libs e versões
```
@hapi/joi : 17.1.1
@types/swagger-ui-express : 4.1.3"
axios : 0.27.2
bcryptjs : 2.4.3
dotenv : 16.0.1
express : 4.18.1
jsonwebtoken : 8.5.1
moment : 2.29.3
mongoose : 6.3.5
mongoose-paginate-v2 : 1.6.3
swagger-ui-express : 4.4.0

```
## Indice
[Descrição](#Descrição)

[Funcionalidades](#Funcionalidades)

[Instalação](#Instalação)

[API-Car](#Api-Car)

[API-Person](#Api-Person)

[API-Rental](#API-Rental)

[API-Authenticate](#API-Authenticate)

[API-Documentation](#API-Documentation)

## Descrição
Está é uma API RestFull com funções de cadastro de usuários, veículos e locadoras de veículos

## Funcionalidades - Car

**Funcionalidade 1:** Realizar cadastro dos veículos: 

* É necessário o cadastro de no mínimo 1 (um) acessório e não é possível repetir o mesmo acessório para o mesmo veículo.
* O ano do veículo não pode ser menor que 1950 e também não pode ser maior que 2022.
* O número de passageiros suportados em cada veículo não pode ser menor que 1 (um).
* Descrição completa como modelo, tipo, marca, total, limite, deslocamento e compensações.
* É obrigatório preencher todos os campos.

**Funcionalidade 2:** Listar os veículos cadrastrados: 

* É possível realizar uma busca por todos os veículos cadastrados.
* É possível filtrar a busca por cor, modelo, tipo, ano e etc.
* É possível realizar a busca de um único veículo pelo ID individual.

**Funcionalidade 3:** Atualizar dados de veículos cadastrados:

* É possível realizar a alteração dos dados de dados dos veículos já cadastrados buscando pelo ID do mesmo.

**Funcionalidade 4:** Excluir veículos cadastrados:

* É possível excluir os dados de cadastro de um veículo cadastrado usando o seu ID.

## Funcionalidades - Person

**Funcionalidade 1:** Realizar cadastro do usuários:

* O usuário deve ter no mínimo 18 anos.
* Deve ter um CPF válido.
* A senha cadastrada deve ter no mínimo 6 dígitos.
* O email deve ser válido.
* É necessário informar se é o usuário que irá conduzir o veículo.
* É obrigatório preencher todos os campos.


**Funcionalidade 2:** Listar todos os usuários cadrastrados:

* É possível realizar uma busca por todos os usuários cadastrados.
* É possível filtrar a buscar por nome, CPF, Email e etc.
* É possível realizar a busca pelo ID individual de cada usuário.

**Funcionalidade 3:** Alterar dados de usuário cadastrados:

- É possível realizar a alteração dos dados dos usuários já cadastrados através do ID.
- Assim como no cadastro o usuário deve ter no mínimo 18 anos.
- Deve ter um cpf válido.
- A senha cadastrada deve ter no mínimo 6 dígitos.
- O email deve ser válido.
- É necessário informar se é o usuário que irá conduzir o veículo.
- Não é obrigatório preencher todos os campos para alteração dos dados.

**Funcionalidade 4:** Excluir usuários cadastrados:

- É possível excluir os dados de cadastro de um usuário cadastrado usando o seu ID.

## Funcionalidades - Rental

**Funcionalidade 1:** Realizar cadastro de locadora de veículos:

* O a locadora deve ter um nome fantasia.
* Deve ter um CNPJ válido.
* Deve ter uma descrição das suas atividades.
* Deve ter um endereço atualizado.
* É obrigatório informar no cadastro se a empresa é ou não uma filial.


**Funcionalidade 2:** Listar todos as locadoras de veículos:

* É possível realizar uma busca por todos as locadoras cadastradas.
* É possível filtrar a buscar por nome fantasia, CNPJ, CEP e etc.
* É possível realizar a busca pelo ID individual de cada locadora.


**Funcionalidade 3:** Alterar dados de locadoras cadastradas:

* É possível realizar a alteração dos dados dos locadoras já cadastradas através do seu ID individual.
* Assim como no cadastro a locadora deve ter CNPJ válido.
* Deve ter um CNPJ válido.
* Deve ter uma descrição das suas atividades.
* Deve ter um endereço atualizado.
* Informar se a empresa é ou não uma filial.
* Não é obrigatório preencher todos os dados.


**Funcionalidade 4:** Excluir locadoras cadastradas:

* É possível excluir os dados de cadastro de um usuário cadastrado usando o seu ID.


## Funcionalidade -  Token de autorização

**Funcionalidade 1:** Autenticação do usuário :

- É solicitado um login (email) e senha de usuário. Caso ambos estejam corretos é enviado um token para autenticação e aprovação do login.


## Instalação

No terminal, é necessário clonar o projeto que se encontra no repositório publico no github:

No GITBASH digite o seguinte comando:

`git clone https://github.com/Calixto29/Renpass.Uol-Parte1.git`


Instale as dependências no VSCode digitando o comando:

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

### Cadastrar um usuário
POST: `/api/v1/person`

## Listar todos usuários cadastradas
GET: `/api/v1/person`

## Listar todos usuários cadastrados por ID
GET: `/api/v1/person/:id`

## Atualizar usuários cadastrados por ID
PUT: `/api/v1/person/:id`

## Deletar um usuário cadastrado por ID
DELETE: `/api/v1/person/:id`


## API-Rental

### Cadastrar uma locadora
POST: `/api/v1/rental`

## Listar todas as locadoras cadastradas
GET: `/api/v1/rental`

## Listar uma locadora cadastrada por ID
GET: `/api/v1/rental/:id`

## Atualizar dados de locadoras cadastradas por ID
PUT: `/api/v1/rental/:id`

## Deletar uma locadora cadastrada por ID
DELETE: `/api/v1/rental/:id`


## API-Authenticate

### Autenticação com o usuário 
POST: `/api/v1/authenticate`

## API-Documentation
GET: `/api/v1/api-docs`


