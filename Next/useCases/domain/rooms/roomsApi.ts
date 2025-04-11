import { ApiResponseCustomerByToken } from '@/interfaces/CustomerByToken';
import { ApiResponseCustomerGetByEmail } from '@/interfaces/CustomerGetByEmail';
import { ApiResponseDetailGroup } from '@/interfaces/DetailGroupInterface';
import { ApiResponseFormAvailable } from '@/interfaces/FormAvailable';
import { ApiResponseListCustomer } from '@/interfaces/ListCustomer';
import { ApiResponseToken } from '@/interfaces/TokenInterface';
import { ApiResponseTotalRooms } from '@/interfaces/TotalRoomsAvailable';
import { fetchClient } from '@/lib/fetchClient';

async function getCustomerGetByEmail(email: string): Promise<ApiResponseCustomerGetByEmail> {
	const response = await fetchClient<ApiResponseCustomerGetByEmail>(
		'/api/customer/get-by-email',
		{
			method: 'POST',
			body: JSON.stringify({
				email: decodeURIComponent(email),
			}),
		},
	);

	return response;
}

async function getListCustomer(customerId: string): Promise<ApiResponseListCustomer> {
	const response = await fetchClient<ApiResponseListCustomer>(
		'/api/event/event-form-room/get-customers-available',
		{
			method: 'POST',
			body: JSON.stringify({
				customerId,
			}),
		},
	);

	return response;
}

async function getTotalRoomsAvailable(customerId: string): Promise<ApiResponseTotalRooms> {
	const response = await fetchClient<ApiResponseTotalRooms>(
		'/api/event/event-form-room/get-option-available',
		{
			method: 'POST',
			body: JSON.stringify({
				customerId,
			}),
		},
	);

	return response;
}

async function getFormRoomAvailable(customerId: string): Promise<ApiResponseFormAvailable> {
	const response = await fetchClient<ApiResponseFormAvailable>(
		'/api/event/event-form-room/available/by-customer-id',
		{
			method: 'POST',
			body: JSON.stringify({
				customerId,
			}),
		},
	);

	return response;
}

async function saveFormRoom(customerId: string, ownerId: string): Promise<void> {
	await fetchClient('/api/event/event-form-room/save', {
		method: 'POST',
		body: JSON.stringify({
			customerId,
			ownerId,
		}),
	});
}

async function invitationCheckToken(token: string): Promise<ApiResponseFormAvailable> {
	const response = await fetchClient<ApiResponseFormAvailable>(
		'/api/event/event-form-room/available/by-token',
		{
			method: 'POST',
			body: JSON.stringify({
				token,
			}),
		},
	);

	return response;
}

async function invitationAccept(token: string): Promise<void> {
	await fetchClient('/api/event/event-form-room/invite/accept', {
		method: 'POST',
		body: JSON.stringify({
			token,
		}),
	});
}

async function invitationReject(token: string): Promise<void> {
	await fetchClient('/api/event/event-form-room/invite/reject', {
		method: 'POST',
		body: JSON.stringify({
			token,
		}),
	});
}

async function getDataCustomerByToken(token: string): Promise<ApiResponseCustomerByToken> {
	const response = await fetchClient<ApiResponseCustomerByToken>(
		'/api/event/event-form-room/customer/by-token',
		{
			method: 'POST',
			body: JSON.stringify({
				token,
			}),
		},
	);

	return response;
}

async function getDetailsGroupByCustomerId(customerId: string): Promise<ApiResponseDetailGroup> {
	const response = await fetchClient<ApiResponseDetailGroup>(
		'/api/event/event-form-room/group/get-by-customer-id',
		{
			method: 'POST',
			body: JSON.stringify({
				customerId,
			}),
		},
	);

	return response;
}

async function createTokenAcceptOrReject(customerId: string): Promise<ApiResponseToken> {
	const response = await fetchClient<ApiResponseToken>(
		'/api/event/event-form-room/create-token-accept-or-reject',
		{
			method: 'POST',
			body: JSON.stringify({
				customerId,
			}),
		},
	);

	return response;
}

export const roomsApi = {
	getCustomerGetByEmail,
	getListCustomer,
	getTotalRoomsAvailable,
	getFormRoomAvailable,
	saveFormRoom,
	invitationCheckToken,
	invitationAccept,
	invitationReject,
	getDataCustomerByToken,
	getDetailsGroupByCustomerId,
	createTokenAcceptOrReject,
};
