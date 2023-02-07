 interface Props {
        type?: "button" | "submit" | "reset" | undefined, 
        onClick?: () => void,
        nome: string
    } 

    function Botao({ onClick, type, nome }: Props) { // adicionei aqui a nova prop
        console.log('acessando a nova prop!', nome);
        return (
            <button onClick={onClick} type={type} className= {style.botao}>
                {this.props.children}
            </button>
        )
}