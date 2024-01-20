'use client'

import styled from 'styled-components'
import Image from 'next/image'

type SideBarProps = {
    $toggle?: boolean;
};

export const Container = styled.div`
   background: #dfdfdf;
   border-radius: 0 0 16px 0;
   position: relative;
   z-index: 2;
`;

export const Menu = styled.nav<SideBarProps>`
    width: ${props => props.$toggle ? '250px' : '65px'};
    height: 100vh;
    border-radius: 0 16px 16px 0;
    background: #161A23;
    transition: .3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 9px;
    user-select: none;

    @media(max-width: 720px){
        width: ${props => props.$toggle ? '100vw' : '65px'};
        border-radius: 0;
    }
`;

export const HeaderAside = styled.div`
    display: flex;
    width: 100%;
    padding: 0 8px;
    align-items: center;
    justify-content: space-between;
    position: relative;
    transition: 0.3s;
`;

export const Divider = styled.hr`
    border: 0;
    border-bottom: 1px solid #2D2F39;
    border-radius: 8px;
    width: 80%;
    margin: 0 auto 15px;
`;

export const Title = styled.span`
    font-size: 11px;
    font-weight: 400;
    color: #9e9e9e;
    padding: 0 7px;
    text-transform: uppercase;
    margin-bottom: 15px;
`;

export const AreaLogo = styled.div<SideBarProps>`
    display: flex;
    gap: 5px;
    width: ${props => props.$toggle ? '186px' : '30px'};
    max-height: 30px;
`;

export const IconLogo = styled.div`
    min-width: 30px;
`;

export const AreaTitle = styled.div`
    overflow: hidden;
`;

export const TitleHeader = styled.span`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 28.8px;
    color: #fff;
    text-align: center;
    position: relative;
`;

export const AreaIcon = styled.div<SideBarProps>`
    width: 27px;
    min-width: 27px;
    height: 27px;
    min-height: 27px;
    background: #161A23;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #9e9e9e;
    border-radius: 14px;
    position: absolute;
    right: -22px;
    rotate: ${props => props.$toggle ? '180deg' : '0'};
    transition: .3s;
    cursor: pointer;

    @media(max-width: 720px){
        right: ${props => props.$toggle ? '15px' : '-25px'};
    }
`;

export const MenuFooter = styled.div`
    
`;

export const ItemFooter = styled.div`
    width: 100%;
    height: 60px;
	display: flex;
	align-items: center;
    justify-content: space-between;
	padding: 0 2px;
	border-radius: 8px;
	gap: 16px;

	&:hover {
		background: #2D2F39;
        transition: .3s;
	}
`;

export const AreaLogoUser = styled.div`
	width: 41px;
    min-width: 41px;
`;

export const LogoUser = styled(Image)`
	width: 100%;
	height: auto;
	object-fit: cover;
`;

export const AreaMenu = styled.div`
	overflow: scroll;
    width: 100%;
	height: 100vh;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const AreaInfoUser = styled.div<SideBarProps>`
	display: ${props => (props.$toggle ? 'flex' : 'none')};
	flex-direction: column;
	width: 100%;
    gap: 8px;
`;

export const Name = styled.span`
	font-family: 'Inter', sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 120%;
	color: #fff;
`;

export const Email = styled.span`
	font-family: 'Inter', sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 11px;
	line-height: 120%;
	color: #808080;
`;

export const Options = styled.div<SideBarProps>`
	display: ${props => (props.$toggle ? 'block' : 'none')};
	width: 25px;
	height: 25px;
	cursor: pointer;
`;
