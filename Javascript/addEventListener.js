// pega uqla tecla foi digitada

document.addEventListener('keydown', (e) => {
	console.log(e.key);
})


//====================================================

'use strict';

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  alert('keydown event\n\n' + 'key: ' + keyName);
});
