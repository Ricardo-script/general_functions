
// Gerando o build:

/*
Hospedagem em netlify : https://www.netlify.com/

Os projetos que utilizam react-router-dom será necessário fazer o redirect como no precidimento abaixo:

	1. Dentro da pasta public , criar um arquivo chamado: '_redirects';
	2. dentro dele inserir o seguinte código:
	 
		/* /index.html 200
		
		
Para subir um projeto deve-se gerar um build, ou seja não vai subir de fato aqueles componentes
que se estava criando a mão no codigo, e sim gerar um build, e esses arquivos que vão ser gerados esses sim 
irão subir para a hospedagem. Não irá subir a pasta src, e sim a pasta public, onde irá gerar todos os componentes
todos buildados.

No terminal: 
npm run build

----------------------------------------------------

*/

// Fazendo o deploy:

/*

	Duas maneiras de fazer subir o build para o netlify, uma é arrastar a pasta build para dentro do site,
	e outra é por linha de comando ou seja pelo CMD.
	
	1. Baixar o pacote de CLI do netlify:
		npm install -g netlify-cli
		
	2. Para subir para o build:
		netlify deploy
		
	3. Após seta para baixo e escolher ' + Create & configure...'
	   Escolher o team, após criar o nome do site Ex: 'rick-curso'
	
	4. CMS faz uma pergunta? Publish directory (.) = qual pasta é para subir para
		produção? nesse caso é a build: ./build
	
	5. netlify deploy --prod
		CMD faz outra pergunta: Publish directory (.) =  ./build

*/