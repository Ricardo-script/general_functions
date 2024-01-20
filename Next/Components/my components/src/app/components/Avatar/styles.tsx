'use client'

import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
    width: 40px;
    height: 40px;
`;

export const Photo = styled(Image)`
    width: 100%;
	height: auto;
	object-fit: cover;
    border-radius: 10px;
`;