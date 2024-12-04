'use client';

import {
	forwardRef,
	InputHTMLAttributes,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import {
	Container,
	InputSelect,
	Label,
	AreaSelect,
	Icon,
	Message,
	ListSelected,
	ItemSelected,
	Placeholder,
	BoxList,
	Item,
	AreaItem,
	Group,
	Status,
} from './styles';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Checkbox } from '../Checkbox';

export type DataSelectDataTypes = {
	name: string;
	value: string | number | boolean;
	status: boolean;
};

export type OnChangeValuesTypes = {
	data: object | string | number;
};

type MultiSelectProps = {
	label?: string;
	required?: boolean;
	width?: number | string;
	heightBox?: number;
	onClick?: () => void;
	onChange?: (value: DataSelectDataTypes[]) => void;
	data: DataSelectDataTypes[];
	placeholder?: string;
	defaultValue?: DataSelectDataTypes[];
	disabled?: boolean;
	maxSelection?: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue'>;

export interface MultiSelectRef {
	resetSelection: () => void;
}

export const MultiSelect = forwardRef<MultiSelectRef, MultiSelectProps>(
	(
		{
			label,
			required,
			width = 0,
			onClick,
			onChange,
			heightBox = 200,
			data,
			placeholder,
			defaultValue = [],
			disabled = false,
			maxSelection = 9999,
			...rest
		},
		ref,
	): JSX.Element => {
		const [openSelect, setOpenSelect] = useState(false);
		const [selectedItems, setSelectedItems] = useState<DataSelectDataTypes[]>(defaultValue);
		const [error, setError] = useState<string>('');
		const selectRef = useRef<HTMLInputElement>(null);
		const contentRef = useRef<HTMLDivElement>(null);

		const resetSelection = () => {
			setSelectedItems([]);
			onChange?.([]); // Notifica o pai sobre a limpeza
		};

		useImperativeHandle(ref, () => ({
			resetSelection,
		}));

		const handleValidation = () => {
			setTimeout(() => {
				if (required && selectedItems.length === 0) {
					setError('O campo é obrigatório');
				} else {
					setError('');
				}
			}, 300);
		};

		// sem o uso de maximo de seleção (função abaixo)
		/*const handleIncludeValues = (item: DataSelectDataTypes) => {
			setSelectedItems(prevSelected => {
				const alreadySelected = prevSelected.some(
					selectedItem => selectedItem.value === item.value,
				);

				const updatedSelected = alreadySelected
					? prevSelected.filter(selectedItem => selectedItem.value !== item.value) // Remove item
					: [...prevSelected, item]; // Adiciona item

				// Use setTimeout para evitar a chamada imediata
				setTimeout(() => {
					onChange?.(updatedSelected); // Notifica o pai
				}, 0);

				return updatedSelected;
			});
		};*/

		const handleIncludeValues = (item: DataSelectDataTypes) => {
			setSelectedItems(prevSelected => {
				// Verifica se o item já está selecionado
				const alreadySelected = prevSelected.some(
					selectedItem => selectedItem.value === item.value,
				);

				// Se o item não estiver selecionado, e já atingiu o limite de seleção, não permite adicionar mais
				if (!alreadySelected && maxSelection && prevSelected.length >= maxSelection) {
					setError(`Você pode selecionar no máximo ${maxSelection} itens.`);
					return prevSelected; // Não permite adicionar mais itens
				}

				// Adiciona ou remove o item da seleção
				const updatedSelected = alreadySelected
					? prevSelected.filter(selectedItem => selectedItem.value !== item.value) // Remove o item
					: [...prevSelected, item]; // Adiciona o item

				// Notifica o pai sobre a seleção atualizada
				setTimeout(() => {
					onChange?.(updatedSelected);
				}, 0);

				// Limpa a mensagem de erro se o número de itens for válido
				if (updatedSelected.length < maxSelection) {
					setError('');
				}

				return updatedSelected;
			});
		};

		useEffect(() => {
			const handleOutsideClick = (event: MouseEvent) => {
				if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
					setOpenSelect(false);
				}
			};
			document.addEventListener('mousedown', handleOutsideClick);
			return () => {
				document.removeEventListener('mousedown', handleOutsideClick);
			};
		}, []);

		return (
			<Container
				ref={contentRef}
				onBlur={handleValidation}
				$width={width}
				tabIndex={-1}
				$disabled={disabled}
			>
				<Label>{label}</Label>
				<InputSelect
					{...rest}
					$status={error}
					ref={selectRef}
					readOnly
					value={selectedItems.map(item => item.value).join(',')} // Atualiza dinamicamente
				/>
				<AreaSelect
					onClick={() => {
						setOpenSelect(!openSelect);
						onClick?.();
					}}
					$status={error}
				>
					{selectedItems.length === 0 ? (
						<ListSelected>
							<Placeholder>{placeholder}</Placeholder>
						</ListSelected>
					) : (
						<ListSelected>
							{selectedItems.map((names, index) => (
								<ItemSelected key={index}>{names.name}</ItemSelected>
							))}
						</ListSelected>
					)}

					<Icon $open={openSelect}>
						<MdKeyboardArrowDown size={18} color="#9b98a8" />
					</Icon>
				</AreaSelect>
				{error && <Message>{error}</Message>}
				<BoxList $open={openSelect} $heightBox={heightBox}>
					{data.map((items, index) => (
						<AreaItem
							key={index}
							onClick={() => handleIncludeValues(items)}
							$status={items.status}
						>
							<Checkbox
								checked={selectedItems.some(
									selectedItem => selectedItem.value === items.value,
								)}
								onChange={e => {
									e.stopPropagation();
									handleIncludeValues(items);
								}}
							/>
							<Group>
								<Item>{items.name}</Item>
								<Status $status={items.status}>
									{items.status ? 'Disponível' : 'Indisponível'}
								</Status>
							</Group>
						</AreaItem>
					))}
				</BoxList>
			</Container>
		);
	},
);

MultiSelect.displayName = 'MultiSelect';
