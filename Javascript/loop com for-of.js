 const languages = ['HTML', 'CSS', 'Javascript', 'C++'];

	for (let i = 0; i < languages.length; i++) {
		console.log(languages[i])
	}
	
	// com uso de for-of
	for (const language of languages) {
		console.log(language)
	}


	//saida: 'HTML', 'CSS', 'Javascript', 'C++'