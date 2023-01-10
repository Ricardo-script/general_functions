/* 
	useMemo => memoriza um valor
	useCallback => memoriza uma função
	memo => memoriza um componente (qual é o componente que esta renderizando de forma desnecessária? ) -> export default memo(nomeComponente)

	UseCallback - memoriza a declaração de uma função
	e só altera a mesma se for necessário
	
	
	// UseCallback não executa a função novamente
	// UseMemo executa a função e memoriza o return da função

	useCallback(funcao, [dependencias]); //-- memoriza somente a função
	useMemo(() => funcao, [dependencias]); //-- executa a função e memoriza o retorno
*/
// Exemplo a função abaixo:

const [inputs, setInputs] = useState([]);

function registerField(name, ref) {
	setInputs([...inputs, { name, ref }])
}

// com uso de callback 

const registerField = useCallback((name, ref) => {
	setInputs([...inputs, { name, ref }])
},[inputs]);

// uso mais performatico para setar o state, fazendo com que o array de dependencia não precise inserir o inputs

const registerField = useCallback((name, ref) => {
	setInputs(oldInputs => [...oldInputs, { name, ref }])
},[]); //<-- sem o input como array de dependencia



