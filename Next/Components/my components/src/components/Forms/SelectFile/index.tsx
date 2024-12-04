import { Attachment } from '@/assets/icons';
import { Container, InputSelect, Label, Title } from './styles';

type SelectFileProps = {
	onUploadFile?: (file: File | null) => void;
	width?: number | string;
};

export const SelectFile = ({ onUploadFile, width }: SelectFileProps): JSX.Element => {
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] || null;
		onUploadFile?.(file);
	};

	return (
		<Container $width={width}>
			<Label htmlFor="file-input">
				<Attachment size={27} />
				<Title>Anexar boleto</Title>
				<InputSelect type="file" id="file-input" onChange={handleFileChange} />
			</Label>
		</Container>
	);
};
