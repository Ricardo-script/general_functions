useEffect(() => {

	const controller = new AbortController();
	axios.get('https://teste.com/users', {
		signal: controller.signal
	})
	.then(response => {
		console.log(response)
	})
	.catch(error => {
		console.log(error)
	})

	return () => {
		controller.abort
	}

},[]);