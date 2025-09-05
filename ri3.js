class Cliente {
    #cpf;
    constructor(nome, cpf, endereco) {
        this.nome = nome;   
        this.cpf = cpf;
        this.telefones = new Set();
        this.endereco = endereco;
    }

    detalheCliente() {
        return `Nome: ${this.nome}, CPF: ${this.cpf}, Endereço: ${this.endereco.enderecoCompleto()}, Telefones: ${[...this.telefones].map(t => `${t.ddd}-${t.numero}`).join(', ')}`
    }

    cpf(novoCpf) { this.#cpf = novoCpf }
    get pegarCpf() { return this.#cpf }


get nomeCliente() { return this.nome.toUpperCase() }
get nomeMinusculo() { return this.nome.toLowerCase() }  
get enderecoCliente() { return this.endereco.toUpperCase() }
get enderecoMinusculo() { return this.endereco.toLowerCase() }


}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    telefoneCompleto() {
        return `(${this.ddd}) ${this.numero}`;
    }

}
    class Endereço { 
        constructor(cidade,estado,rua,numero){
            this.cidade=cidade
            this.estado=estado
            this.rua=rua
            this.numero=numero
        }

        enderecoCompleto(){
            return `Cidade: ${this.cidade}, Estado: ${this.estado}, Rua: ${this.rua}, Número: ${this.numero}`
        }


      }

      class Empresa{
        #cnpj
        constructor(razaoSocial, nomeFantasia, cnpj, endereco){   
            this.razaoSocial=razaoSocial;
            this.nomeFantasia=nomeFantasia;
            this.cnpj=cnpj;
            this.endereco=endereco;
            this.clientes=new Set();
            this.telefones=new Set();
            
        }     
        cnpj(novoCnpj){ this.#cnpj=novoCnpj }
           get pegarCnpj(){ return this.#cnpj }

        get maisculaEmpresa(){ return this.nomeFantasia.toUpperCase() }
        get minusculaEmpresa(){ return this.nomeFantasia.toLowerCase() }
        get razaoSocialEmpresa(){ return this.razaoSocial.toUpperCase() }
        get razaoSocialMinuscula(){ return this.razaoSocial.toLowerCase() }

detalhesEmpresa(){
    return `Razão Social: ${this.razaoSocial}
Nome Fantasia: ${this.nomeFantasia}
----------------------------
Clientes:
${[...this.clientes].map(c => c.detalheCliente()).join('\n\n')}
`
}

}
    let enderecoEmpresa=new Endereço("São José dos Campos","SP","Avenida Cesare Monsueto Giulio Lattes",1350)

    let telefones = [new Telefone("12","991884576"), new Telefone("12","981464678")]

    let cliente = []
  
    let empresa =new Empresa("Infinity Academy 3D","IA3D","989898989",enderecoEmpresa )
        telefones.forEach(tel => empresa.telefones.add(tel));
        cliente.forEach(cli => empresa.cliente.add(cli));
       
let enderecoVivian = new Endereço("Bahia", "Salvador", "Rua dos morangos", 796);
let Vivian = new Cliente('Vivian', '00019-11', enderecoVivian);
let telefone01 = new Telefone("25", "667788990");
let telefone02 = new Telefone("21", "97777755");
Vivian.telefones.add(telefone01);
Vivian.telefones.add(telefone02);

let enderecoPietra = new Endereço("Tokyo", "JP", "Rua dos BTS", 908);   
let Pietra = new Cliente('Pietra', '25699999-01', enderecoPietra);
let telefone03 = new Telefone("12", "919999678");
let telefone04 = new Telefone("10", "955556789");
Vivian.telefones.add(telefone03);
Vivian.telefones.add(telefone04);

let enderecoIvo = new Endereço("Gurupa", "PA", "Rua da cachaça", 999);
let Ivo = new Cliente('Ivo', '30808082-88', enderecoIvo);    
let telefone05 = new Telefone("77", "343434343");
let telefone06 = new Telefone("99", "616161616");
Ivo.telefones.add(telefone05);
Ivo.telefones.add(telefone06);

let enderecoGraca  = new Endereço("Mararu", "AM", "Rua dos peixe", 345);
let Graca  = new Cliente('Graca', '4444445-77', enderecoGraca );           
let telefone07 = new Telefone("88", "956666601");
let telefone08 = new Telefone("99", "966666623");
Graca .telefones.add(telefone07);
Graca .telefones.add(telefone08);

let enderecoPitter = new Endereço("São Paulo", "SP", "Rua dos guri", 100);
let Pitter = new Cliente('Pitter', '55666662-21', enderecoPitter);
let telefone09 = new Telefone("31", "978988888");
let telefone10 = new Telefone("31", "989111111");
Pitter.telefones.add(telefone09);
Pitter.telefones.add(telefone10);

empresa.clientes.add(Vivian);
empresa.clientes.add(Pietra);
empresa.clientes.add(Pitter);
empresa.clientes.add(Graca);
empresa.clientes.add(Ivo);

console.log(empresa.detalhesEmpresa());