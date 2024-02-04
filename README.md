# Cinema App

## Descrição

O Cinema App é um aplicativo desenvolvido em React Native que facilita a compra de ingressos para cinema. Com uma interface intuitiva e amigável, os usuários podem escolher o filme desejado, a sessão preferida e os assentos disponíveis. Além disso, se o usuário tiver a função de administrador, ele pode realizar a validação do ingresso na entrada do cinema por meio de um scanner de QR Code.

## Screenshots

<div style="display:flex;gap:5px">
  <img src="./screenshots/Screenshot_1.png" alt="Screenshot 1" width="300"/>
  <img src="./screenshots/Screenshot_2.png" alt="Screenshot 1" width="300"/>
  <img src="./screenshots/Screenshot_3.png" alt="Screenshot 1" width="300"/>
  <img src="./screenshots/Screenshot_4.png" alt="Screenshot 1" width="300"/>
  <img src="./screenshots/Screenshot_5.png" alt="Screenshot 1" width="300"/>
  <img src="./screenshots/Screenshot_6.png" alt="Screenshot 1" width="300"/>
  <img src="./screenshots/Screenshot_7.png" alt="Screenshot 1" width="300"/>
</div>

## Sumário

1. [Pré requisitos](#pré-requisitos)
2. [Rodando o projeto](#rodando-o-projeto)

3. [Capturas de Tela](#capturas-de-tela)
4. [Vídeo Demonstrativo](#vídeo-demonstrativo)

## Recursos Principais

- **Compra de Ingressos**: Os usuários podem navegar pelos filmes em exibição, escolher a sessão desejada e selecionar os assentos disponíveis para compra.

- **Administração de Sessões**: Os administradores têm acesso a uma interface especial que permite gerenciar as sessões, adicionar novos filmes e configurar horários.

- **Validação de Ingresso**: Administradores podem utilizar a funcionalidade de scanner de QR Code para validar os ingressos na entrada do cinema.

- **Integração com Supabase**: O aplicativo utiliza o Supabase como backend para armazenar informações sobre filmes, sessões e usuários.

- **Pagamentos com Stripe**: A integração com o Stripe permite pagamentos seguros e rápidos para a compra de ingressos.

## Pré-requisitos

Certifique-se de ter o seguinte instalado antes de executar o aplicativo:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Supabase](https://supabase.com)
- [Stripe](https://stripe.com)

## Rodando o Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente:

1. Clone o repositório:

```bash
git clone https://github.com/ArthurLopesMagalhaes/CinemaApp
```

2. Abra o arquivo .env.example e preencha com suas variáves:

```env
SUPABASE_URL=
SUPABASE_KEY=

STRIPE_PUBLISHABLE_KEY=
STRIPE_API_BASE_URL=
```

3. Navegue até o diretório do projeto e rode os comandos:

```
yarn install
```

```
yarn start
```
