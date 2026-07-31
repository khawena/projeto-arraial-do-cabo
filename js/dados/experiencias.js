const experiencias = [ 
{nome: 'Trilha',
tipo: 'natureza',
categoria: '2',
valor: 0,
duracao: 180,
horarioFuncionamento: '07:00 a 18:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'restricao',
quantidadePessoas: ['individual, dupla, grupo']
},

{nome: 'Duna',
tipo: 'natureza',
categoria: '2',
valor: 0,
duracao: 120,
horarioFuncionamento: '06:00 a 18:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'sim',
quantidadePessoas: ['individual, dupla, grupo']
},

{nome: 'Lagoa Vermelha',
tipo: 'natureza',
categoria: '2',
valor: 0,
duracao: 180,
horarioFuncionamento: '06:00 a 18:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'sim',
quantidadePessoas: ['individual, dupla, grupo']
},

{nome: 'Gruta do amor',
tipo: 'natureza',
categoria: '2',
valor: 50,
duracao: 60,
horarioFuncionamento: '06:00 a 18:00' ,
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
observacao: 'Depende da maré baixa',
permiteCriancas: 'restricao',
quantidadePessoas: ['individual, dupla, grupoPequeno']
},

{nome: 'Pôr do sol',
tipo: 'natureza',
categoria: '2',
valor: 0,
duracao: 60,
horarioFuncionamento: '17:00 a 18:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'sim',
quantidadePessoas: ['individual, dupla, grupo']
},

{nome:'Paramotor',
tipo: 'aventura',
categoria: '3',
valor: 500,
duracao: 60,
horarioFuncionamento: '08:00 a 17:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'restricao',
quantidadePessoas: ['individual']
},

{nome: 'Quadriciclo, buggy',
tipo: 'aventura',
categoria: '3',
valor: 125,
duracao: 120,
horarioFuncionamento: '09:00 a 16:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'restricao',
quantidadePessoas: ['individual, dupla, grupoPequeno']
},

{nome: 'Barco',
tipo: 'aventura',
categoria: '3',
valor: 130,
duracao: 240,
horarioFuncionamento: ['09:00', '10:00'],
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'restricao',
quantidadePessoas: ['individual, dupla, grupo']
},

{nome: 'Baleias',
tipo: 'aventura',
categoria: '3',
valor: 350,
duracao: 300,
horarioFuncionamento: ['07:00', '08:00'],
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
observacao: 'Disponível de junho a setembro',
permiteCriancas: 'restricao',
quantidadePessoas: ['individual, dupla, grupo']

},

{nome: 'Mergulho',
tipo: 'aventura',
categoria: '3',
valor: 450,
duracao: 240,
horarioFuncionamento: ['08:00','09:00'],
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'restricao',
quantidadePessoas: ['individual, dupla, grupo']
},

{nome: 'Igreja',
tipo: 'cultura',
categoria: '4',
valor: 0,
duracao: 30,
horarioFuncionamento: '09:00 a 17:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'sim',
quantidadePessoas: ['individual, dupla, grupoPequeno']
},

{nome: 'Museu',
tipo: 'cultura',
categoria: '4',
valor: 10,
duracao: 60,
horarioFuncionamento: '14:00 a 17:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'sim',
quantidadePessoas: ['individual, dupla, grupoPequeno']
},

{nome: 'Praça',
tipo: 'cultura',
categoria: '4',
valor: 0,
duracao: 180,
horarioFuncionamento: '16:00 a 01:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'sim',
quantidadePessoas: ['individual, dupla, grupo']
},

{nome: 'Feira',
tipo: 'cultura',
categoria: '4',
valor: 0,
duracao: 120,
horarioFuncionamento: '08:00 a 17:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'sim',
quantidadePessoas: ['individual, dupla, grupo']
},

{nome: 'Escadaria',
tipo: 'fotografia',
categoria: '5',
valor: 75,
duracao: 120,
horarioFuncionamento: '06:00 a 18:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'restricao',
quantidadePessoas: ['individual, dupla, grupo']
},

{nome: 'Mirante',
tipo: 'fotografia',
categoria: 5,
valor: 20,
duracao: 120,
horarioFuncionamento: '06:00 a 18:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'sim',
quantidadePessoas: ['individual, dupla, grupo']
},

{nome: 'Cotidiano',
tipo: 'fotografia',
categoria: '5',
valor: 0,
duracao: 120,
horarioFuncionamento: '06:00 a 21:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'sim',
quantidadePessoas: ['individual, dupla, grupo']
},

{nome: 'Paisagem',
tipo: 'fotografia',
categoria: '5',
valor: 50,
duracao: 240,
horarioFuncionamento: '07:00 a 18:00',
diasFuncionamento: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
permiteCriancas: 'sim',
quantidadePessoas: ['individual, dupla, grupo']
},
]

module.exports = { experiencias }