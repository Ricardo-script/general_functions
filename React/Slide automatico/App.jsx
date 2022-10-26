import { CarrosselMascara, CarrosselContainer, CarrosselTexto} from './styles';

export default function App(){

	const img01 = 'https://codigofonte.com.br/wp-content/uploads/2018/08/tekken-7.jpg';
	const img02 = 'https://codigofonte.com.br/wp-content/uploads/2018/10/shadow-warrior-2.jpg';
	const img03 = 'https://codigofonte.com.br/wp-content/uploads/2018/08/prey-mooncrash.jpg'

	return(
		<CarrosselMascara>
			<CarrosselContainer className='slide'>
				<img src={img01} alt=''/>
				<CarrosselTexto>
                	<p>É possível até mesmo inserir texto entre os slides!</p>
            	</CarrosselTexto>
				<img src={img02} alt=''/>
				<img src={img03} alt=''/>
			</CarrosselContainer>
		</CarrosselMascara>
	);
}