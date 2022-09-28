
//-----------------------------------------------------------Back-end-----------------------------------------------------------------------------------

// .ENV

PORT='80'

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// server.js

import express from 'express';
import { socketIo } from './utils/socketIo';

const app = express();

const server = app.listen(process.env.PORT || 80 , () => {
    console.log('local: http://localhost:80');
});

socketIo(server);

//------------------------------------------------
//src/utils/socketIo.ts

import { Server } from "socket.io";

export const socketIo = (server: any) => {

    const io = new Server(server,{
        cors:{ origin:"*" }
    });

    io.on('connection', socket => {
        //console.log('[IO] Connection => Server has a new connection')
        socket.on('chat.message', data => {
            console.log('[SOCKET] Chat.message => ', data)
            io.emit('chat.message', data)
        })
        socket.on('disconnect', () => {
            console.log('[SOCKET] Disconnect => A connection was disconnected')
        });
    })
}

/*
------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------
socket?.emit('Mensagem(evento)', 'conteudo da mensagem(dados)') -> enviar os dados
socket?.emit('Mensagem(evento)', 'dados') -> recebe os dados

*/
//--------------------------------Front-end-------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

import { useEffect, useState } from 'react';
import { Container, AreaMensagens, AreaSendMessage } from './styles';
import fundo from '../assets/fundo.jpg';
import io from 'socket.io-client';

// declarar o socket antes do componente App, para não ficar sempre chamando a conexão toda vez que o component é montado
const socket = io('https://support-chat-rick.herokuapp.com/') // back-end: ws://localhost:80 (https sem o certificado de segurança qnd na nuvem pode dar 'erro de segurança')
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))

export default function Chat() {

	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	
	const user = sessionStorage.getItem('user');

	useEffect(() => {
		const handleNewMessage = socket.on('chat.message', (dados) => { // recebe os dados do back que foram enviados anteriormente pelo front
			const msgs = [...messages]
			msgs.push(dados);
			setMessages(msgs);
		});


		return () => socket.off('chat.message', handleNewMessage) // fecha conexão
	}, [messages])


	const sendMessage = () => {
		if(message === ''){
			return;
		}else{
			socket.emit('chat.message', {
				id: user,
				message
			})
			setMessage('');
		}
	}

	return (
		<Container>
			<img src={fundo} alt="" />
			<AreaMensagens>
				<ul>
				{messages.map((m, index) => (
					<li key={index} className={m.id === user ? 'mine' : 'other'}>
						<span className={m.id === user ? 'mine' : 'other'}>{ m.message }</span>
					</li>
				))}
				</ul>
			</AreaMensagens>
			<AreaSendMessage>
				<input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
				<button onClick={sendMessage}>Enviar</button>
			</AreaSendMessage>
		</Container>
	)
}


// styled:---------------------------------------------------------------------------------------------------------------------------------------------

import styled from "styled-components";

export const Container = styled.section`

`;

export const AreaMensagens = styled.div`
    position: relative;
    width: 95%;
    margin: 20px auto;

    ul {
        margin: 0;
        padding: 0;

        li{
            list-style: none;
            position: relative;
            padding: 10px 0;
           
            span{
                display: block;
                width: auto;
                max-width: 300px;
                height: 50px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                text-indent: 15px;
                font-family: 'Roboto', sans-serif;
                font-size: 14px;

                &.mine{
                    background: #c3e88d;
                    border-color: #82be27;
                    text-align: right;
                }

                &.other{
                    background: #89ddff;
                    border-color: #1abeff;
                    width: 300px;
                    position: absolute;
                    right: 0;
                }
            }
        }
    }

`;

export const AreaSendMessage = styled.div`
    background: #424374;
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 20px;

    input{
        width: 100%;
        height: 30px;
        font-size: 16px;
        outline: none;
        text-indent: 10px;
        margin-right: 5px;
    }

    button{
        width: 100px;
        height: 31px;
        border: 0;
        cursor: pointer;

        &:active{
            position: relative;
            top: 1px;
        }
    }
`;

export const AreaSendMessage = styled.div`
    background: #424374;
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 20px;

    input{
        width: 100%;
        height: 30px;
        font-size: 16px;
        outline: none;
        text-indent: 10px;
        margin-right: 5px;
    }

    button{
        width: 100px;
        height: 31px;
        border: 0;
        cursor: pointer;

        &:active{
            position: relative;
            top: 1px;
        }
    }
`;








