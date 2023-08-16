import { initializeApp } from 'firebase/app'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useMemo, useState } from 'react'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBczcIuVRKdm0lspSmG3TkcigvLAOJBd1Y",
  authDomain: "reactfirebase-4168c.firebaseapp.com",
  projectId: "reactfirebase-4168c",
});


export default function App(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);


    const db = getFirestore(firebaseApp);
    //const userCollectionRef = collection(db, 'users');// para o uso de uma chamada sem useEffect
    const userCollectionRef = useMemo(() => collection(db, 'users'), [db]); //evita o loop infinito do useEffect


    //GET
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }
        getUsers();
    }, [userCollectionRef, setUsers]);

    //POST
    const criarUser = async () => {
        await addDoc(userCollectionRef, { name, email })
    }

    //DELETE
    const deleteUser = async (id) => {
        const userDoc = doc(db, 'users', id) // banco, nome da tabela, id
        await deleteDoc(userDoc)
    }

    //UPDATE
    const editDados = async () => {
        const userDoc = doc(db, "users", 'cc4MS0VOJ1tU1STRc1nO')
        await updateDoc(userDoc, {
            name: 'Rick'
        });
    }

    return (
        <div>
            <ul>
                {
                    users.map(user => (
                        <div key={user.id}>
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </div>
                    ))
                }
            </ul>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={editDados}>Editar</button>
                <button onClick={criarUser}>Salvar</button>
            </div>
        </div>
    )
}
