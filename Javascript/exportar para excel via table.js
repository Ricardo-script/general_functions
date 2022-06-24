
const exportTable = (tableRows,title) => {

    const createCSVString = () => Array.from(tableRows)
    .map(row => Array.from(row.cells)
        .map(cell => cell.textContent)
        .join(';')
    )
    .join('\n');

    const CSVString = createCSVString(tableRows)
    console.log(CSVString)

    var csvData = new Blob([CSVString], { type: 'text/csv;charset=utf-8;' });
    var csvURL = null;
    if (navigator.msSaveBlob) {
        csvURL = navigator.msSaveBlob(csvData, title + '.csv');
    } else {
        csvURL = window.URL.createObjectURL(csvData);
    }
    var tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', title + '.csv');
    tempLink.click();
}

export default exportTable;

//---------------------------------------------------------------------------

exportTable(tableRows,titleModalCadastro)