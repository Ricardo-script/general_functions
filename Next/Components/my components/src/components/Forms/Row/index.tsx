import { AreaRow } from './styles';

export type RowProps = {
	children: React.ReactNode;
	gap?: number;
	alignItems?: 'center' | 'flex-end' | 'flex-start';
};

export const Row = ({ children, gap = 8, alignItems = 'center' }: RowProps): JSX.Element => {
	return (
		<AreaRow $gap={gap} $alignItems={alignItems}>
			{children}
		</AreaRow>
	);
};
