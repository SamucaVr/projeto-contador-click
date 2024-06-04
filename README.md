# Contador de Interações do Mouse

Este projeto é uma aplicação web simples que registra e exibe o número de interações do usuário com diferentes botões do mouse (clique esquerdo, clique direito, clique central) e ações de scroll (rolagem). A contagem é atualizada em tempo real e pode ser redefinida com o clique de um botão.

## Funcionalidades

1. Contagem de Cliques:

- Clique Esquerdo
- Clique Direito
- Clique Central (botão do meio)


2. Contagem de Scroll:

- Contagem de rolagem do mouse

3. Resetar Contagens:

- Reseta todas as contagens de cliques e scrolls para zero.

## Como Funciona

1. Captura de Eventos do Mouse:

- `mousedown`: Detecta qual botão do mouse foi clicado (esquerdo, direito ou central) e incrementa o respectivo contador.
- `wheel`: Detecta a ação de rolagem e incrementa o contador de scroll.

2. Atualização dos Contadores:

- Os contadores são atualizados dinamicamente e exibem o número total de cliques ou rolagens realizadas.

3. Resetar Contadores:

- A função `resetar` redefine todos os contadores para zero e limpa o texto exibido.

## Tecnologias Ultilizadas

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Como Executar

1. Clone o repositório para o seu ambiente local ou acesse esse [link](https://projeto-contador-click.vercel.app/).
2. Abra o arquivo index.html em um navegador web.
3. Interaja com a área designada para cliques e rolagem.
4. Utilize o botão de reset para redefinir as contagens.
