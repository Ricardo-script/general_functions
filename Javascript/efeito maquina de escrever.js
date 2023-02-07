<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TypeWriter</title>
</head>

<body>

    <style>
        body {
            background: #0e1013;
        }

        h1 {
            max-width: 480px;
            text-align: center;
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

    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quam reprehenderit dolorum suscipit adipisci
        cumque, reiciendis minus quisquam voluptatum nisi, a veritatis. Quidem fuga minus odio ea nisi! Adipisci,
        magnam?
    </h1>

    <script>
        function typeWriter(elemento) {
            const textoArray = elemento.innerHTML.split(''); // quebra por letras
            console.log(textoArray)
            elemento.innerHTML = ''; // apaga o texto h1 para iniciar o efeito para escrever do zero
            textoArray.forEach((letra, i) => {
                setTimeout(() => elemento.innerHTML += letra, 75 * i); // concatena letra por letra
            });
        }

        const titulo = document.querySelector('h1');
        typeWriter(titulo);
    </script>

</body>

</html>