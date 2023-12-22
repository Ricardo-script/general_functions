    const handleKeyPress = (event: KeyboardEvent) => {
        // Verifica se a tecla pressionada é o "Enter" (código 13)
        if (event.key === 'Enter') {
            // Chama a função que você deseja disparar aqui
            console.log('teclou')
        }
    }
    
    useEffect(() => {
        document.addEventListener('keypress', handleKeyPress);
        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, []);
