import { ReactElement } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { Item, AreaItem, AreaIconItem, Title, AreaTitle, PopHover } from './styles'

type MenuItemProps = {
    navigate: string
    icon: ReactElement
    title: string
    toggleMenu: boolean
}

export const MenuItem = ({ navigate, icon, title, toggleMenu }: MenuItemProps): JSX.Element => {

    const router = useRouter();
    const path = usePathname();
    const activeMenu = path === navigate

    return (
        <Item onClick={() => router.push(navigate)}>
            <AreaItem $activeMenu={activeMenu}>
                <AreaIconItem>
                    {icon && icon}
                </AreaIconItem>
                <AreaTitle>
                    <Title $toggle={toggleMenu}>{title}</Title>
                </AreaTitle>
                {!toggleMenu &&
                    <PopHover>{title}</PopHover>
                }
            </AreaItem>
        </Item>
    );
}