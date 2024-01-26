//yarn add react-toastify

// pages/_app.js
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

//---------------------------------------------------

// pages/index.js

import { toast } from 'react-toastify';

function HomePage() {
  const showToast = () => {
    toast.success('Exemplo de Toastify!', {
      position: 'top-right',
      autoClose: 3000, // Fechar automaticamente após 3 segundos
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <h1>Next.js com React-Toastify</h1>
      <button onClick={showToast}>Mostrar Toast</button>
    </div>
  );
}

export default HomePage;
