const readline = require('readline');

const { praias } = require('./dados/praias');
const { experiencias } = require('./dados/experiencias');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function exibirMenu() {
    const menu = 'MENU PRINCIPAL';
    const opcaoMenu1 = '1- Planejar minha viagem';
    const opcaoMenu2 = '2- Saber mais sobre o Planejador';
    const opcaoMenu3 = '3- Sair';
    console.log(`
        ${menu}
        ${opcaoMenu1}
        ${opcaoMenu2}
        ${opcaoMenu3}`);
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
    console.log(`
        ${planejar}
        ${opcaoPlanejar}
        ${opcaoVoltar}
        ${opcaoSair}`);
    leitor.question('Digite 1, 2 ou 3 para escolher sua opção: ', (opcaoPlanejarEscolhida) => {
        switch (opcaoPlanejarEscolhida){
            case '1':
                coletarDados();
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
const planejadorInfo  = `SOBRE O PLANEJADOR
O Planejador de Viagem é uma ferramenta que faz parte do website Visite Arraial do Cabo.
Após conhecer as experiências apresentadas pela página, e ao demonstrar interesse em visitar a cidade,
você pode utilizar esta ferramenta para organizar sua viagem a Arraial do Cabo.
Os principais critérios são: 
a) a quantidade de pessoas; 
b) quantas crianças estão inclusas; 
c) quantidade de dias disponíveis; 
d) orçamento; 
e) os tipos de experiências que mais te interessam: praias, natureza, aventura, cultura ou fotografia.
Considere que este planejador é baseado no que o site oferece, portanto hospedagem, passagens e alimentação não fazem parte do planejamento desta ferramenta`;
const opcaoVoltar = '1- Voltar ao menu anterior';
const opcaoSair = '2- Sair';
console.log(`${planejadorInfo}
    ${opcaoVoltar}
    ${opcaoSair}`);
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

function dadosViagem(quantidadePessoas, quantidadeCriancas, quantidadeDias, orcamento, interessesEscolhidos) {
    const numeroInteresses = interessesEscolhidos.split(',');

    const tudoEmArraial = praias.concat(experiencias);

   const itensPorInteresse = tudoEmArraial.filter(item => numeroInteresses.includes(item.categoria));

   let itensPorCriancas = itensPorInteresse
    if (quantidadeCriancas > 0) {
        itensPorCriancas = itensPorInteresse.filter(item => item.permiteCriancas == 'sim' || item.permiteCriancas == 'restricao');
    }

}

function coletarDados() {
    leitor.question('Quantas pessoas são? ', (quantidadePessoas) => {
        leitor.question('Quantas crianças são? ', (quantidadeCriancas) => {
            leitor.question('Quantos dias? ', (quantidadeDias) => {
                leitor.question('Qual o orçamento disponível? ', (orcamento) => {
                    leitor.question(`Quais os seus principais interesses? 
                        Digite o número das opções separados por vírgula:
                        1- Praias
                        2- Natureza
                        3- Aventura
                        4- Cultura
                        5- Fotografia
                        6-Todas as opções:`, (interessesEscolhidos) => {
                        console.log(`
                            CONFIRA OS DADOS INSERIDOS:
                            Sua viagem para Arraial do Cabo será com o total de ${quantidadePessoas} pessoas e ${quantidadeCriancas} crianças.
                            Serão ${quantidadeDias} dias curtindo as experiências de ${interessesEscolhidos}, 
                            com o orçamento no valor de R$ ${orcamento}.`);
                        leitor.question('Digite 1 para confirmar os dados inseridos ou 2 para corrigir os dados.', (confirmacaoDados) => {
                            if(confirmacaoDados === '1') {
                                dadosViagem(quantidadePessoas, quantidadeCriancas, quantidadeDias, orcamento, interessesEscolhidos);
                                console.log('O planejador de Viagem recomenda:');
                                leitor.close()
                            } else {
                                coletarDados();
                            };
                        });
                    });
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
        if (resposta.toLowerCase() === 'sim') {
	        exibirMenu();
	    } else if (resposta.toLowerCase() !== 'sim' && resposta.toLowerCase() !== 'não') {
		    console.log('Opção inválida, digite sim ou não.')
		    perguntaInicial()
	    } else {
		    leitor.close()
		}
	})}

    perguntaInicial()    
})