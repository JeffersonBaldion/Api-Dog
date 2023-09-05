var palabras = [{'uno': "hello, bye, salut, ciao"}, {'uno': "uno, dos, tres, cuatro"}]
var filtro = palabras.filter(temp => {return (temp.uno.includes('hello'))})

console.log(filtro)