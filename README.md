# cubo-tickets-api

> Uma api para gerenciamento de tickets e menssagens do ticket


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão 20.9.0 ou superior do `<NodeJS>`
- Você instalou a versão 2.39 ou superior do `<Git>`
- Você tem uma máquina `<Windows / Linux / Mac>`.

## 🚀 Instalando

Para instalar o CuboTickets, faça isso:

Linux, macOS e Windows:

## 1. Clone o projeto do GitHub:

```
<git clone https://github.com/eduoop/cubo-tickets.git>
```

## 2. Entre na pasta do projeto:

```
<cd cubo-tickets>
```

## 3. Instale as dependências usando o yarn ou npm:

```
<yarn ou npm i>
```

### 4. Crie um arquivo `.env`:

```
Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

PORT=3333
DATABASE_URL="file:./dev.db"
```

### 5. Rode as migrações:

```
<npx prisma migrate dev --name "add_initial_tables">
```

## ☕ Usando

```
Para rodar o projeto, abra um terminal na pasta do projeto e rode-o usando: <yarn start:dev ou npm run start:dev>
```

## Tecnologias Utilizadas

- **Nest.js** (v10)
- **Prisma** (v5.20)
- **SQLite** (v3.46)

## 🤝 Criador

Feito Por:

<table>
  <tr>
    <td align="center">
      <a href="#" title="defina o titulo do link">
        <img src="https://avatars.githubusercontent.com/u/85969484?s=400&u=b0e89e575a7cb91fc9f8a69e126a9d7587aa9478&v=4" width="100px;" alt="Foto do Eduardo Meneses no GitHub"/><br>
        <sub>
          <b>Eduardo Meneses</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.
