	// //Disparar evento ao digitar a tecla ESC
	
	useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
				console.log('Close')
			}
		};
		 window.addEventListener('keydown', handleEsc);
    },[]);