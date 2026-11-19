# Entregável 6 - Consumo de API Pública

App React que consome a PokeAPI, com estados de loading, erro, sucesso e "não encontrado", estilizado com Tailwind CSS.

## Funcionalidades

- Função assíncrona com async/await chamada dentro de um useEffect (Parte 1)
- Formulário de busca com useState e tratamento dos estados Loading, Error e Success (Parte 2)
- Dados exibidos em Card com Tailwind (Parte 2)
- Tela amigável para "não encontrado" (404) com botão Limpar (Parte 3)

## Como rodar

    npm install
    npm run dev

## Reflexão

**Por que o useEffect é o local ideal para chamadas de API? Como o try/catch e o response.ok nos ajudam a lidar com erros de rede e erros HTTP?**

Chamar uma API é um efeito colateral: acontece fora do React e não deve ser feito durante a renderização, que precisa ser pura. O useEffect roda depois que o componente é renderizado e permite controlar quando a chamada acontece por meio do array de dependências. Com [], por exemplo, a busca roda só uma vez, quando o componente aparece. Sem o useEffect, a chamada ficaria no corpo do componente e seria repetida a cada renderização, gerando requisições demais e até um loop infinito, pois atualizar o estado provoca nova renderização. Quando a busca depende de uma ação do usuário, como o envio de um formulário, o certo é chamar a API direto na função do evento.

O fetch só rejeita a Promise quando há falha de rede (sem internet, servidor fora do ar). Nesse caso o try/catch captura o erro e podemos mostrar uma mensagem. Já erros HTTP, como 404 e 500, não fazem o fetch lançar erro: a resposta chega normalmente. Por isso verificamos response.ok (ou o status) e, se for falso, tratamos o caso, lançando um Error para o catch ou mostrando uma tela de "não encontrado". Assim a interface fica resiliente e informa o usuário em cada situação.