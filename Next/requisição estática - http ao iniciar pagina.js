// requisição estática
export default async function Home(): Promise<JSX.Element> {

	const response = await fetch('https://api.github.com/users/ricardo-script');
	const user = await response.json();

	return (
		<div>
			<h1>Home</h1>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</div>
	);
}


//------------------------------------------------------------------------------------------------

//Revalidate: Revalidação e cache


export default async function Home(): Promise<JSX.Element> {
	const response = await fetch('https://api.github.com/users/ricardo-script', {
		next: {
			revalidate: 30,
		}
	});
	const user = await response.json();

	return (
		<div>
			<h1>Home</h1>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</div>
	);
}

/*
	next: {
		revalidate: 30,
	}
	O Next vai revalidar automaticamente esta chamada fetch única e não a pagina inteira a cada 30 segundos e o resto continuará estatico
*/


