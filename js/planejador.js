const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function exibirMenu() {
    const menu = 'MENU PRINCIPAL';
    const opcaoMenu1 = '1- Planejar minha viagem';
    const opcaoMenu2 = '2- Saber mais sobre o Planejador';
    const opcaoMenu3 = '3- Sair';
    console.log(menu + '\n' + opcaoMenu1 + '\n' + opcaoMenu2 + '\n' + opcaoMenu3);
    leitor.question('Digite 1, 2 ou 3 para escolher sua opção: ', (opcaoEscolhidaMenu) => {
        switch (opcaoEscolhidaMenu) {
            case '1':
                planejarViagem();
                break;
            case '2':
                sobrePlanejador();
                break;
            case '3':
                leitor.close();
                break;
            default:
                console.log('Opção inválida. Digite 1, 2 ou 3.');
                exibirMenu()
        }
    })
}

function planejarViagem() {
    const planejar = 'PLANEJAR MINHA VIAGEM';
    const opcaoPlanejar = '1- Inserir dados';
    const opcaoVoltar = '2- Voltar ao menu anterior';
    const opcaoSair = '3- Sair';
    console.log(planejar + '\n' + opcaoPlanejar + '\n' + opcaoVoltar + '\n' + opcaoSair);
    leitor.question('Digite 1, 2 ou 3 para escolher sua opção: ', (opcaoPlanejarEscolhida) => {
        switch (opcaoPlanejarEscolhida){
            case '1':
                guardarDadosInseridos();
                break;
            case '2':
                exibirMenu();
                break;
            case '3':
                leitor.close();
                break;
            default:
                console.log('Opção inválida. Digite 1, 2 ou 3.');
                planejarViagem()
        }

    })  
}

function sobrePlanejador() {
const planejadorInfo  = 'SOBRE O PLANEJADOR' + '\n' + 'O Planejador de Viagem é uma ferramenta que faz parte do website Visite Arraial do Cabo.' + '\n' + 'Após conhecer as experiências apresentadas pela página, e ao demonstrar interesse em visitar a cidade, você pode utilizar esta ferramenta para organizar sua viagem a Arraial do Cabo.' + '\n' + 'Os principais critérios são: a) a quantidade de pessoas; b) se tem crianças inclusas; c) quantidade de dias disponíveis; d) orçamento; e) os tipos de experiências que mais te interessam: praias, natureza, aventura, cultura ou fotografia.' + '\n' + 'Considere que este planejador é baseado no que o site oferece, portanto hospedagem, passagens e alimentação não fazem parte do planejamento desta ferramenta.';
const opcaoVoltar = '1- Voltar ao menu anterior';
const opcaoSair = '2- Sair';
console.log(planejadorInfo + '\n' + opcaoVoltar + '\n' + opcaoSair);
    leitor.question('Digite 1 ou 2 para escolher sua opção: ', (opcaoSobrePlanejador) => {
        switch (opcaoSobrePlanejador) {
            case '1':
                exibirMenu();
                break;
            case '2':
                leitor.close();
                break;
            default:
                console.log('Opção inválida. Digite 1 ou 2.');
                sobrePlanejador()
        }

    })  
}

function guardarDadosInseridos() {
    leitor.question('Quantas pessoas são? ', (quantidadePessoas) => {
        leitor.question('Está acompanhando alguma criança? ', (quantidadeCriancas) => {
            leitor.question('Quantidade de dias: ', (quantidadeDias) => {
                leitor.question('Orçamento disponível: ', (orcamento) => {
                    leitor.question('Quais os seus principais interesses? Digite o número das opções:' + '\n' + '1- Praias' + '\n' + '2- Natureza' + '\n' + '3- Aventura' + '\n' + '4- Cultura' + '\n' + '5- Fotografia ', (interessesEscolhidos) => {
                        //dadosViagem(quantidadePessoas, quantidadeCriancas, quantidadeDias, orcamento, interessesEscolhidos)
                    })
                });
            });
        });    
    });
}

leitor.question('Qual é o seu nome? ', (nome) => {
    console.log('Olá, ', nome)
    console.log('Boas vindas ao Planejador de viagem!');
    
    function perguntaInicial() {
        leitor.question('Gostaria de planejar sua viagem agora? ', (resposta) => {
        if (resposta.toLowerCase() == 'sim') {
	        exibirMenu();
	    } else if (resposta.toLowerCase() != 'sim' && resposta.toLowerCase() != 'não') {
		    console.log('Opção inválida, digite sim ou não.')
		    perguntaInicial()
	    } else {
		    leitor.close()
		}
	})}

    perguntaInicial()    
})

