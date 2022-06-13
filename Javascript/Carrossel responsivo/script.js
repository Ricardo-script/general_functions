const avancar = () => {
    const img01 = document.getElementById('slide1');
    const img02 = document.getElementById('slide2');
    const img03 = document.getElementById('slide3');

    if (img01.checked) {
        img02.checked = true;
        active('dot2');
        return;
    }
    if (img02.checked) {
        img03.checked = true;
        active('dot3');
        return;
    }
    if (img03.checked) {
        img01.checked = true;
        active('dot1');
        return;
    }
}

const voltar = () => {
    const img01 = document.getElementById('slide1');
    const img02 = document.getElementById('slide2');
    const img03 = document.getElementById('slide3');

    if (img03.checked) {
        img02.checked = true;
        active('dot2');
        return;
    }
    if (img02.checked) {
        img01.checked = true;
        active('dot1');
        return;
    }
    if (img01.checked) {
        img03.checked = true;
        active('dot3');
        return;
    }
}

const active = (dot) => {

    if (dot === 'dot1') {
        document.getElementById('dot1').style.backgroundColor = '#040404';
        document.getElementById('dot2').style.backgroundColor = 'orange';
        document.getElementById('dot3').style.backgroundColor = 'orange';
    }

    if (dot === 'dot2') {
        document.getElementById('dot1').style.backgroundColor = 'orange';
        document.getElementById('dot2').style.backgroundColor = '#040404';
        document.getElementById('dot3').style.backgroundColor = 'orange';
    }

    if (dot === 'dot3') {
        document.getElementById('dot1').style.backgroundColor = 'orange';
        document.getElementById('dot2').style.backgroundColor = 'orange';
        document.getElementById('dot3').style.backgroundColor = '#040404';
    }
}
