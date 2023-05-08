export default async function Home(): Promise<JSX.Element> {
	const response = await fetch('https://api.github.com/users/ricardo-script', {
		cache: 'no-store'
	});
	const user = await response.json();

	return (
		<div>
			<h1>Home</h1>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</div>
	);
}

/**
 * cache: 'force-cache' vem por padrão, quer dizer que eu quero forçar a requisição para que sempre tenha a sua resposta
 * cacheada, ou seja toda vez que usuários diferentes acessarem a mesma página todos eles recebam a mesma versão da resposta,
 * então, eu faço uma unica requisição api e retorno a mesma resposta pra todo mundo
 *
 *
 * cache: 'no-store' não armazena a resposta em cache para todos os usuários, ou seja sempre que usuários diferente acessarem
 * essa página, todos eles vão executar uma chamada diferente na api