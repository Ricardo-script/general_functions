import { DataLockInterface } from '@/interfaces/DataLockInterface';
import { ResponseApiTransferCustomerId } from '@/interfaces/TransferCustomerIdInterface';
import {
	ApiResponseListTypeTransfer,
	ApiResponseTransferredAvailable,
	BodyResponseTransferOut,
	BodyResponseTransferReturn,
} from '@/interfaces/TransferredInterface';
import { fetchClient } from '@/lib/fetchClient';

async function checkEditFormTransferred(
	customerId: string,
	typeTransfer: 'return' | 'out',
): Promise<ApiResponseTransferredAvailable> {
	const response = await fetchClient<ApiResponseTransferredAvailable>(
		'/api/event/event-form-transfer/check-edit',
		{
			method: 'POST',
			body: JSON.stringify({
				customerId,
				typeTransfer,
			}),
		},
	);

	return response;
}

async function saveFormTransferOut(body: BodyResponseTransferOut): Promise<void> {
	await fetchClient('/api/event/event-form-transfer/save/out', {
		method: 'POST',
		body: JSON.stringify(body),
	});
}

async function saveFormTransferReturn(body: BodyResponseTransferReturn): Promise<void> {
	await fetchClient('/api/event/event-form-transfer/save/return', {
		method: 'POST',
		body: JSON.stringify(body),
	});
}

async function getDataTransferByCustormerId(
	customerId: string,
): Promise<ResponseApiTransferCustomerId> {
	const response = await fetchClient<ResponseApiTransferCustomerId>(
		'/api/event/event-form-transfer/get-by-customer-id',
		{
			method: 'POST',
			body: JSON.stringify({
				customerId,
			}),
		},
	);

	return response;
}

async function getDataLockEdit(): Promise<DataLockInterface> {
	const response = await fetchClient<DataLockInterface>(
		'/api/event/event-form-transfer/get-data-lock-edit',
		{
			method: 'POST',
		},
	);

	return response;
}

async function updateLockEdit(typeTransfer: 'out' | 'return', blocked: boolean): Promise<void> {
	await fetchClient('/api/event/event-form-transfer/update-lock-edit', {
		method: 'POST',
		body: JSON.stringify({
			typeTransfer,
			blocked,
		}),
	});
}

async function getListTypeTransfer(): Promise<ApiResponseListTypeTransfer> {
	const response = await fetchClient<ApiResponseListTypeTransfer>(
		'/api/event/event-form-transfer/types/all',
		{
			method: 'GET',
		},
	);

	return response;
}

export const transferredApi = {
	checkEditFormTransferred,
	saveFormTransferOut,
	saveFormTransferReturn,
	getDataTransferByCustormerId,
	getDataLockEdit,
	updateLockEdit,
	getListTypeTransfer,
};
