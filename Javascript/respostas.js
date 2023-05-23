
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="script.js" defer></script>
	<title>Document</title>

	<style>
		body {
			background: #0e1013;
		}
	
		h1 {
			max-width: 70%;
			text-align: left;
			margin: 60px auto;
			font-family: 'Courier New', Courier, monospace;
			color: #fff;
		}
	
		h1::after {
			content: '|';
			opacity: 1;
			margin-left: 5px;
			display: inline-block;
			animation: blink .7s infinite;
		}
	
		@keyframes blink {
	
			0%,
			100% {
				opacity: 1;
			}
	
			50% {
				opacity: 0;
			}
		}
	</style>
</head>
<body>
	<input type="text" id='input'>
	<button id="search">Pesquisar</button>

	<hr>
	<h1>123</h1>
</body>
</html>

// script------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const input = document.getElementById("input");
const button = document.getElementById("search");

const keywords = [
    {
        words: ["Greenwave", "Semafaro", "controlador"],
        response:
            "Greenwave é uma empresa nacional dedicada ao desenvolvimento de soluções e a produção de equipamentos para mobilidade urbana",
    },
    {
        words: ["Desenvolvimento", "Programação"],
        response:
            "responsável por analisar, desenvolver, projetar, implementar e atualizar sistemas de informação",
    },
    {
        words: ["Front-end"],
        response:
            "Front-End é tudo que envolve a parte visível de um site ou aplicação, com a qual os usuários podem interagir. Essa interface gráfica é desenvolvida a partir de linguagens como JavaScript, HTML e CSS",
    },
];

button.onclick = () => {
    const phrases = input.value.split(" ");
    const response = [];

    const letters = document.querySelector("h1");

    const search = () => {
        keywords.forEach((word, index) => {
            phrases.map((phrase) => {
                if (word.words.includes(phrase)) {
                    const amount = keywords[index].response;
                    response.push(amount);
                }
            });
        });

        const textoArray = response.join(",").split(""); // junta todas as respostas e depois quebra tudo por letras

        console.log("response.join(", ")", response.join(","));
        console.log(
            "response.join(',').split('')",
            response.join(",").split("")
        );
        letters.innerHTML = ""; // apaga o texto h1 para iniciar o efeito para escrever do zero
        textoArray.forEach((letra, i) => {
            setTimeout(() => (letters.innerHTML += letra), 75 * i); // concatena letra por letra
        });
    };

    search();
};
