import { useCallback, useState } from 'react';
import { roomsApi } from '../roomsApi';
import { UseCaseOptions } from '@/interfaces/UseCaseOptions';
import { useFetchValidateToken } from '@/domain/auth/useCases/useFetchValidateToken';

type UseSendInviteRejectTypes = {
	loading: boolean;
	sendInviteReject: (token: string) => Promise<void>;
};

export function useSendInviteReject(options?: UseCaseOptions): UseSendInviteRejectTypes {
	const [loading, setLoading] = useState(false);
	const { fetchValidateToken } = useFetchValidateToken();

	const sendInviteReject = useCallback(
		async (token: string): Promise<void> => {
			try {
				setLoading(true);
				await fetchValidateToken(async () => {
					await roomsApi.invitationReject(token);
				});
				options?.onSucess?.();
			} catch (error) {
				console.log('Error in invite for reject', error);
				options?.onError?.();
			} finally {
				setLoading(false);
			}
		},
		[fetchValidateToken, options],
	);

	return {
		loading,
		sendInviteReject,
	};
}
