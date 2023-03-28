import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaginaAtual() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Página Atual</h1>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}

export default PaginaAtual;