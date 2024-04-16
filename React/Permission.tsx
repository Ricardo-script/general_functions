//src/components/Permission.tsx

import { decrypt } from 'src/utils/functions/cryptografy';

type PermissionProps = {
	children: React.ReactNode;
	permission: string;
};

export const Permission = ({ children, permission }: PermissionProps): JSX.Element | null => {
	let listPermissions: string[] = [];

	const roleFromLocalStorage = localStorage.getItem('@role');

	if (roleFromLocalStorage) {
		try {
			listPermissions = JSON.parse(decrypt(roleFromLocalStorage) || '');
		} catch (error) {
			console.error('Erro ao analisar o JSON do localStorage:', error);
		}
	}
	if (permission === undefined) {
		return children as JSX.Element;
	}
	if (listPermissions.includes(permission)) {
		return children as JSX.Element;
	} else {
		return null;
	}
};


//----------------------------------------------------------------------------------------------------------------------------------

uso: 

<AreaPanel>
	<Permission permission="CONCIERGE_VIEW">
		<CardBox
			icon={<LargeConcierge />}
			title="Portaria"
			description="Administre a entrada de visitantes e filiados"
			onClick={() => navigate('/Portaria')}
		/>
	</Permission>
	<Permission permission="ORDER_LIST_VIEW">
		<CardBox
			icon={<LargeRequest />}
			title="Pedidos"
			description="Administre os pedidos dos usuários"
			onClick={() => navigate('/Pedidos')}
		/>
	</Permission>
	<Permission permission="ORDER_LIST_VIEW">
		{' '}
		{/* temp 'ORDER_LIST_VIEW' */}
		<CardBox
			icon={<LargeUser />}
			title="Usuários"
			description="Administre os usuários e suas permissões"
			onClick={() => navigate('/Usuarios')}
		/>
	</Permission>
	</AreaPanel>
