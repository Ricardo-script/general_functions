import { CloseDialog } from "@/assets/icons/CloseDialog";
import {
    Container,
    HeaderModal,
    AreaIcon,
    AreaTitle,
    IconTitle,
    GroupTitle,
    Title,
    Description,
    Divider,
} from "./styles";

type ModalProps = {
    open: boolean;
    onClose?: () => void;
    title?: string;
    description?: string;
    icon?: JSX.Element;
    children: React.ReactNode;
};

export const Modal = ({
    open,
    onClose,
    children,
    title,
    description,
    icon,
}: ModalProps): JSX.Element | null => {
    if (!open) {
        return null;
    }

    return (
        <Container>
            <HeaderModal>
                <AreaTitle>
                    {icon && <IconTitle>{icon}</IconTitle>}
                    <GroupTitle>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                    </GroupTitle>
                </AreaTitle>
                <AreaIcon onClick={onClose}>
                    <CloseDialog />
                </AreaIcon>
            </HeaderModal>
            <Divider />
            {children}
        </Container>
    );
};
