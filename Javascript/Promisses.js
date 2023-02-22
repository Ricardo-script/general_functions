    /*function divisao(value1, value2, sucesso, erro) {

        const resultado = value1 / value2;

        if (value2 !== 0) {
            sucesso(resultado)
        } else {
            erro('Impossivel dividir por zero')
        }
    }

    function sucessoCallBack(resultado) {
        console.log('resultado: ', resultado)
    }

    function erroCallBack(erro) {
        console.log(erro)
    }

    divisao(10, 5, sucessoCallBack, erroCallBack)*/



    //Transformando a função acima em uma promisse --->


    function divisao(value1, value2) {
        //Promise recebe dois parametros (Promisse é um objeto que representa uma promessa, nesse caso uma promesa que ira retorna uma divisão)
        // resolve substituira o paramentro sucesso e o reject substituira o parametro erro
        return new Promise((resolve, reject) => {
            const resultado = value1 / value2;

            if (value2 !== 0) {
                resolve(resultado);
            } else {
                reject('Impossivel dividir por zero');
            }
        });
    }

    divisao(10, 20)
        .then(res => console.log(res))
        .catch(err => console.log('erro'))