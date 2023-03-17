
const audio = new Audio('meu_audio.mp3');
audio.play();

//-----------------------------------------------------------------------

import voz from '../../assets/apresentacao.mp3';
import mic from '../../assets/mic.png';

class Ouvidoria extends Component{
  constructor(props){
    super(props);
    this.state = {
      show:true
    }

    this.tocar = this.tocar.bind(this);
  }

  tocar(){
   
      const audio = document.querySelector('audio')
      audio.play()
    
  }
  
  
   <audio src={voz}></audio>
   <button onClick={this.tocar}>play</button>
   
   
   
   //---------------------------------------------------------//
   //Com function
   
   import voz from '../../assets/apresentacao.mp3';
   import mic from '../../assets/mic.png';
   
   const tocar = () => document.querySelector('audio').play();
   
    <audio src={voz}></audio>
    <label onClick={tocar}><Audio src={mic} alt="" /></label>