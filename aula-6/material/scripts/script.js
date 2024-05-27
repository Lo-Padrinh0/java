//var clienteNome = "leo";
//var clienteConta = i;
//var clienteSaldo = 400;
//var clientePagamentos = ["pix","crédito"];
//var clienteCpf = 999999;
//var clienteRg = 888888;

//var cliente = ["nome","conta","pagamento"]
// POO (Programação Orientada a Obejto)
// class = é um molde de um Objeto
class Cliente {
    //atributo / propriedade = são caracteristicas do objeto
    nome;
    conta;
    saldo = 0;
    pagamentos;
    cpf;
    rg;
    dataDeNascimento;
    //metodo = metodo é uma ação feita pelo objeto
    sacar(valor){
        this.saldo -= valor;
        //return = retorna um valor assim que o metodo for chamado
        return `O valor de R$ ${valor} foi sacado com sucesso!`
    }
    depositar(valor){
        this.saldo -= valor;
        return `O valor de R$ ${valor} foi depositado com sucesso!`
    }
}
//new ClassNome = um novo objeto baseado pelo molde, o class
var cliente1 = new Cliente;
cliente1.nome = "Leo";
cliente1.conta = 1;
cliente1.pagamentos = 0;
cliente1.cpf = 88888;
cliente1.rg = 9999999;
cliente1.dataDeNascimento = "13/04/1975";


var cliente2 = new Cliente;