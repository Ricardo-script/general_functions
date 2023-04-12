/*

Para definir rotas dinâmicas no Next.Js usamos colchetes nos nomes dos arquivos que queremos como rotas em vez de utilizar algum nome estático. 
([param].js) Esse param é o nome do parâmetro que você irá receber na rota.

exemplo pages/posts[id].js

Como podemos ver logo acima, temos um arquivo dentro da pasta posts que contém o nome[id] na qual id será o parâmetro que vamos receber 
dessa rota.Como exemplo irei criar uma simples página onde mostramos um simples Hello World
(lembre - se sempre que uma página no next precisa ter uma exportação padrão):

*/

//endereço no browser: http://localhost:3000/posts/helloworld
//Arquivo [id].js

import { useRouter } from 'next/dist/client/router'

export default function Posts() {

    const router = useRouter()
    const parametro = router.query.id

    return <h1>Foi digitado pelo usuário: {parametro}</h1> // = helloworld
}