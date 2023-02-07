import { useRef } from 'react';

const ref = useRef<HTMLInputElement>(null);






//limpar campos no caso se tiver usando typescript:
if (inputRef.current != null) { // evitando o erro de null
	inputRef.current.value = "";
}
