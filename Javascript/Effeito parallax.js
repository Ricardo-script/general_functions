import React, { useState } from 'react';
import './styles.css';
import img1 from './images/mountain1.png';
import img2 from './images/mountain2.png';
import text from './images/text.png';

export default function App(){

    const [offset, setOffset] = useState();

    const handleScroll = () => setOffset(window.pageYOffset); //window.pageYOffset retorna nº scroll eixo Y

    window.addEventListener('scroll', handleScroll); //permite configurar funções a serem chamadas quando um evento especificado acontece ex: 'click'

    return(
        <div className="App">
            <div className="zoom">
                <img src={img1} alt="" id="img1"
                    style={{width : (100 + offset * 0.3) + '%'}}
                />
                <img src={img2} alt="" id="img2"
                    style={{width : (100 + offset * 0.3) + '%'}}
                />
                <img src={text} alt="" id="text"
                    style={{top: `-${10 + offset * 0.3 + '%'}`}}
                />
            </div>

            <div className="content">
                <h2>Simple parallax effect with React</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                    reprehenderit enim explicabo doloribus alias ipsam laboriosam hic 
                    et qui dolorem, quasi culpa vero earum odio totam perspiciatis sint.
                    Commodi beatae quos obcaecati iure ad facilis porro, inventore dolore
                    tenetur, aliquid nihil. Ducimus incidunt, eligendi assumenda officia
                    delectus minus eos distinctio nesciunt omnis ipsum aliquid ad explicabo
                    totam facilis fugit quia amet! Pariatur atque rerum nobis illo porro facilis
                    in odio doloribus molestias totam quo esse laborum odit nam aliquid eaque 
                    laboriosam amet accusamus, hic quis fugiat suscipit! Iure possimus aliquid 
                    ullam reprehenderit cum, quaerat iste eum facere enim facilis quos eius quidem
                    voluptates. Quas, labore, sit autem iusto iure, error eos illo vero cum laboriosam
                    rem nam nesciunt sunt totam sequi aspernatur corporis molestiae esse cumque minima
                    voluptates? Culpa saepe quisquam adipisci tempore commodi maiores, repellat impedit
                    ratione animi dignissimos et dolor sequi. Impedit tempora a vitae reprehenderit eveniet
                    similique deleniti veniam ipsum ab ex voluptatem neque ratione in quo amet quidem, 
                    ipsa modi, iste culpa illo. Ipsum, vitae esse ea dolor numquam soluta dicta nobis iure
                    iste perspiciatis excepturi eligendi error similique ducimus omnis assumenda debitis 
                    ratione eum illum expedita inventore magni dolore blanditiis? Molestias veniam architecto
                    fugit enim.
                </p>
            </div>
        </div>
    );
}

//styles.css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.zoom {
  width: 100%;
  height: 1000px;
  position: relative;
  z-index: 1000;
  overflow: hidden;
  background: url("./images/bg.jpg");
  background-size: cover;
}

.zoom::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 200px;
  background: linear-gradient(transparent, #fff);
  bottom: 0%;
}

#img1 {
  position: absolute;
  transform: translateX(-55%); /*editado*/
  left: 50%;
  z-index: 100;
}

#img2 {
  position: absolute;
  z-index: 100;
}

#text {
  position: absolute;
  transform: translateY(40%);
}

.content {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.content h2 {
  font-size: 3em;
}

.content p {
  font-size: 1.5em;
  text-align: justify;
  margin: 30px 0;
}

