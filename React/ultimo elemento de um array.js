console.log(response.data[response.data.length-1].id);

[
    {
        "id": 3,
        "alternative_id": "003",
        "description": "Coca-cola",
        "measure_unit_id": "1",
        "sale_value": "5.50",
    },
	{
        "id": 4,
        "alternative_id": "003",
        "description": "Coca-cola",
        "measure_unit_id": "1",
        "sale_value": "5.50",
    },
]

console.log(response.data[response.data.length-1].id); // =4

//------------------------------------------------------------

array[array.length - 1] 

//ou da melhor maneira

array.at(-1)