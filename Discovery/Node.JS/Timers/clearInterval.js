// clearInterval irá cancelar um setInterval registrado 

const timeOut = 10
const checking = () => console.log('Checking!')

let interval = setTimeout(checking, timeOut)

setTimeout(() => clearInterval(interval), 4000)
