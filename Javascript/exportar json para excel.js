fruits = [
    {  descrição: 'laranja', preço: 50, estoque: 150},
    {  descrição: 'laranja', preço: 50, estoque: 350},
    {  descrição: 'maçã', preço: 75, estoque: 10},
    {  descrição: 'kiwi', preço: 35, estoque: 20},
    {  descrição: 'melão', preço: 25, estoque: 80},
];

const downloadCSVFromJson = (filename, arrayOfJson) => {
    // converter JSON to CSV
    const replacer = (key, value) => value === null ? '' : value // especificar como você deseja lidar com valores nulos aqui
    const header = Object.keys(arrayOfJson[0])
    let csv = arrayOfJson.map(row => header.map(fieldName => 
    JSON.stringify(row[fieldName], replacer)).join(';'))
    csv.unshift(header.join(';'))
    csv = csv.join('\r\n')
  
    // criar link e download
    var link = document.createElement('a');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv));
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

downloadCSVFromJson(`myCustomName.csv`, fruits);