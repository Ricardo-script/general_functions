import { CiclePlus } from 'src/assets/icons';
import { Container, HiddenInput } from './styles';
import { useRef } from 'react';

export const InputFile = (): JSX.Element => {
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const handleClick = () => {
		fileInputRef.current?.click();
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			console.log('File selected:', file);
			const reader = new FileReader();
			reader.onload = () => {
				const base64Data = reader.result as string;
				console.log('base64Data:', base64Data);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<Container onClick={handleClick}>
			<CiclePlus />
			<HiddenInput
				accept="image/*"
				type="file"
				ref={fileInputRef}
				onChange={handleFileChange}
			/>
		</Container>
	);
};
