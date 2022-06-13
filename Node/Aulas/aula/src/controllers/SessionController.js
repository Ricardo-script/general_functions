// metodos: index, show, update, store, destroy
/*
	index: listagem de sessões
	store: criar uma sessão
	show: listar uma unica sessão
	update: alterar uma sessão
	destroy: deletar uma sessão

*/

import User from '../models/User.js';

const store = async (req, res) => {
	const { email } = req.body;

	let user = await User.findOne({ email });

	if (!user) {
		user = await User.create({ email });
	}
	//console.log(user)
	return res.json(user);
}

export default { store }



