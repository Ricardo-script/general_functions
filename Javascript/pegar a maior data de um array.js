const arr = [
        { date: '2022-11-14' },
        { date: '2022-09-24' },
        { date: '2025-07-17' },
    ];

    const maxDate = new Date(
        Math.max(
            ...arr.map(element => {
                return new Date(element.date);
            }),
        ),
    );

    var data = maxDate;
    var dia = String(data.getDate() + 1).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = ano + '-' + mes + '-' + dia;

    //log: '2025-07-17'