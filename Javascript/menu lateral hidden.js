/* corpo do site */
/* Talvez você não precise deste layout, mas ele ajuda a evitar alguns erros de tela*/
body {
    left: 0;
    margin: 0;
    overflow: hidden;
    position: relative;
}
/* O menu */
/* O menu começara escondido */
.menu {
    background: #686868 repeat left top;
    left: -350px;
    height: 100%;
    top: 0;
    position: fixed;
    width: 350px;
}
.menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.menu li {
    line-height: 45px;
    padding-bottom: 3px;
    padding-left: 20px;
    padding-top: 3px;
}
.menu a {
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    border-bottom: 2px solid;
}
.icon-close {
    cursor: pointer;
    padding-right: 30px;
    text-align: right;
    padding-top: 10px;
}
.icon-close h1 {
    cursor: pointer;
    padding-left: 10px;
    color: #fff;
    font-weight: 600;
}
.icon-menu {
    cursor: pointer;
    font-size: 30px;
    padding-bottom: 25px;
    padding-left: 25px;
    text-decoration: none;
}
.icon-menu i {
    margin-right: 5px;
}
.icon-menu p {
    border-bottom: 2px solid;
    max-width: 79px;
}