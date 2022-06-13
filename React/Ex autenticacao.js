async function handleLogin() {
        if (!email || !password || email === "" || password === "") {
            Toast.fail("Preencha todos os campos", 1000)
        } else {
            await api.post('/auth/login', {
                "email": email,
                "password": password
            }).then(res => {
                const { name, timerMap, permission, lat, long, zoom, townhall } = res.data.user;
                if (email === values.email) {
                    Toast.success(`Bem vindo a Central de Semafórica ${name}`, 2500, () => {
                        localStorage.setItem('@central-de-falhas-greenwave/tokenAuth', res.data.token);
                        localStorage.setItem('@central-de-falhas-greenwave/permission', permission);
                        localStorage.setItem('@central-de-falhas-greenwave/positionLat', lat);
                        localStorage.setItem('@central-de-falhas-greenwave/positionLng', long);
                        localStorage.setItem('@central-de-falhas-greenwave/townhall', townhall);
                        localStorage.setItem('@central-de-falhas-greenwave/setTimeReload', timerMap);
                        localStorage.setItem('@central-de-falhas-greenwave/zoom', zoom);
                        localStorage.setItem('@central-de-falhas-greenwave/name', name);
                        localStorage.setItem('modoMapa', 'segundo');
                        localStorage.setItem('tocarAudio','inativo');
                        localStorage.setItem('Alertas', true);
                        window.location.href = "/mapa";
                    });
                }

            }).catch(err => {
                try {
                    if (err.response.data === undefined) {
                        Toast.fail('Erro ao logar, tente mais tarde !!', 3000);
                        return
                    }
                    else if (err.response.data.mensagem === "Senha inválida") {
                        const tentativasRestantes = err.response.data.tentativasRestantes;
                        const maximoDeTentativas = err.response.data.maximoDeTentativas;
                        setInfoSenha(`Senha incorreta (${tentativasRestantes} de  ${maximoDeTentativas} tentativas).`);
                        setustatusInput('error');

                    } else if (err.response.data.mensagem === "Usuário não encontrado") {
                        setInfoEmail('Esse usuário não está cadastrado, verifique o e-mail digitado !');
                        setustatusInput('error');

                    } else if (err.response.data.mensagem === "Usuário bloqueado") {
                        setInfoEmail('Usuário bloqueado, siga as instruções enviadas para seu e-mail !');
                        setustatusInput('error');
                    }

                    else if (err.response.data.mensagem === "Email não autenticado") {
                        Toast.fail('Confirme seu cadastro acessando seu e-mail!', 2500);
                        setustatusInput('error');
                    }

                    else if (err.response.data.mensagem === "Licença expirada") {
                        Toast.fail('Licença expirada', 2500);
                        setustatusInput('error');
                    }

                } catch (error) {
                    history.push('/404');
                }
            })
        }
    };