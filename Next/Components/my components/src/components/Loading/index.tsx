import { Container, Message } from './styles';
import { DotsAnimate } from './DotsAnimate';

type LoadingProps = {
	open: boolean;
	message?: string;
	lottie?: JSX.Element;
};

export const Loading = ({
	open,
	message = 'Aguarde Carregando',
	lottie,
}: LoadingProps): JSX.Element | null => {
	if (!open) {
		return null;
	}

	return (
		<Container>
			{lottie && lottie}
			<Message>
				{message}
				<DotsAnimate />
			</Message>
		</Container>
	);
};
