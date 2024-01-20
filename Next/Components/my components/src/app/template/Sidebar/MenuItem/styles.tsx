import { styled } from 'styled-components'

type SideBarStatus = {
    $toggle?: boolean
};

type ActiveItemMenu = {
    $activeMenu?: boolean
}

export const Item = styled.li`
	width: 100%;
	height: 40px;
	border-radius: 8px;
	transition: 0.3s;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const Title = styled.span<SideBarStatus>`
	display: ${props => (props.$toggle ? 'block' : 'none')};
	font-family: 'Inter', sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 120%;
	color: #9e9e9e;
    width: 182px;
`;

export const PopHover = styled.span`
    background: #2D2F39;
    width: 110px;
    padding: 10px 15px;
    border-radius: 5px;
    position: absolute;
    right: -120px;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    color: #cecccc;
    display: none;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -18px;
        margin-top: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent #2D2F39 transparent transparent;
    }
`;

export const AreaItem = styled.div<ActiveItemMenu>`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0 7px;
	border-radius: 8px;
    gap: 5px;
    background: ${props => props.$activeMenu ? '#2D2F39' : ''};

	&:hover {
		background: #2D2F39;

        ${Title}{
            color: #FFF;
        }

        ${PopHover}{
            display: block;

            @media(max-width: 720px){
                display: none;
            }
        }
	}

	&:active {
		background: #65835f;
	}
`;

export const AreaIconItem = styled.div`
	width: 32px;
    min-width: 32px;
	height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AreaTitle = styled.div`
    overflow: hidden;
`;
