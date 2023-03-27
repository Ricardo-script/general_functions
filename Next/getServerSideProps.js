/* 
A diferença principal entre eles é quando os dados são buscados e em que momento são gerados.

getServerSideProps: é um método assíncrono que é executado a cada solicitação da página. Os dados são buscados no 
servidor toda vez que a página é solicitada e, em seguida, passados ​​para o componente de página para renderização. 
Este método é útil para páginas que precisam de dados atualizados a cada solicitação, como páginas que exibem conteúdo dinâmico.

getStaticProps: é um método assíncrono que é executado durante a construção do aplicativo. Ele busca os dados em uma fonte 
externa e os passa para o componente de página antes de serem renderizados. Os dados são estáticos e não são atualizados a menos 
que a página seja reconstruída. Este método é útil para páginas que exibem conteúdo estático ou semi-estático, como páginas de documentação, 
páginas de contato ou páginas de ajuda.

Em resumo, getServerSideProps é usado para buscar dados dinâmicos a cada solicitação, enquanto getStaticProps é 
usado para buscar dados estáticos durante a construção do aplicativo.

*/

//executa no lado do servidor antes de montar em tela
export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const session = await getSession({ req })

    return {
        props: {},
    }
}