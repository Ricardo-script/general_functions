'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Main = styled.div``;

export const AreaCountdown = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
`;

export const BoxCount = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.25);
	width: 80px;
	height: 80px;
	border-radius: 5px;

	@media screen and (max-width: 600px) {
		background-color: #fff;
		width: 250px;
		height: 60px;
		margin: 0;
		flex-direction: row;
		justify-content: space-between;
		padding: 20px;
	}
`;

export const Number = styled.span`
	font-weight: 700;
	font-size: 44px;
	color: #caa78c;
`;

export const Title = styled.span`
	font-weight: 500;
	font-size: 10px;
	color: #575655;
`;

export const CountDown: React.FC = () => {
	const [countdown, setCountdown] = useState<string[]>(['00', '00', '00', '00', '00']);

	useEffect(() => {
		const newDate = new Date('05-10-2024 00:00:00').getTime();
		const countdownInterval = setInterval(() => {
			const date = new Date().getTime();
			const diff = newDate - date;

			const month = Math.floor(
				(diff % (1000 * 60 * 60 * 24 * (365.25 / 12) * 365)) /
					(1000 * 60 * 60 * 24 * (365.25 / 12)),
			);
			const days = Math.floor(
				(diff % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24),
			);
			const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((diff % (1000 * 60)) / 1000);

			setCountdown([
				month < 10 ? '0' + month : String(month),
				days < 10 ? '0' + days : String(days),
				hours < 10 ? '0' + hours : String(hours),
				minutes < 10 ? '0' + minutes : String(minutes),
				seconds < 10 ? '0' + seconds : String(seconds),
			]);

			if (diff <= 0) {
				clearInterval(countdownInterval);
				setCountdown(['Happy', 'Birthday', 'Ahmed', '', '']);
			}
		}, 1000);

		return () => clearInterval(countdownInterval);
	}, []);

	return (
		<Main>
			<AreaCountdown>
				<BoxCount>
					<Number className="number months">{countdown[0]}</Number>
					<Title>Meses</Title>
				</BoxCount>
				<BoxCount>
					<Number className="number days">{countdown[1]}</Number>
					<Title>Dias</Title>
				</BoxCount>
				<BoxCount>
					<Number className="number hours">{countdown[2]}</Number>
					<Title>Horas</Title>
				</BoxCount>
				<BoxCount>
					<Number className="number minutes">{countdown[3]}</Number>
					<Title>Minutos</Title>
				</BoxCount>
				<BoxCount>
					<Number className="number seconds">{countdown[4]}</Number>
					<Title>Segundos</Title>
				</BoxCount>
			</AreaCountdown>
		</Main>
	);
};

