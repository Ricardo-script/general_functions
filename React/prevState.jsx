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