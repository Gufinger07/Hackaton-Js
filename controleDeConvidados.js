const convidados = [ 
	{nome: 'Felipe', idade: 29, genero: 'masculino'}, 
	{nome: 'Allana', idade: 22, genero: 'feminino'}, 
	{nome: 'Thiago', idade: 33, genero: 'masculino'}, 
	{nome: 'Carlos', idade: 16, genero: 'masculino'}, 
	{nome: 'Aline', idade: 15, genero: 'feminino'} 
]


var convidadosFiltrados = convidados.filter((pessoa)=>{return pessoa.idade >18}).sort()
convidadosFiltrados.sort((pessoa1,pessoa2)=>{
    if(pessoa1.nome > pessoa2.nome) {
        return 1
    }
    else {
        return -1
    }
});
console.log(convidadosFiltrados)

