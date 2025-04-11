import { useCallback, useState } from 'react';
import { roomsApi } from '../roomsApi';
import { UseCaseOptions } from '@/interfaces/UseCaseOptions';
import { useFetchValidateToken } from '@/domain/auth/useCases/useFetchValidateToken';

type UseSendInviteAcceptTypes = {
	loading: boolean;
	sendInviteAccept: (token: string) => Promise<void>;
};

export function useSendInviteAccept(options?: UseCaseOptions): UseSendInviteAcceptTypes {
	const [loading, setLoading] = useState(false);
	const { fetchValidateToken } = useFetchValidateToken();

	const sendInviteAccept = useCallback(
		async (token: string): Promise<void> => {
			try {
				setLoading(true);
				await fetchValidateToken(async () => {
					await roomsApi.invitationAccept(token);
				});
				options?.onSucess?.();
			} catch (error) {
				console.log('Error in send invite for accept', error);
				options?.onError?.();
			} finally {
				setLoading(false);
			}
		},
		[fetchValidateToken, options],
	);

	return {
		loading,
		sendInviteAccept,
	};
}
