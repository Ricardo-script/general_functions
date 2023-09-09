...

<AreaMenu>
	<MenuItem icon={<FaCalendarCheck size={20} color="#FFF" />} title='Agenda' navigate='/Schedule' />
	<MenuItem icon={<FaUserAlt size={18} color="#FFF" />} title='Novo Cliente' navigate='/RegisterClient' />
	<MenuItem icon={<FaUsers size={25} color="#FFF" />} title='Catálogo de Clientes' navigate='/Catalog' />
	<MenuItem icon={<FaListAlt size={20} color="#FFF" />} title='Histórico por Clientes' navigate='/Historic' />
	<MenuItem icon={<PiPaintBrushHouseholdFill size={20} color="#FFF" />} title='Cadastro de Tratamentos' navigate='/RegisterTreatments' />
</AreaMenu>

...
//-------------------------------------------------------------------------------------------------------------------------------------------------------
import { ReactElement } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { Item, AreaItem, AreaIconItem, Title } from './styles'
import { useMenuSideBar } from '@/hooks';


type MenuItemProps = {
    navigate: string
    icon: ReactElement
    title: string
}

export const MenuItem = ({ navigate, icon, title }: MenuItemProps): JSX.Element => {

    const router = useRouter();
    const path = usePathname();
    const { openMenu } = useMenuSideBar();

    const activeMenu = path === navigate                          //path: /Schedule e navigate: /Schedule

    return (
        <Item onClick={() => router.push(navigate)}>
            <AreaItem $activeMenu={activeMenu}>                   //activeMenu vai ser true ou false
                <AreaIconItem>
                    {icon && icon}
                </AreaIconItem>
                <Title $toggle={openMenu}>{title}</Title>
            </AreaItem>
        </Item>
    );
}

//-------------------------------------------------------------------------------------------------------

import { styled } from 'styled-components'

type ActiveItemMenu = {
    $activeMenu?: boolean
}

export const AreaItem = styled.div<ActiveItemMenu>`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0 12px;
	border-radius: 8px;
    background: ${props => props.$activeMenu ? '#565656' : ''};

	&:hover {
		background: #565656;
	}

	&:active {
		background: #65835f;
	}
`;
