import { CloseDialog } from "@/app/assets/icons/CloseDialog";
import {
    Container,
    HeaderDialog,
    AreaIcon,
    BodyDialog,
    Title,
    Message,
    AreaButtons,
} from "./styles";
import { AlertDialog, DeleteDialog, ErrorDialog, InfoDialog, SucessDialog } from "@/app/assets/icons";
import { Button } from "../Forms";

type DialogProps = {
    open: boolean
    onClose?: () => void
    type: 'success' | 'error' | 'info' | 'delete' | 'alert'
    title: string
    message: string
    onClickCancel?: () => void
    onClickConfirm?: () => void
}
type ButtonTypes = "success" | "info" | "alert" | "neutral" | "danger" | undefined
type ListIcons = Record<DialogProps['type'], JSX.Element>
type ListTypesButton = Record<DialogProps['type'], ButtonTypes>

export const Dialog = ({
    open,
    onClose,
    type,
    title,
    message,
    onClickCancel,
    onClickConfirm
}: DialogProps): JSX.Element | null => {

    const defineIcon = (type: DialogProps['type']): JSX.Element => {

        const listIcons: ListIcons = {
            success: <SucessDialog />,
            error: <ErrorDialog />,
            info: <InfoDialog />,
            delete: <DeleteDialog />,
            alert: <AlertDialog />
        }

        return listIcons[type] || <InfoDialog />
    }

    const getTypeButton = (): ButtonTypes => {
        const types: ListTypesButton = {
            success: 'success',
            error: 'danger',
            info: 'info',
            delete: 'danger',
            alert: 'alert'
        }

        return types[type] || 'success'
    }

    if (!open) {
        return null
    }

    return (
        <Container>
            <HeaderDialog>
                {defineIcon(type)}
                <AreaIcon onClick={onClose}>
                    <CloseDialog />
                </AreaIcon>
            </HeaderDialog>
            <BodyDialog>
                <Title>{title}</Title>
                <Message>{message}</Message>
            </BodyDialog>
            <AreaButtons>
                {onClickCancel &&
                    <Button
                        variant='outlined'
                        color='neutral'
                        onClick={onClickCancel}>
                        Cancelar
                    </Button>
                }
                {
                    onClickConfirm &&
                    <Button
                        variant='contained'
                        color={getTypeButton()}
                        onClick={onClickConfirm}>
                        Confirmar
                    </Button>
                }
            </AreaButtons>
        </Container>
    );
}