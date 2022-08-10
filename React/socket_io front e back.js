/*
	Em server (back):
	npm install socket.io
	yarn add socket.io
	
	
	Em client (front):
	yarn add socket.io-client
*/


//-------------------------------------Basic example-------------------------------------------------

//-------------------------------------back-end:-----------------------------------------------------

import express from 'express';
import { Server } from 'socket.io';

const app = express();

const io = new Server(3001,{ 
    cors:{origin:"*"}
});

io.on('connection', (socket) => {
    //enviar mensagem para o cliente
    socket.emit('hello', 'world');

    //recebe mensagem do cliente
    socket.on('howdy', (arg) => {
        console.log(arg);
    });
});


app.listen(80, () => {
    console.log('local: http://localhost:80');
});


//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//-------------------------------------front-end:----------------------------------------------------

import { io } from "socket.io-client";

export default function App(){

	const socket = io('ws://localhost:3001')

	//recebe mensagem do servidor
	socket.on('hello', (arg) => {
		console.log(arg)
	});

	//envia mensagem para o servidor
	socket.emit('howdy', 'stranger');


	return(
		<span>front</span>
	);
}