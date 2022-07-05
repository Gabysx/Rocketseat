function transform(log) {
  const celsius = log.toUpperCase().includes('C')
  const fah = log.toUpperCase().includes('F')

  if (!celsius && !fah){
    throw new Error('Grau inválido!!')
  }

}

try {
  transform('30F')
  transform('30j')
} catch (error) {
  console.log(error.message)
}
