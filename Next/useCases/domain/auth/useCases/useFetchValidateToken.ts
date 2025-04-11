import useAuth from '@/hooks/useAuth';
import { FetchError } from '@/lib/fetchClient/error';

type UseFetchValidateTokenReturn = {
	fetchValidateToken<T>(request: RequestFunction<T>): Promise<T>;
};

type RequestFunction<T> = () => Promise<T>;

export function useFetchValidateToken(): UseFetchValidateTokenReturn {
	const { login } = useAuth({ redirectToHome: false });

	async function fetchValidateToken<T>(request: RequestFunction<T>): Promise<T> {
		try {
			return await request();
		} catch (error) {
			if (error instanceof FetchError && error.status === 401) {
				await login({
					email: String(process.env.NEXT_PUBLIC_EMAIL),
					password: String(process.env.NEXT_PUBLIC_PASSWORD),
				});

				return await request();
			}

			return Promise.reject(error);
		}
	}

	return { fetchValidateToken };
}
