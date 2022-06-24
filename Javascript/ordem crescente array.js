var pessoas = [
    {
      nome: "Matheus",
    idade: 29
  },
  {
      nome: "Pedro",
    idade: 18
  },
  {
      nome: "Maria",
    idade: 40
  },
  {
      nome: "Alan",
    idade: 63
  }
];
pessoas.sort(function(a, b) {
  if(a.nome < b.nome) {
    return -1;
  } else {
    return true;
  }
});
//------------------------------------------------------------------------------------------------------------------
// react requisição:
const callReqCadastro = async () => { //listar numero de bobinas cadastradas
        await api.get(endPointCadastros, {
            headers: {
                Authorization: `Bearer ${tokenUser}`,
            },
        })
        .then(res => {
            const order = res.data.data.sort((a,b) => {
                if(a.attributes.numero_bobina < b.attributes.numero_bobina){
                    return -1;
                }else{
                    return true
                }
            });
            setBobina(order);
        })
        .catch(err => {
            console.log('Erro ao carregar numero de bobinas');
        })
    }