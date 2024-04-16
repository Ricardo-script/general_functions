import { Container, Box } from './styles';
import { ContentBox } from '../ContentBox';
import teste from '@/assets/images/studentsCover.png';
import quickActions from '@/assets/images/quickActions.png';

export const SlideBox1 = (): JSX.Element => {
	return (
		<Container>
			<Box>
				<ContentBox src={quickActions} title="Ações Rápidas" description="" />
				<ContentBox src={teste} title="Ações Rápidas" description="" />
			</Box>
			<Box>
				<ContentBox src={teste} title="Ações Rápidas" description="" />
				<ContentBox src={teste} title="Ações Rápidas" description="" />
			</Box>
		</Container>
	);
};

export const SlideBox2 = (): JSX.Element => {
	return (
		<Container>
			<Box>
				<ContentBox src={teste} title="Ações Rápidas" description="" />
			</Box>
		</Container>
	);
};
