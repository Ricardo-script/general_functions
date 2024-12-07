import React from 'react';
import { ArrowPrev, ArrowNext } from '@/assets/icons';
import { Container, List, Page, Dots, Next, Prev } from './styles';

type PaginationProps = {
	count: number;
	onChangePage: (page: number) => void;
	backgroundColor?: string;
	page: number; // A página ativa será controlada externamente pelo pai
};

export const Pagination = ({
	count = 1,
	page = 1,
	onChangePage,
	backgroundColor = '#e9f3f2',
}: PaginationProps): JSX.Element => {
	// Navegar para a página anterior
	const handlePrevPage = (): void => {
		if (page > 1) {
			onChangePage(page - 1); // Atualiza a página no componente pai
		}
	};

	// Navegar para a próxima página
	const handleNextPage = (): void => {
		if (page < count) {
			onChangePage(page + 1); // Atualiza a página no componente pai
		}
	};

	// Renderizar os botões de página
	const renderPages = (): JSX.Element[] => {
		const pages = [];
		const maxVisiblePages = 7;

		if (count <= maxVisiblePages) {
			// Caso o total de páginas seja menor ou igual ao máximo visível
			for (let i = 1; i <= count; i++) {
				pages.push(
					<Page
						key={i}
						onClick={() => onChangePage(i)} // Atualiza a página ao clicar
						$isActive={page === i} // Define a página ativa
					>
						{i}
					</Page>,
				);
			}
		} else {
			// Caso o total de páginas seja maior que o máximo visível
			let start = Math.max(
				1,
				Math.min(page - Math.floor(maxVisiblePages / 2), count - maxVisiblePages + 1),
			);
			let end = Math.min(start + maxVisiblePages - 1, count);

			if (start === 1) {
				end = maxVisiblePages;
			} else if (end === count) {
				start = Math.max(1, end - maxVisiblePages + 1);
			}

			for (let i = start; i <= end; i++) {
				pages.push(
					<Page
						key={i}
						onClick={() => onChangePage(i)} // Atualiza a página ao clicar
						$isActive={page === i} // Define a página ativa
					>
						{i}
					</Page>,
				);
			}

			// Adiciona reticências e página inicial, se necessário
			if (start > 1) {
				pages.unshift(
					<React.Fragment key="start">
						<Page
							key={1}
							onClick={() => onChangePage(1)} // Vai para a página 1
							$isActive={page === 1}
						>
							{1}
						</Page>
						<Dots>...</Dots>
					</React.Fragment>,
				);
			}

			// Adiciona reticências e página final, se necessário
			if (end < count) {
				pages.push(
					<React.Fragment key="end">
						<Dots>...</Dots>
						<Page
							key={count}
							onClick={() => onChangePage(count)} // Vai para a última página
							$isActive={page === count}
						>
							{count}
						</Page>
					</React.Fragment>,
				);
			}
		}

		return pages;
	};

	return (
		<Container $backgroundColor={backgroundColor}>
			<List>
				<Prev onClick={handlePrevPage}>
					<ArrowPrev size={10} />
				</Prev>
				{renderPages()}
				<Next onClick={handleNextPage}>
					<ArrowNext size={10} />
				</Next>
			</List>
		</Container>
	);
};
