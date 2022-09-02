COPY users(nome,email,password,idade,foto) FROM 'C:\Users\rts20\Desktop\teste.csv' DELIMITER ';' CSV HEADER;

/*
COPY - comando para importar aquivo
users - nome da tabela
(nome,email,password,idade,foto) - campos da tabela
DELIMITER ';' - ',' separado por virgulas ou ';' ponto e virgula por colunas
CSV HEADER - informa que o arquivo possui um cabeçalho

op´s isso seleciona a linha e pressionar f5
*/