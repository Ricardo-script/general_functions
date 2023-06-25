// Criar uma nova branch

git checkout -b "nome"


// Trocar de branch

git checkout "nome"


// trocar credenciais
/*Para usuário do Windows:
Siga as instruções:
Painel de controle >> Conta de usuário >> Gerenciador de credenciais >> Credencial do Windows >> Credencial genérica

remova a credencial git.
na próxima vez em que você enviar o repositório, ele solicitará credenciais.
Referência de resposta para explicação detalhada*/

//criar credenciais: configurar o Git para usar o token como método de autenticação:

git config --global credential.helper wincred

