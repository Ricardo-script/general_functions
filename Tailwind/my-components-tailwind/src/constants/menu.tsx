import { Home } from "@/components/SideBar/assets/icons";
import { SideBarTypes } from "@/components/SideBar";

export const menu: SideBarTypes[] = [
    {
        name: "Home",
        icon: <Home />,
        navigate: "/",
    },
    {
        name: "Usuários",
        icon: <Home />,
        navigate: "/Usuarios",
        subMenu: [
            { subMenuTitle: "Novo usuário", navigate: "/cadastro" },
            {
                subMenuTitle: "Gerenciar usuários",
                navigate: "/gerenciar-usuarios",
            },
        ],
    },
    {
        name: "Cadastros",
        icon: <Home />,
        navigate: "/home",
    },
    {
        name: "Configurações",
        icon: <Home />,
        navigate: "/home",
        subMenu: [
            { subMenuTitle: "Novo usuário", navigate: "/cadastro" },
            {
                subMenuTitle: "Gerenciar usuários",
                navigate: "/",
            },
            {
                subMenuTitle: "Gerenciar usuários",
                navigate: "/",
            },
            {
                subMenuTitle: "Gerenciar usuários",
                navigate: "/",
            },
        ],
    },
];
