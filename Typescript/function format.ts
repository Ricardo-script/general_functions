// format.ts

function cpf(value: string | number): string {
  return value
    .toString()
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

function cep(value: string | number): string {
  return value
    .toString()
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
}

/**
 * Objeto format (namespace de funções)
 */
const format = {
  cpf,
  cep,
}

export default format


//--------------------------------------

uso:

import format from './format'

const cpfFormatado = format.cpf(12345678900)
const cepFormatado = format.cep(12345678)

console.log(cpfFormatado) // 123.456.789-00
console.log(cepFormatado) // 12345-678

