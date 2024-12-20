const { pessoas } = require('../database/database');

//listando usuarios
function listar(){
    try{
        if(pessoas.length<=0){
            console.log("Nenhum usuário cadastrado")
        }else{
            console.log("Usuários:")
            console.table(pessoas)
        }
    } catch(error){
        console.error("Erro ao listar aos usuaários", error.message)
    }

    
}

function cadastrar(id,nome,telefone,email){
    const novoUsuario = {id,nome, telefone, email}
    pessoas.push(novoUsuario)
    console.log("usuário cadastrado com sucesso")
}

function editar(id,novoNome,novoTelefone,novoEmail){
    const pessoa = pessoas.find(elemento => elemento.id === id)
    if (pessoa) {
        pessoa.nome = novoNome || pessoa.nome;
        pessoa.telefone = novoTelefone || pessoa.telefone;
        pessoa.email = novoEmail || pessoa.email;
        console.log("Dados atualizados com sucesso")
    }else{
        console.log("Usuário não encontrado")
    }
}

function deletarTodos(){
    pessoas.length = 0;
}
function deletarPorId(id){
    const usuario = pessoas.findIndex( elemento => elemento.id === id)
    if(usuario === -1){
        console.log("Usuário não encontrado")
    }else{
        pessoas.splice(usuario,1)
        console.log("usuário deletado com sucesso")
    }
}

cadastrar(1,"olavo", "84 98888-7777", "olavo@gmail.com")
cadastrar(2,"Victor", "84 99999-7777", "victor@gmail.com")
editar(1, "Fulano 5", "(84)99999-8765", "fulano5@gmail.com")
deletarPorId(2)
listar()
deletarTodos()
listar()