/* 
	O trecho em questão é uma expressão que faz uso da função map da API Children do React, 
	que é responsável por iterar sobre todos os elementos filhos de um componente.
	No caso, children é uma propriedade do componente Select que recebe os elementos Option como filhos, 
	que são os itens exibidos na lista suspensa.
	A função map é utilizada para criar uma nova lista de elementos, em que cada elemento da lista original (children) 
	é transformado através do método cloneElement. Este método cria uma nova instância do elemento, mantendo suas propriedades,
	mas permitindo alterá-las caso seja necessário.
	Dentro da função cloneElement, é definido um novo evento onClick para cada elemento. Esse novo evento dispara a função 
	handleOptionClick quando um item é clicado, passando como argumento o valor (value) da opção selecionada.
	Por fim, o resultado dessa operação é uma nova lista de elementos Option com um novo evento de clique anexado em cada um, 
	que executa a função handleOptionClick e passa o valor selecionado como parâmetro.
	Essa lista é exibida na caixa suspensa (BoxList) do componente Select, permitindo que o usuário selecione uma opção 
	a partir dos itens da lista.
*/

type PropsSelect = {
	onChange: (value: string | number) => void;
	children: ReactNode;
};

const handleOptionClick = (value: string | number) => {
	onChange(value);
};

<BoxList open={openSelect}>
	{Children.map(children, child => {
		return cloneElement(child as ReactElement, {
			onClick: () => handleOptionClick((child as ReactElement).props.value)
		});
	})}
</BoxList>


//componente children:

type propsOptions = {
	children: ReactNode;
	value: string | number;
	onClick?: () => void;
};

<Item onClick={onClick}>{children}</Item>