import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
	id: number;
	email: string;
	body: string;
}

function App() {

	const [user, setUser] = useState<[User]>();

	useEffect(() => {
		loadData();
	},[]);

	async function loadData(){
		await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
			.then( res => {setUser(res.data); console.log(res.data)})
			.catch( err => console.log(err))
	}

	return (
		<div>
			{user?.map( (item: User) => (
				<ul key={item.id}>
					<li>{item.id}</li>
					<li>{item.email}</li>	
				</ul>
			))}
		</div>
	);
}

export default App;