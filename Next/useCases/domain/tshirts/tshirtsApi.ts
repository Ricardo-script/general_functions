import { ApiResponseCheckEditTshirt } from '@/interfaces/TshirtInterface';
import { fetchClient } from '@/lib/fetchClient';

async function checkEditForm(customerId: string): Promise<ApiResponseCheckEditTshirt> {
	const response = await fetchClient<ApiResponseCheckEditTshirt>(
		'/api/event/event-form-tshirt/tshirt/check-edit',
		{
			method: 'POST',
			body: JSON.stringify({
				customerId,
			}),
		},
	);

	return response;
}

async function saveFormTshirt(customerId: string, tshirt: string): Promise<void> {
	await fetchClient('/api/event/event-form-tshirt/tshirt/save', {
		method: 'POST',
		body: JSON.stringify({
			customerId,
			tshirt,
		}),
	});
}

export const tshirtApi = {
	checkEditForm,
	saveFormTshirt,
};
