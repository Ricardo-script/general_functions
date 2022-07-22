<ul id="lista"></ul>
    <input type="button" onclick="gerarLista()" value="Clique">

    <script>
        const vetor1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const lista = document.getElementById('lista');

        const gerarLista = () => {
            vetor1.forEach(item => {
                lista.innerHTML += `<li>${ item }</li>`
            });
        }
    </script>