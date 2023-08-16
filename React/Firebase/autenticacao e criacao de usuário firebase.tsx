//src/utils/firebase.ts

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCOlkM-VJqBYOhrem90Nom0AKkA4mxwI9Y",
    authDomain: "loadcode-28f24.firebaseapp.com",
    projectId: "loadcode-28f24",
    storageBucket: "loadcode-28f24.appspot.com",
    messagingSenderId: "342386965597",
    appId: "1:342386965597:web:56d8ee3b334132efbb21b4",
    measurementId: "G-YQRRXQJ29V"
});


const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth }

---------------------------------------------------------------------

'use client'

import { useEffect } from 'react'
import { db, auth } from '@/utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'


export default function Home() {


    const createNewUser = async () => {
        await createUserWithEmailAndPassword(auth, 'teixeira.rcd@gmail.com', 'Rick@81574136')
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                if (err.code === 'auth/weak-password') {
                    console.log('Senha muito fraca, a senha deve ter pelo menos 6 caracteres!')
                    return
                }
                if (err.code === 'auth/email-already-in-use') {
                    console.log('E-mail já existe!')
                    return
                }
            })
    }

    const login = async () => {
        await signInWithEmailAndPassword(auth, 'teixeira.rcd@gmail.com', 'Rick@81574136')
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const logout = async () => {
        await signOut(auth)
    }

    //verifica se o usuário esta logado
    useEffect(() => {
        const checkLogin = async () => {
            onAuthStateChanged(auth, (user) => {
                if (user) { //se o usuário estiver logado faça isso:
                    console.log(user)
                } else {
                    console.log(user)
                }
            })
        }

        checkLogin();
    }, []);


    return (
        <div>
            <span>Inicio</span>
            <button onClick={createNewUser}>Novo Usuário</button>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
