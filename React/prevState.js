const [ user, setUser ] = useState({
	id: 1,
	name: "Ricardo",
	job: "Desenvolvedor",
});

const updateUser = () => {
	setUser((prevState) => {
		return { ...prevState, name: "Julia"};
	});
}
//--------------------------------------------------------------------
// com Array:

const [user, setUser] = useState([{ nome: 'teste', idade: ''}]);

const update = () => {
	setUser((prevState) => {
	   return [{ ...prevState, nome: 'Ricardo'}]
	});
}