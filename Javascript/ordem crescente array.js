//Ordenar strings:

const lista = ['laranja', 'melão', 'abacaxi', 'uva', 'banaca', 'mexirica', 'caju'];
function ordenacao() {
	const listaOrder = lista.sort((itemA, itemB) => itemA > itemB ? 1 : -1);
	console.log(listaOrder);
}

//saída:  [abacaxi', 'banaca', 'caju', 'laranja', 'melão', 'mexirica', 'uva']
//------------------------------------------------------------------------------------------------------------------------------------------------------
/* 
	A função passada para sort recebe dois parâmetros que representam pares de elementos, isso porque toda comparação envolve um par de elementos. 
	A regra é a seguinte: com o critério selecionado, se o valor retornado for 0 não há alteração a ser feita, se o valor retornado for positivo, 
	b deve vir antes de a, se o valor for negativo, a deve vir antes de b.
*/	
	
const dados = [
	{nome: 'Ricardo', idade: 34, cargo: 'Front-end' },
	{nome: 'Vinicius',idade: 24, cargo: 'Back-end' },
	{nome: 'Felipe',  idade: 27, cargo:'Full-stack'} 
];

const crescente = () =>{
	const ordemCrescente = [];
	dados.sort((a,b) => a.idade - b.idade);
	dados.forEach( item => {
		ordemCrescente.push(item);
	});

	console.log(ordemCrescente);
}

//Para obtermos uma ordem decrescente é só inverter a subtração b - a:
const decrescente = () =>{
	const ordemDecrescente = [];
	dados.sort((a,b) => b.idade - a.idade);
	dados.forEach( item => {
		ordemDecrescente.push(item);
	});

	console.log(ordemDecrescente);
}

//----------------------------------------------------------------------------------------------------------------------------------------

//Exemplo: 2
	
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
	}else {
		return true;
	}
});

//Obs: //Para obtermos uma ordem decrescente é só inverter o sinal de menor para maior >

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

// ordem crescente com .map

const falhas = [//todas as mensagens de falhas que podem ser enviadas do controlador
	{
		value: 'Normal',
		label: 'Normal',
	},
	{
		value: 'Apagado',
		label: 'Apagado',
	},
	{
		value: 'Manutenção',
		label: 'Manutenção',
	},
];

{
	falhas.sort((falhaA, falhaB) => falhaA.value > falhaB.value ? 1 : -1).map((itens) => (
	<MenuItem key={itens.value} value={itens.value}>
		<Checkbox checked={valorName.indexOf(itens.value) > -1} />
		<ListItemText primary={itens.value} />
	</MenuItem>
))}
	
	