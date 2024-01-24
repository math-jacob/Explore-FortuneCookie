// Variáveis
const fortuneCookie = document.querySelector('#fortune-cookie')
const button = document.querySelector("button")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const message = document.querySelector(".message-container p")

const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  "Sem o fogo do entusiasmo, não há o calor da vitória.",
  "O riso é a menor distância entre duas pessoas.",
  "Amizade e Amor são coisas que se unem num piscar de olhos.",
  "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã",
  "A sorte favorece a mente bem preparada.",
  "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.",
  "Quem olha para fora sonha; quem olha para dentro acorda.",
  "Se você se sente só é porque construiu muros ao invés de pontes.",
  "Você é do tamanho do seu sonho.",
  "O conhecimento é a única virtude e a ignorância é o único vício.",
  "A maior barreira para o sucesso é o medo do fracasso.",
  "Muitas das grandes realizações do mundo foram feitas por pessoas cansadas e desanimadas que continuaram o seu trabalho.",
  "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.",
  "A inspiração vem dos outros. A motivação vem de dentro de nós.",
  "A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!",
  "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..",
  "Realize o óbvio, pense no improvável e conquiste o impossível.",
  "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
]

// Eventos
fortuneCookie.addEventListener("click", handleFortuneCookie)
button.addEventListener("click", handleButtonPressed)
document.addEventListener("keydown", handleEnterPressed)

// Funções
function handleFortuneCookie() {
  const randomIndex = Math.round(Math.random() * (phrases.length -1))

  message.innerText = phrases[randomIndex]
  toggleScreen()
}

function handleButtonPressed() {
  toggleScreen()
}

function handleEnterPressed(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    toggleScreen()
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}