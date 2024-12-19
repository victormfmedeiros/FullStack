const { pessoas } = require('../database/database');

//listando usuarios
function listar(){
    console.log(pessoas)
}

function cadastrar(id,nome,telefone,email){
    const novoUsuario = {id,nome, telefone, email}
    pessoas.push(novoUsuario)
}

function editar(id,novoNome,novoTelefone,novoEmail){
    const pessoa = pessoas.find(elemento => elemento.id === id)
    if (pessoa) {
        pessoa.nome = novoNome || pessoa.nome;
        pessoa.telefone = novoTelefone || pessoa.telefone;
        pessoa.email = novoEmail || pessoa.email;
    }else{
        console.log("Usuário não encontrado")
    }
}

function deletarTodos(){
    pessoas = []
}
function deletarPorId(id){

}

cadastrar(1,"olavo", "84 98888-7777", "olavo@gmail.com")
cadastrar(2,"Victor", "84 99999-7777", "victor@gmail.com")
editar(1, "Fulano 5", "(84)99999-8765", "fulano5@gmail.com")
listar()