import { useState } from "react";
import { Container, TabWrap, Tab, Title, ContentTab } from "./styles";

export type TabsTypes = {
    nameTab: string;
    icon: JSX.Element;
    content: JSX.Element;
};

type DataProps = {
    data: TabsTypes[];
    width?: number;
    height?: number;
};

export const Tabs = ({
    data,
    width = 0,
    height = 0,
}: DataProps): JSX.Element => {
    const [selectTab, setSelectTab] = useState<number>(0);

    return (
        <Container $width={width}>
            <TabWrap $totalTabs={data.length} $activeTab={selectTab}>
                {data.map((tabs, index) => (
                    <Tab
                        key={index}
                        $active={index === selectTab}
                        $height={height}
                        onClick={() => setSelectTab(index)}
                    >
                        {tabs.icon}
                        <Title $active={index === selectTab}>
                            {tabs.nameTab}
                        </Title>
                    </Tab>
                ))}
            </TabWrap>
            <ContentTab>{data[selectTab].content}</ContentTab>
        </Container>
    );
};
