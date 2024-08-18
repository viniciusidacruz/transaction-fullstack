# Transaction Fullstack

Bem-vindo ao projeto **Transaction Fullstack**. Este é um sistema completo de gestão de transações financeiras, desenvolvido com tecnologias modernas e otimizadas para uma aplicação robusta e eficiente. Abaixo você encontrará detalhes sobre as tecnologias utilizadas, por que foram escolhidas e as instruções necessárias para configurar e rodar o projeto.

## Tecnologias Utilizadas

### Next.js 14

O **Next.js 14** foi escolhido como base para este projeto devido à sua robustez e flexibilidade. Ele permite renderização híbrida (tanto estática quanto server-side), o que é essencial para criar uma aplicação rápida e escalável. Além disso, o suporte a Server Actions e a nova API de roteamento torna o desenvolvimento mais dinâmico e eficiente.

### Zod

**Zod** é uma biblioteca de validação de esquemas que foi integrada ao projeto para garantir a validação dos dados de forma tipada. Com Zod, conseguimos assegurar que os dados manipulados na aplicação seguem as regras de negócio corretamente, evitando erros e inconsistências.

### React Hook Form

**React Hook Form** é uma biblioteca leve para gerenciamento de formulários em React. Foi escolhida por sua eficiência na manipulação do estado de formulários e validação integrada, especialmente quando combinada com Zod para validação de esquemas. Isso torna o processo de criação e validação de formulários mais simples e menos verboso.

### Prisma

**Prisma** foi selecionado como ORM (Object-Relational Mapper) para facilitar as operações com o banco de dados. Prisma permite uma modelagem de dados intuitiva, migrações automáticas e a geração de código tipado, garantindo que as consultas e mutações no banco de dados sejam seguras e eficientes.

### Server Actions

As **Server Actions** do Next.js 14 são utilizadas para lidar com operações críticas no backend, como a criação, atualização e deleção de transações, garantindo que a lógica de negócio seja executada de forma segura e performática no servidor.

### Date-fns

**Date-fns** é uma biblioteca de manipulação de datas, utilizada por sua simplicidade e poder de manipulação de datas. Ela fornece uma API completa para lidar com datas de maneira funcional, o que facilita o desenvolvimento de funcionalidades que envolvem manipulação de tempo, como registros de transações e históricos.

### React CSV

**React CSV** foi utilizado para permitir a exportação de dados em formato CSV diretamente da interface do usuário. Isso é essencial para gerar relatórios e fazer download de dados de transações, oferecendo uma funcionalidade prática para os usuários finais.

### Styled-Components

**Styled-Components** foi escolhido para a estilização dos componentes da aplicação. Com essa biblioteca, conseguimos aplicar estilos de maneira modular e dinâmica, aproveitando o poder do CSS-in-JS, o que facilita a manutenção e a escalabilidade do código.

### Tailwind CSS

O **Tailwind CSS** é utilizado para estilizações rápidas e utilitárias, combinando com o uso de Styled-Components para criar uma interface de usuário moderna e responsiva. Tailwind foi escolhido pela sua eficiência e por facilitar o desenvolvimento com classes pré-definidas que aceleram o processo de estilização.

### React-Spring

**React-Spring** foi integrado para adicionar animações fluidas e interativas à aplicação, melhorando a experiência do usuário com transições suaves e feedbacks visuais durante as interações.

### Zustand

**Zustand** é utilizado para gerenciar o estado global da aplicação de maneira simples e performática. Ele oferece uma API minimalista e direta, que se integra bem com a arquitetura do React, garantindo que o estado da aplicação seja facilmente gerenciável e persistido.

## Requisitos para Rodar a Aplicação

### Requisitos de Sistema

- **Node.js**: >= 18.20.3
- **NPM**: >= 10.7.0

### Instruções de Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/viniciusidacruz/transaction-fullstack.git
   cd transaction-fullstack
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configuração do banco de dados:**
   Configure suas variáveis de ambiente e execute as migrações do Prisma para preparar o banco de dados:

   ```bash
    npx prisma migrate dev
   ```

4. **Rodando a aplicação:**
   Para rodar a aplicação em modo de desenvolvimento, utilize o seguinte comando:
   ```bash
    npm run dev
   ```

### Regras para rodar a aplicação

- Yarn e Bun não são suportados: Apenas o NPM é permitido para gerenciar pacotes e rodar scripts.
- Node.js: Deve estar na versão >= 18.20.3.
- NPM: Deve estar na versão >= 10.7.0.

Essas regras são definidas no arquivo package.json para garantir a consistência e evitar problemas de compatibilidade.

### Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

### Licença

Este projeto é licenciado sob a licença MIT
