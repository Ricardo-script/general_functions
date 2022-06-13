//adiciona um zero na frente dos numeros < 9 para formatar a data
    function adicionaZeroData(numero) {
        if (numero <= 9) {
            return "0" + numero;
        }
        else {
            return numero;
        }
    }
    //faz a formatacao do timestamp recebido
    const converterDataHora = (data) => {

        if (data == undefined) {
            return
        } else {
            const dataHora = new Date(data);
            const dia = adicionaZeroData(dataHora.getDate())
            const mes = adicionaZeroData(dataHora.getMonth() + 1);
            const ano = dataHora.getFullYear();
            const hora = adicionaZeroData(dataHora.getHours());
            const minuto = adicionaZeroData(dataHora.getMinutes());
            const segundos = adicionaZeroData(dataHora.getSeconds());
            const dataHoraFormatada = ano + "/" + mes + "/" + dia + " " + hora + ":" + minuto + ":" + segundos;
            return dataHoraFormatada;
        }
    }