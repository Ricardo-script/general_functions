//formularios/page.tsx

import { fetchServer } from '@/lib/fetchServer';
import FormsTemplate from './FormsTemplate';
import { ResponseListClient } from '@/interfaces/ListClientInterface';

export default async function Forms(): Promise<JSX.Element> {
	async function fetchListClient(page: number = 1, role: string = '', filterLike: string = '') {
		'use server';
		const response = await fetchServer<ResponseListClient>('/api/customer/list', {
			method: 'POST',
			body: JSON.stringify({
				page,
				role,
				filterLike,
			}),
		});

		if (response.success) {
			return response.response.data.items;
		} else {
			return [];
		}
	}

	const listClient = await fetchListClient();

	return <FormsTemplate data={listClient} refleshData={fetchListClient} />;
}


//---------------------------------------------------------------------------------------------------------------------------

//formularios/FormsTemplate.tsx
'use client';

import { useState } from 'react';
import { BoxPanel } from '@/components/BoxPanel';
import { Container } from '@/templates/Container';
import { Header } from '@/templates/Header';
import { Sidebar } from '@/templates/Sidebar';
import { AreaSearch, AreaTable, Content } from './styles';
import { Button, Input, Select } from '@/components/Forms';
import { DataSelectTypes } from '@/components/Forms/Select';
import { TableForm } from '@/templates/TableForm';
import { Pagination } from '@/components/Pagination';

import { ItemClientData } from '@/interfaces/ListClientInterface';

type FormsTemplateProps = {
	data: ItemClientData[];
	refleshData: (page: number, role: string, filterLike: string) => Promise<ItemClientData[]>;
};

export default function FormsTemplate({ data, refleshData }: FormsTemplateProps): JSX.Element {
	const [clients, setClients] = useState<ItemClientData[]>(data);
	const dataSelect: DataSelectTypes[] = [{ name: 'Teste', value: 'Teste' }];

	const handleSearch = async (): Promise<void> => {
		const newClients = await refleshData(1, '', '');
		setClients(newClients);
	};

	return (
		<Container
			renderHeader={() => <Header title="Formulário" />}
			renderSideBar={() => <Sidebar />}
		>
			<Content>
				<AreaSearch>
					<Input label="Buscar" placeholder="Buscar por nome ou e-mail" />
					<Select
						label="Cargo"
						data={dataSelect}
						width={200}
						placeholder="Selecione o cargo"
					/>
					<Button width={40} onClick={handleSearch}>
						Buscar
					</Button>
				</AreaSearch>
				<BoxPanel title="Formulário">
					<AreaTable>
						<TableForm data={clients} />
					</AreaTable>
				</BoxPanel>
				<Pagination count={5} onChangePage={page => console.log(page)} />
			</Content>
		</Container>
	);
}

//---------------------------------------------------------------------------------------------------------

//TableForm.tsx

import { Table, Tbody, Td, Th, Thead, Tr } from '@/components/Table';
import { Badge } from './styles';
import { ItemClientData } from '@/interfaces/ListClientInterface';

type FormsTemplateProps = {
	data: ItemClientData[];
};

export const TableForm = ({ data }: FormsTemplateProps): JSX.Element => {
	return (
		<Table $minWidth={1060}>
			<Thead>
				<Tr>
					<Th>Id</Th>
					<Th>Nome</Th>
					<Th>Gênero</Th>
					<Th>Cargo</Th>
					<Th>Status</Th>
				</Tr>
			</Thead>
			<Tbody>
				{data.map((item, index) => (
					<Tr key={index}>
						<Td>00</Td>
						<Td>{item.name.fullName}</Td>
						<Td>{item.gender.description}</Td>
						<Td>{item.status.description}</Td>
						<Td>
							<Badge $status={true}>Disponível</Badge>
						</Td>
					</Tr>
				))}
			</Tbody>
		</Table>
	);
};
