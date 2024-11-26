
'use client';

import { parseCookies, setCookie, destroyCookie } from 'nookies';

// Salvar um cookie
setCookie(null, 'token', '123456', {
  maxAge: 30 * 24 * 60 * 60, // 30 dias
  path: '/', // Disponível para todas as rotas
});

// Recuperar cookies
const cookies = parseCookies(null);
console.log(cookies.token); // '123456'

// Remover o cookie
destroyCookie(null, 'token', {
  path: '/', // Certifique-se de usar o mesmo caminho definido anteriormente
});

// Verificar se o cookie foi removido
const updatedCookies = parseCookies(null);
console.log(updatedCookies.token); // undefined
