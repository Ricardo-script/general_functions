import { AreaBreadCrumb, Row, Crumb } from "./styles";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";

type CrumbsTypes = {
    screen: string;
    navigate: string;
};

type BreadCrumbsProps = {
    crumbs: CrumbsTypes[];
};

export const BreadCrumbs = ({ crumbs }: BreadCrumbsProps): JSX.Element => {
    const router = useRouter();

    return (
        <AreaBreadCrumb>
            {crumbs?.map((item, index) => (
                <Row key={index}>
                    <Crumb
                        className={
                            index === crumbs.length - 1 ? "last-crumb" : ""
                        }
                        onClick={() => router.push(item.navigate)}
                    >
                        {item.screen}
                    </Crumb>
                    {index !== crumbs.length - 1 ? (
                        <MdKeyboardArrowRight color="#818181" size={15} />
                    ) : (
                        <></>
                    )}
                </Row>
            ))}
        </AreaBreadCrumb>
    );
};
