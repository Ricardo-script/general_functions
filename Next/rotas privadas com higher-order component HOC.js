/*
	Proteger rotas com base em tokens de autenticação que envolve a criação de um Higher-Order Component (HOC).
	Um HOC é uma função que recebe um componente e retorna um novo componente com funcionalidades adicionais. 
	No caso da autenticação, podemos criar um HOC que envolve os componentes que precisam de autenticação e 
	verifica se o usuário está autenticado antes de renderizá-los.
*/

/*
	Crie um HOC withAuth que recebe um componente como argumento e retorna um novo componente que verifica 
	se o usuário está autenticado antes de renderizar o componente original.
*/

import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const token = Cookies.get('token');

    if (!token) {
      router.push('/login');
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;


//--------------------------------------------------------------------------------------------------------------------------

//Em seguida, envolva os componentes que precisam de autenticação com o HOC withAuth. Por exemplo:

import withAuth from '../components/withAuth';

function Dashboard() {
  return (
    // Conteúdo da página protegida
  );
}

export default withAuth(Dashboard);

