<tbody>
  {Array(10).fill(1).map((el, i) =>
    <ObjectRow key={i} />
  )}
</tbody>



/*

O método fill pode receber até três argumentos valor, ínicio e fim. Os argumentos ínicio e fim são opcionais com valor padrão 0 (valor) e o tamanho do objeto (fim).

Se o ínicio for negativo, ele será tratado como tamanho + ínicio onde tamanho é o tamanho total do array. Se o fim for negativo, ele será tratado como tamanho + fim.

A função fill é intencionalmente genérica, ele não precisa que o valor do this seja um objeto Array.

O método fill é um método mutável, ele irá mudar o objeto em si, e retorná-lo, não somente uma cópia do objeto.


Exemplos
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

*/