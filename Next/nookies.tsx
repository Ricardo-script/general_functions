'use client';

import { parseCookies, setCookie } from 'nookies';

// Salvar um cookie
setCookie(null, 'token', '123456', {
  maxAge: 30 * 24 * 60 * 60, // 30 dias
  path: '/', // Disponível para todas as rotas
});

// Recuperar cookies
const cookies = parseCookies(null);
console.log(cookies.token); // '123456'
