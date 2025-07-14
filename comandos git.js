// Criar uma nova branch
git switch -c namedabranch

// Trocar de branch
git branch namedabranch

// Mostras todas as branchs
git branch

// Excluir uma branch
git branch -d namedabranch
//ou
git branch -D namedabranch

//Depois que terminar tudo oque a tarefa de branch:
antes de dar o git add, verificar se esta tudo ok, não deixar imports sem usar e etc

git add .
git commit -m
git push

*** Depois que commitar vai abrir o pull request () ir para git hub e enviar o link 

git fetch
git pull

// trocar credenciais
/*Para usuário do Windows:
Siga as instruções:
Painel de controle >> Conta de usuário >> Gerenciador de credenciais >> Credencial do Windows >> Credencial genérica

remova a credencial git.
na próxima vez em que você enviar o repositório, ele solicitará credenciais.
Referência de resposta para explicação detalhada*/

//criar credenciais: configurar o Git para usar o token como método de autenticação:

git config --global credential.helper wincred

