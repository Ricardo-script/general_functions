// login.js receber permissao do back-end, no exemplo inserir no localStorage

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
                        localStorage.setItem('@central-de-falhas-greenwave/permission', permission);
                        localStorage.setItem('modoMapa', 'segundo');
                        window.location.href = "/mapa";
                    });
                }

            }).catch(err => { //...
				


//============================================================================================================================

// permission.js função de verificação=======================================================================================

import { toast } from 'react-toastify';

function validarPermissao(permissoesAceitas){ // recebe props permissoesAceitas

    if(typeof permissoesAceitas !== 'object'){
        return false
    }

    const permissionUser = parseInt(localStorage.getItem('@central-de-falhas-greenwave/permission'));

    const verificacao = permissoesAceitas.includes(permissionUser);

    if(verificacao){
        return true
    }
    else{
        return false
    }
}

const msgPermissionDenied = () => toast.error(`USUÁRIO NÂO TEM PERMISSÂO !`, {
    position: "top-center",
    toastId:"openEditPermission",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

export { validarPermissao, msgPermissionDenied } ;

//============================================================================================================

//exemplo de inserir permissao: ==============================================================================

import React, { useState } from 'react';
import { validarPermissao } from '../../../services/permission';

	export default function Exemplo() {
		
		const permissao = (validarPermissao([0, 1, 2]) ? 'enabled' : 'disabled'); // a função validarPermissao recebe as props com um array fazendo verificação com as permissõpes escolhidas se tem no localStorage, se caso tive retorna 'enabled'
		
		return(
			<div className={permissao}>
			<Button
				className="dialog-button"
				title="Excluir agenda da área"
				onClick={pushNameZoneDeleteSchedule}
			>
				<ExcluirAgenda />
			</Button>
			<Button
				className="dialog-button"
				title="Excluir área"
				onClick={deleteZone}
			>
				<ExcluirArea />
			</Button>
			</div>	
		);
	}

// css:

.disabled{ // classe para desabilitar permissões
	pointer-events: none;
	opacity: 0.4;
}





