<h1 align="center"> Pass.in </h1>

<p align="center">
  <img alt="ExpertNotes" src="https://github.com/BrenoPorfirio/pass.in/assets/112186428/fae87950-f632-4990-91a5-e8a346318a49" width="100%">

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**. 

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poser visualizar a lista de participantes; 
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;

## Documentação da API (Swagger)

Para documentação da API, acesse o link: https://nlw-unite-nodejs.onrender.com/docs

## Banco de dados

Nessa aplicação vamos utilizar banco de dados relacional (SQL). Para ambiente de desenvolvimento seguiremos com o SQLite pela facilidade do ambiente.


Siga abaixo os seguinte passos para execução do código:

1. Clone o repositório utilizando:

```bash
  git clone https://github.com/BrenoPorfirio/pass.in.git
```

2. Agora, vá para o diretório na sua IDE utilizando:

```bash
  cd server-node
```

3. Instale todas as dependências necessárias utilizando:

```bash
  npm install
```

4. Execute o comando abaixo para rodar uma migrate:

```bash
  npm run db:migrate
```

5. Execute o comando abaixo para rodar o studio (prisma):

```bash
  npm run db:studio
```

6. Agora, execute o comando para rodar o projeto:

```bash
  npm run start
```

Por fim, na sua barra de endereço caso queira consultar a documentação do projeto use:
```bash
  http://localhost/3333/docs
```
