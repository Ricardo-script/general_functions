/* 
------------------------------------------------------
| Operador |        Sintaxe       |     Descrição    |
------------------------------------------------------
|          |                      | Inverte o valor  |
|    !     |       !expressão     | booleano da      |
|          |                      | expressão        |
------------------------------------------------------
|          |                      | Converte o valor |
|    !!    |      !!expressão     | da expressão em  |
|          |                      | um booleano      |
------------------------------------------------------
|          |                      |                  |
|          |                      | condição e       |
|          |   condição ? expr1 : | retorna a expr1  |
|    ?     |   expr2              | se verdadeiro,   |
|          |                      | caso contrário,  |
|          |                      | retorna a expr2  |
------------------------------------------------------
|   ??     | retorna o primeiro   | Retorna valor1   |
|          | operando se ele for  | se não for null  |
|          | falsy, caso contrário| nem undefined,   |
|          | retorna o segundo    | caso contrário,  |
|          | operando.            | retorna valor2   |
|          | valor1 ?? valor2     |                  |
|          | ex: const age = 25;  |                  |
|          |const isAdult = age>= |                  |
|          | 18 && "Adulto";      |                  |
|          | console.log(isAdult);|                  |
|          | // "Adulto"          |                  |
|          |                      |                  |
------------------------------------------------------
*/