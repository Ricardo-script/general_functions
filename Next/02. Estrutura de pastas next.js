/*estrutura de pastas

-src
    -app
        --Home (pasta)
            -page.tsx
            -styles.tsx
        --Login (pasta)
            -page.tsx
            -styles.tsx
        -page.tsx (primeira página a ser renderizada)
    -assets
    -components
        --Modal
            -index.tsx
            -styles.tsx
        --SideBar
            -index.tsx
            -styles.tsx
    -context
    -hooks
    -interfaces
    -lib
    -styles
    -types




 - arquivo page.tsx de dentro de app é a 1ª página a ser renderizada

import Login from '@/app/Login/page';

const Main = (): JSX.Element => <Login />;

export default Main;

/*
