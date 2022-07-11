// remove acentos de uma string:

string.normalize('NFD').replace(/[\u0300-\u036f]/g, "");


/*Opcional. Um dentre os seguintes valores: "NFC", "NFD", "NFKC", ou "NFKD", especificando o formato de 
normalização. Se o valor for omitido ou for undefined, "NFC" será utilizado.
NFC — Formato de Normalização Canônico de Composição. 
NFD — Formato de Normalização Canônico de Decomposição.
NFKC — Formato de Normalização de Compatibilidade de Composição.
NFKD — Formato de Normalização de Compatibilidade de Decomposição.*/

//-----------------------------------------------------------------