var a = "1,2,3,4";

var b = a.split(',').map(function(item) {
    return parseInt(item, 10);
});


//Ou mais elegantemente

var b = a.split(',').map(Number);