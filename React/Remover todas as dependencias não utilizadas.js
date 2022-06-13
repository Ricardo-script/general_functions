//Você pode usar um módulo npm chamado depcheck (requer pelo menos a versão 10 do Node).

//Instale o módulo:

npm install depcheck -g

or

yarn global add depcheck
//Execute-o e encontre as dependências não utilizadas:

depcheck
//O lado bom dessa abordagem é que você não precisa se lembrar do comando findou grep.

//Para executar sem instalar, use npx: ****

npx depcheck