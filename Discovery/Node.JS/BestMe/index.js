const questions = [
  "Qual é o seu Nome?",
  "O que aprendi hoje ?",
  "O que me deixou aborrecido?",
  "O que eu poderia fazer pra melhorar?",
  "O que me deixou feliz hoje ",
]

const ask = ( index = 0) => {
  process.stdout.write("\n\n" + questions[index] + " R: ")
}

ask()

const answers = []
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if(answers.length < questions.length) {
    ask(answers.length)
  }
  else {
    process.exit()
  }
  
})

process.on('exit', () => {
  console.log(`
    Bacana ${answers[0]} !

    O que você aprendeu hoje:
    ${answers[1]}

    O que te deixou aborrecido:
    ${answers[2]}

    O que você poderia fazer pra melhorar:
    ${answers[3]}

    O que te deixou feliz hoje:
    ${answers[4]}

    Volte todos os dias !!
  `)

})