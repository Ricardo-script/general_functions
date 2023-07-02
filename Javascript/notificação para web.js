//notificação para web browser 

      function notifyMe(){
  
            if(!window.Notification){
                console.log('Browser does not support notifications!')
            }else{
                if(Notification.permission === 'granted'){
                    new Notification('Hi there', {
                        body: 'How are you doing?',
                        icon: 'https://cdn-icons-png.flaticon.com/512/4980/4980801.png'
                    });
                }else{
                    Notification.requestPermission().then(p => {
                        if( p === 'granted'){
                            new Notification('New Notification', {
                                body: 'You have a new message!',
                                icon: 'https://cdn-icons-png.flaticon.com/512/4980/4980801.png'
                            });
                        }else{
                            console.log('User blocked Notifications')
                        }
                    }).catch(function (err){
                        console.log(err)
                    })
                }
            }
        }

        /*
        // ou
        function exibirNotificacao(titulo, mensagem) {
            // Verifica se o navegador suporta a API de Notificação
            if (!("Notification" in window)) {
                console.log("Este navegador não suporta notificações.");
                return;
            }

            // Verifica se o usuário já deu permissão para exibir notificações
            if (Notification.permission === "granted") {
                // Cria uma nova notificação
                var notificacao = new Notification(titulo, { body: mensagem });
            } else if (Notification.permission !== "denied") {
                // Solicita permissão ao usuário para exibir notificações
                Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    // Se a permissão for concedida, cria a notificação
                    var notificacao = new Notification(titulo, { body: mensagem });
                }
                });
            }
        }
        */


        exibirNotificacao("Nova Mensagem", "Você recebeu uma nova mensagem.");