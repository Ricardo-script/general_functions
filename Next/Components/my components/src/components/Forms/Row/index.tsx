import { AreaRow } from "./styles";

export type RowProps = {
    children: React.ReactNode;
    gap?: number;
};

export const Row = ({ children, gap = 8 }: RowProps): JSX.Element => {
    return <AreaRow $gap={gap}>{children}</AreaRow>;
};
