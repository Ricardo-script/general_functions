
const tableRows = document.querySelectorAll('tr');

const exportar = () => {
    const csvContent = ([...tableRows])
        .map(row => ([...row.cells])
            .map(cell => cell.textContent)
            .join(';') // ',' na mesma linha ';' por colunas
        ).join('\n')

        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'nomeArquivo.csv';
        hiddenElement.click();

    console.log(csvContent);
}
