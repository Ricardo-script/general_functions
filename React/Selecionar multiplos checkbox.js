	const identificacao = ['melo', 'geovane', 'ulisses', 'erick', 'ricardo', 'thiago'];
	
	const FiltroIdentificacao = (props) => {
		

    // estados para guardar a seleção de items do filtro
    const [selecaoIdentificacao, setSelecaoIdentificacao] = useState([]);

    const getIdentificacao = (e,index) => {
 
        if(e.target.checked){
            const values = [...selecaoIdentificacao];
            values[index] = e.target.value;
            setSelecaoIdentificacao(values);
        }else{
            const values = [...selecaoIdentificacao];
            values[index] = '';
            setSelecaoIdentificacao(values);
            console.log(values);
        }
    }

    const filtrarIdentificacao = () => {
        const filtered = selecaoIdentificacao.filter(Boolean); // remove itens vazios ou nulos de um array
        console.log(filtered);
    }
	
	
	return(
		 <ul>
			{identificacao.map( (items,index) => (
				<li><input type="checkbox" value={items} name="filtro" onChange={(e) => getIdentificacao(e, index)}/>{items + ' ' + index}</li>   
			))}
		</ul>
		 <button onClick={filtrarIdentificacao}>Ok</button>
	);
	

	
	