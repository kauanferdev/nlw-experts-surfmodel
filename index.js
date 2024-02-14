const perguntas = [
    {
      pergunta: "Qual é o nome da onda mais famosa do Havaí?",
      respostas: [
        "Pipeline",
        "Teahupo'o",
        "Jaws",
      ],
      correta: 0,
    },
    {
      pergunta: "Como é o nome da manobra aérea com   rotação completa?",
      respostas: [
        "Alley-up",
        "Floater",
        "Full-Rotation",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é a técnica de surf onde o surfista 'corta' a onda na diagonal?",
      respostas: [
        "Cutback",
        "Floater",
        "Snap",
      ],
      correta: 0,
    },
    {
      pergunta: "Como é o nome do pico da maior onda do mundo?",
      respostas: [
        "Nazaré, Portugal",
        "Pipeline, Havaí",
        "Teahupoo, Taiti",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a medida padrão de uma prancha de longboard?",
      respostas: [
        "Entre 9' e 10'",
        "Entre 6' e 7'",
        "Entre 5' e 6'",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a modalidade de surf que utiliza uma prancha pequena e leve?",
      respostas: [
        "Shortboard",
        "Longboard",
        "Gun",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é 'tubo' no surf?",
      respostas: [
        "Uma manobra aérea",
        "Uma onda muito grande",
        "Uma onda oca que forma um cilindro",
      ],
      correta: 2,
    },
    {
      pergunta: "Quem é considerado o 'Rei de Saquarema'?",
      respostas: [
        "Ítalo Ferreira",
        "Samuel Pupo",
        "Filipe Toledo",
      ],
      correta: 2,
    },
    {
      pergunta: "Quem é o maior campeão da WSL?",
      respostas: [
        "Kelly Slater",
        "Gabriel Medina",
        "Filipe Toledo",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é um 'wipeout'?",
      respostas: [
        "Uma manobra radical",
        "Uma competição entre surfistas",
        "Uma queda violenta de um surfista",
      ],
      correta: 2,
    },
  ];
  
  //criação da variavel id=quiz div criada no HTML
  const quiz = document.querySelector('#quiz')
  //criação da variavel template criado no HTML
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  //loop ou laço de repetição
  //para cada item da array perguntas, ele vai fazer o que foi solicitado dentro do escopo
  for(const item of perguntas) {
  
  //criação de clone de nós(node) content é o conteudo dentro
  //do template nesse caso 
    const quizItem = template.content.cloneNode(true)
  
  //variavel puxando informação do h3 no html que tras o conteudo em texto contido dentro desse h3 que vai passar a ser = ao item criado na const perguntas e puxar a area de perguntas
    quizItem.querySelector('h3').textContent = item.pergunta 
  
  //para cada item da array resposta, que esta dentro da array item, ele vai fazer o que foi solicitado dentro do escopo
    for(let resposta of item.respostas) {
  
  //variavel que vai clonar o dt do HTML, mais especificamente o dl e o dt
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
  
  //a constante criada pega o conteudo de texto criado no span, criado no HTML igualando ele a resposta
      dt.querySelector('span').textContent = resposta
      
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
       
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  //a variavel quizItem criada mais em cima adiciona o dt criado dentro do dl no HTML
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  //aqui removemos o dl e o dt onde ficava armazenado o texto Resposta A fazendo com o somente o escopo do HTML faça o trabalho de adicionar todo o conteudo 
    quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela (append: adiciona)
    quiz.appendChild(quizItem)
  }