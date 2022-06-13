// com porcentagem (mais acertivo)

let doc = document.documentElement
window.addEventListener('scroll', function() {
    let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight))
    console.log(value + '%');
});

// ou: 

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll)
});

