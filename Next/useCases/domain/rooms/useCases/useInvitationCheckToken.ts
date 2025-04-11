import { useCallback, useState } from 'react';
import { roomsApi } from '../roomsApi';

type UseInvitationCheckTokenTypes = {
	loading: boolean;
	tokenIsavailabled: boolean | undefined;
	invitationCheckToken: (token: string) => Promise<void>;
};

export function useInvitationCheckToken(): UseInvitationCheckTokenTypes {
	const [loading, setLoading] = useState(false);
	const [tokenIsavailabled, setTokenIsavailabled] = useState<boolean>();

	const invitationCheckToken = useCallback(async (token: string): Promise<void> => {
		try {
			setLoading(false);
			const { response } = await roomsApi.invitationCheckToken(token);
			setTokenIsavailabled(response.available);
		} catch (error) {
			console.log('Error in get token invitation availabled', error);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, invitationCheckToken, tokenIsavailabled };
}
