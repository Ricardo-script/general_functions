import { BreadCrumbs } from "./Breadcrumbs";
import { Footer } from "./Footer";
import { Content, MainLayout, ScreenContent, Screen } from "./styles";

type BreadCrumbsTypes = {
    screen: string;
    navigate: string;
};

type ContainerProps = {
    renderHeader?: () => JSX.Element;
    renderSideBar?: () => JSX.Element;
    breadcrumbs?: BreadCrumbsTypes[];
    children: React.ReactNode;
};

export const Container = ({
    renderHeader,
    renderSideBar,
    breadcrumbs,
    children,
}: ContainerProps): JSX.Element => {
    return (
        <Content>
            {renderSideBar && renderSideBar()}
            <MainLayout>
                {renderHeader && renderHeader()}
                <ScreenContent>
                    <Screen>
                        {breadcrumbs && <BreadCrumbs crumbs={breadcrumbs} />}
                        {children}
                    </Screen>
                    <Footer />
                </ScreenContent>
            </MainLayout>
        </Content>
    );
};
