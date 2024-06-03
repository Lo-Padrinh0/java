// EXERCICIO 1
// Uma função onde possa está habilitando a pessoa de digitar um texto, e logo após utilizar as funções de replace e replaceAll
// INPUT = Nada
// OUTPUT = TextArea Texto, input do termo removido, input do termo adicionado

var corpo = document.querySelector("body");

function replaceEx1(){
    corpo.innerHTML += `
    <div style="display : flex" id="ex1">
        <textarea cols="15" id="textDigitado"></textarea>
        <input type="text" id="termoRemover" placeholder="O termo que deseja remover">
        <input type="text" id="termoAdicionado" placeholder="O termo que deseja adicionar">
        <button type="button" onclick"substituir()" id="substituir">SUBSTITUIR</button>
        <button type="button" onclick"substituirTudo()" id="substituirTudo">SUBSTITUIR TUDO</button>
    </div>
    `
}

// substituir e substituirTudo = função para atualizar
function substituir(){
    let textDigitado = document.querySelector("#textDigitado").value;
    let termoRemover = document.querySelector("#termoRemover").value;
    let termoAdicionado = document.querySelector("#termoAdicionado").value;

    let textoAtualizado = textDigitado.replace(termoRemover,termoAdicionado);

    document.querySelector("#textoDigitado").value = textoAtualizado;
}

function substituirTudo(){

}

replaceEx1();

// EXERCICIO 2
// Função para verificar se o usuario é adm
// INPUT : nome, senha
// OUTPUT : Mensagem de verificação no controle
function promiseEx2(){
    new Promise((resolve,reject) => {
        let usuarioSalvo = "ADM";
        let senhaSalvo = "ADM";

        let usuario = prompt("Digite o seu usuário");
        let senha = prompt("Digite a sua senha");

        if(usuario == usuarioSalvo & senha == senhasalvo){
            alert("Usuário foi identificado! Pode entrar");
            resolve()
        }else{
            alert("Usuário ou senha incorretos, Digite novamente");
            reject("Usuário ou senha não batem com esperado!")
        }
    })
}
// EXERCICIO 3
// Input de pesquisa para buscar um elemento dentro do array, caso exista imprimir na tela a mensagem que foi encontrado, caso contrário, imprimir na tela que o elemento não existe na listagem
// INPUT : elemento
// OUTPUT : Mensagem da verificação
corpo.innerHTML += `
    <input id="pesquisar" placeholder="Digite um termo a ser pesquisado" onfucusout="pesquisarEx()" type="text">
`
function pesquisarEx3(){
    let listaElementos = ["God Of War","Computador","Vingadores"]

    let pesquisa = document.querySelector("#pesquisa").value

    let Achou = listaElementos.includes(pesquisa)

    if(Achou == true){
        alert("Elemento encontrado!")
    }else{
        alert("Elemento não encontrado")
    }
}