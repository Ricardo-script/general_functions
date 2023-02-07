// ReactJs + ElectronJs
/*
 - 1. create-react-app [name]
 - 2. yarn add cross-env electron-is-dev                                 //ou// npm install --save cross-env electron-is-dev
 - 3. yarn add --dev concurrently electron electron-builder wait-on     //ou// npm install concurrently electron electron-builder wait-on
 */
 
 
/*mudanças em  arquivo package.json.
Adicione as informações abaixo em seu arquivo package.json:*/

"description": "<your project description>",
"author": "<author of app>",
"build": {
"appId": "<com.your_app>"
},
"main": "public/electron.js",
"homepage": "./",

//e atualize o elemento de scripts dentro de seu package.json:
"scripts": {
"react-start": "react-scripts start",
"react-build": "react-scripts build",
"react-test": "react-scripts test --env=jsdom",
"react-eject": "react-scripts eject",
"electron-build": "electron-builder",
"release": "yarn react-build && electron-builder --publish=always",
"build": "yarn react-build && yarn electron-build",
"start": "concurrently \"cross-env BROWSER=none yarn react-start\" \"wait-on http://localhost:3000 && electron .\""
},


//---------------------------------------------------------------------------------------------------------------------------

//criar um arquivo “ electron.js ” dentro da pasta Public do diretório do seu projeto e cole o código abaixo dentro dele:
 
const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 900, height: 680 });
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.setMenuBarVisibility(false);//ocultar menu padrão
    mainWindow.maximize();//abrir maximizado
}

app.whenReady().then(() => {
    createWindow();

    app.on("active", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

//--------------------------------------------------------------------------------------------------------------------------

/*yarn start
or
npm run start*/

//---------------------------------------------------------------------------------------------------------------------------


//*** Build da aplicação:
 /*yarn build //ou// npm run build*/

/*Assim que o comando yarn build for bem-sucedido, você poderá ver que uma nova pasta dist foi criada dentro da pasta do seu projeto.
Navegue dentro dessa pasta e você encontrará o arquivo do instalador do seu aplicativo.*/


//---------------------------------------------------------------------------------------------------------------------------

//***********************************IMPORTANTE
//Em rotas, BrowserRouter não funciona, trocar por HashRouter:
//BrowserRouter destina-se a ambientes baseados em solicitação, ao passo que HashRouterse destina a ambientes baseados em arquivo.

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

const MainNavigation = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </HashRouter>
    );
}

export default MainNavigation;

//-----------------------------------------------------------------

//App.jsx
import MainNavigation from "./routes";

const App = () => <MainNavigation />

export default App;

//-----------------------------------------------------------------

//exemplos de link:

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div>
            <h1>Home</h1>
            <Link to="/Cadastro">Cadastro</Link>
        </div>
    );
}



//---------------------------------------------------------------------------------------------------------------------------

//trocar icone da barra:

"build": {
  "appId": "com.my-website.my-app",
  "productName": "MyApp",
  "copyright": "Copyright © 2019 ${author}",
  "mac": {
    "icon": "./public/icons/mac/icon.icns",     <---------- set Mac Icons
    "category": "public.app-category.utilities"
  },
  "win": {
    "icon": "./public/icons/png/256x256.png" <---------- set Win Icon
  },
  "files": [
    "./build/**/*",
    "./dist/**/*",
    "./node_modules/**/*",
    "./public/**/*",       <---------- need for get access to icons
    "*.js"
  ],
  "directories": {
    "buildResources": "public" <---------- folder where placed icons
  }
},



//------------------------------------------------------------------------------------------------------------------
//mainWindow.setMenuBarVisibility(false) //ocultar menu

// código basico:
const { app, BrowserWindow } = require('electron');

function createWindow() {

    const win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL('http://localhost:3000');
}

app.on('ready', createWindow);

/* No arquivo package.json:
 - inserir no objeto scripts => "electron": "electron .",
 - o arquivo será executado como: yarn start em um cmd e yarn electron em outro cmd
 */

//-----------------------------------------------------------------------------------------------------------------------------