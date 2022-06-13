<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #move{
            border: 2px solid purple;
            background: rgba(255, 235, 123, 0.712);
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <div id="move">
        123 mover
    </div>
</body>

<script>
    var m = document.getElementById('move');
    m.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

    function mouseUp() {
        window.removeEventListener('mousemove', move, true);
    }

    function mouseDown(e) {
        window.addEventListener('mousemove', move, true);
    }

    function move(e) {
        m.style.top = e.clientY + 'px';
        m.style.left = e.clientX + 'px';
    };
</script>

</html>