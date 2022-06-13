var csvData;

function readfile(e) {
    var file = document.getElementById("myfile").files[0];
    const reader = new FileReader();
    reader.addEventListener('load', e => {
        csvData = e.target.result.toString();
        toJSON(csvData);
    })
    reader.readAsText(file, 'UTF-8')

}

const toJSON = csv => {
    const lines = csv.split('\r\n')
    const result = []
    const headers = lines[0].split(';')

    lines.map(l => {
        const obj = {}
        const line = l.split(';')
       
        headers.map((h, i) => {
            obj[h] = line[i]
        })
        result.push(obj)
    })
    console.log(result.splice(1, (result.length - 1))) // remove a primeira coluna que repete o cabeçalho
    return result.splice(1, (result.length - 1))
}