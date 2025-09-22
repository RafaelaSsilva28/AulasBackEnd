//USANDO SWITCH CASE
let diaSemana = 'sexta';

switch (diaSemana){
    case 'segunda':     //MESMA COISA DE if(diaSemana == "segunda")
        console.log('Hoje é dia de SENAI');
        break;    //UTILIZADO PARA NÃO ENTRAR NOS OUTROS COMANDO
        case 'terça':         //MESMA COISA DE else if (diaSemana == 'terça)
            console.log('Hoje é dia de SENAI');
            break;
        case 'quarta':    //MESMA COISA DE else if (diaSemana == "quarta" || diaSemana == "quinta" || diaSemana == "sexta")
        case 'quinta':
        case 'sexta':
            console.log('Hoje é dia de aula no SESI');
            break;
        default:         //MESMA COISA DO NOSSO else
            console.log('HOJE NÃO TEM AULA 🎉');
            break;
            
}