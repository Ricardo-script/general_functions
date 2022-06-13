
// Query params = ?nome=NodeJS - são os parametros que são enviados na rota (uso de ? )
//Ex:

'localhost:3000/curso?nome=NodeJS'

server.get('/curso', (req,res) => {
	
	const nome = req.query.nome // nome é a nomenclatura enviada na URL depois da interrogação '?'
	
	return res.jon({ curso: `Aprendendo ${nome}`})
});


//-----------------------------------------------------------------------------------------------------------

// Route params = /curso/2 - enviados na rota por exemplo um id

'localhost:3000/curso/2'

server.get('/curso/:id', (req,res) => {
	
	const id = req.params.id // nome é a nomenclatura enviada na URL depois da interrogação '?'
	
	return res.jon({ curso: `Id do curso ${id}`})
});

//-----------------------------------------------------------------------------------------------------------

// Request body = { nome: 'Nodejs', tipo: 'Back-end'} - é o objeto enviado no corpo da requsição 
