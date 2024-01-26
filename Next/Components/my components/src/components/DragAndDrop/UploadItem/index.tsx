import { useState, useEffect } from "react";
import { FileDialog, ImageDialog } from "@/assets/icons";
import {
    Container,
    Description,
    IconDelete,
    Row,
    AreaText,
    Span,
    Size,
    AreaPercentage,
    Bar,
    Percentage,
    Total,
} from "./styles";
import { LuTrash2 } from "react-icons/lu";

type UploadItemProps = {
    file: File;
    index: number;
    removeFile: (index: number) => void;
};

export const UploadItem = ({
    file,
    index,
    removeFile,
}: UploadItemProps): JSX.Element => {
    const [fileProgress, setFileProgress] = useState<number>(0);

    useEffect(() => {
        const reader = new FileReader();
        let loadedSize = 0;
        const totalSize = file.size;

        reader.onload = () => {
            loadedSize += file.size;
            const filePercentCompleted = Math.round(
                (loadedSize * 100) / totalSize
            );
            setFileProgress(filePercentCompleted);
        };

        reader.readAsDataURL(file);

        // Limpar event listener quando o componente é desmontado ou quando o arquivo muda
        return () => {
            reader.onload = null;
        };
    }, [file, setFileProgress]);

    return (
        <Container>
            <li>
                <Row>
                    <Description>
                        {file.type.startsWith("image/") ? (
                            <ImageDialog />
                        ) : (
                            <FileDialog />
                        )}
                        <AreaText>
                            <Span>{file.name}</Span>
                            <Size>{file.size} KB</Size>
                        </AreaText>
                    </Description>
                    <IconDelete onClick={() => removeFile(index)}>
                        <LuTrash2 size={20} color="#667085" />
                    </IconDelete>
                </Row>
                <Row>
                    <AreaPercentage>
                        <Bar>
                            <Percentage
                                $uploadProgress={fileProgress}
                            ></Percentage>
                        </Bar>
                        <Total>{fileProgress}%</Total>
                    </AreaPercentage>
                </Row>
            </li>
        </Container>
    );
};
