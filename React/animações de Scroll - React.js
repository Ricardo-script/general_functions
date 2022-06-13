//Primeiro, vamos criar o nosso componente Header.

//***src/Header/index.js***
//-----------------------

import React from 'react';
import './styles.css';
const Header = () => (
  <div className="header">
    <h1>Title</h1>
  </div>
)
export default Header;

//==============================================================
//Adicionar alguns estilos:


.header {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100vw;
}
.header h1 {
   font-size: 30px;
   color: white;
}

//===============================================================


//o próximo, que será o componente App:
//src/App/index.js

import React, { Component } from 'react';
import About from '../About';
import Header from '../Header';
class App extends Component {
   constructor() {
     super();
     this.state = {
        className: 'hidden'
     }
   }
   handleScroll() { 
    if (document.documentElement.scrollTop > 430) {
       this.setState({
         className: 'show'
       })
     } 
   }
   componentDidMount() {
     window.onscroll = () => this.handleScroll()
   }
   render() {
     return(
       <div>
         <Header />
         <About className={this.state.className} />
       </div>
     )
   }
}
export default App;

//Se você não tem certeza de quantos pixels depois você quer que ele apareça, verifique utilizando: console.log(document.documentElement.scrollTop);
// ou verificar em tempo real :

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll)
});
//==========================================================================================================================================================================
//==========================================================================================================================================================================


//criar o componente About:
//src/About/index.js

import React, { Component } from 'react';
import './styles.css';
class About extends Component {
  render() {
    return(
      <div className="about-wrapper">
        <div className="about-text">
          <div className={this.props.className}>
            <h3>Title</h3>
            <p>This is a text that will appear.</p>
          </div>
         </div>
      </div>
     )
   }
}
export default About;


//src/About/styles.css

.about-wrapper {
   height: 30em;
   width: 100vw;
}
.about-text {
   position: relative;
   width: 30em;
   height: 20em;
}
.show {
   position: absolute;
   left: -30em;
   width: 30em;
   height: 20em;
   -webkit-animation: slide-in 1s forwards;
   animation: slide-in 1s forwards;
}
@-webkit-keyframes slide-in {
  100% { left: 0 }
}
@keyframes slide-in {
  100% { left: 0 }
}




