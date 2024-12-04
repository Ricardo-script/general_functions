import { AttachmentImg } from '@/assets/icons';
import { Container, InputSelect, Label, Title } from './styles';

type SelectGalleryProps = {
	onTakePicture?: (file: File | null) => void;
	onTakeBase64?: (imageBase64: string | ArrayBuffer | null) => void;
};

export const SelectGallery = ({ onTakeBase64, onTakePicture }: SelectGalleryProps): JSX.Element => {
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] || null;
		onTakePicture?.(file);

		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				const base64String = reader.result;
				onTakeBase64?.(base64String);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<Container>
			<Label htmlFor="file-input">
				<AttachmentImg size={25} />
				<Title>Selecionar uma foto da galeria</Title>
				<InputSelect type="file" id="file-input" onChange={handleFileChange} />
			</Label>
		</Container>
	);
};
