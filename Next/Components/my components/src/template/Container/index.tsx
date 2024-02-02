import { Footer } from "./Footer";
import { Content, MainLayout, ScreenContent, Screen } from "./styles";

type ContainerProps = {
    renderHeader?: () => JSX.Element;
    renderSideBar?: () => JSX.Element;
    children: React.ReactNode;
};

export const Container = ({
    renderHeader,
    renderSideBar,
    children,
}: ContainerProps): JSX.Element => {
    return (
        <Content>
            {renderSideBar && renderSideBar()}
            <MainLayout>
                {renderHeader && renderHeader()}
                <ScreenContent>
                    <Screen>{children}</Screen>
                    <Footer />
                </ScreenContent>
            </MainLayout>
        </Content>
    );
};
