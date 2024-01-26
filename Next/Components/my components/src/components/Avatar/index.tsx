import { Container, Photo } from "./styles";
type AvatarProps = {
    src: any
}

export const Avatar = ({ src }: AvatarProps): JSX.Element => {
    return (
        <Container>
            <Photo src={src} alt="" />
        </Container>
    );
}