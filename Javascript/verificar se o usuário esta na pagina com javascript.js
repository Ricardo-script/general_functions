const verificar = () => {
            if (document.visibilityState === 'visible') {
                console.log('usuário na página')
            } else {
                console.log('usuário não esta na página')
            }
        }

        document.addEventListener('visibilitychange', verificar)