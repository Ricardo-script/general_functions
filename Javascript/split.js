		const dataAtual = '2021-05-26T15:18:34.763Z';
            
            const dataHora = dataAtual.split('T'); // split divide em blocos a partir do string selecionado ex: T, armazenando em array [0], [1], ....

            const data = dataHora[0]; // dataHora recebeu dois blocos a partir da string 'T', sendo a array 0 e array 1
            const hora = dataHora[1];

            console.log('split com somente a data: ' + data);
            console.log('split com somente a hora: ' + hora);

            const data_reverse =  data.split('-').reverse().join('/');
            const resultadofinal = data + ' ' + hora

            // explicação:
            // data.split = 2021-05-26, a variavel data contem a data em formato americano, para deixar em PT somente usar o reverse, resultado = ["2021", "05", "26"]
            //data.split.reverse =  ["26", "05", "2021"]
            // enquanto split os separa com o paramentro declarado ('-') .join os junta com o parametro declarado, nesse caso '/' ficando dessa forma: 26/05/2021
            // por fim a concatenação na variavel resultadofinal, seu resultado : 2021-05-26 15:18:34.763Z


            console.log(data_reverse);
            console.log(resultadofinal);

        }