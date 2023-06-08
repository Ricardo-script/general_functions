// Isso irá criar um arquivo package.json no diretório raiz do seu projeto. Esse arquivo é usado para especificar as dependências do projeto.
	yarn init
	
//Agora, instale o servidor web que será usado para executar o projeto localmente. 
	yarn add http-server --dev

//Depois que o pacote http-server for instalado, adicione um script ao arquivo package.json para iniciar o servidor web.
	"scripts": {
		"start": "http-server"
	}
	
//Agora, para executar o servidor web, execute o seguinte comando:
	yarn start


// Para gerar build:
	yarn add parcel-bundler --dev

// Logo após inserir no package:

	"scripts": {
	  "start": "http-server",
	  "build": "parcel build index.html"
	}
	
// incluindo estilização sass:
	yarn add sass --dev

//Para fazer o Sass rodar automaticamente durante o desenvolvimento, você pode usar o parcel-bundler em conjunto com o pacote sass e o pacote watch.
	yarn add watch --dev

//Em seguida, adicione o seguinte script ao seu arquivo package.json:
	"scripts": {
        "start": "parcel index.html --port 3000",
        "build": "parcel build index.html && sass sass/style.scss dist/css/style.css"
    },
	
	
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Obs:
//Verifique se os arquivos HTML estão corretamente referenciados em outros arquivos ou partes do código. 
//Se um arquivo HTML não estiver sendo usado em nenhum lugar, o Parcel pode não incluí-lo na compilação.







