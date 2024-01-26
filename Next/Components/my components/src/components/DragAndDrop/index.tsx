import { useState, useRef } from "react";
import {
    Container,
    InputFile,
    AreaIcon,
    AreaDescription,
    Line,
    Bold,
    Span,
    SmallText,
    AreaUpload,
    ScrollView,
    UploadList,
} from "./styles";
import { UploadDialog } from "@/assets/icons";
import { UploadItem } from "./UploadItem";

type DragAndDropProps = {
    multiple?: boolean;
    onDragAndDrop?: (listItem: File[]) => void;
    onReadBase64?: (base64Data: string) => void;
    showListUploads?: boolean;
};

/**
 *
 * @param multiple
 * @returns Permite selecionar multiplos arquivos
 * @param onDragAndDrop
 * @returns Retorna um array com todos os arquivos selecionandos
 * exemplo de uso: onDragAndDrop={(items) => console.log("lista", items)}
 * @param showListUploads
 * @returns Mostra os arquivos que foram carregados contendo opção de remoção de arquivos da lista
 * @param onReadBase64
 * @return Caso o upload seja uma imagem então retorna uma base64
 * ex: onReadBase64={(base64) => console.log("base64", base64)}
 */

export const DragAndDrop = ({
    multiple = false,
    onDragAndDrop,
    onReadBase64,
    showListUploads = false,
}: DragAndDropProps): JSX.Element => {
    const [dragging, setDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);

        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    };

    const handleFiles = (files: File[]) => {
        const updatedFiles = [...selectedFiles, ...files];
        if (multiple) {
            setSelectedFiles(updatedFiles);
            onDragAndDrop && onDragAndDrop(updatedFiles);
        } else {
            setSelectedFiles(files);
            onDragAndDrop && onDragAndDrop(files);
        }

        // Verificar se o arquivo é uma imagem e imprimir o base64 no console
        files.forEach((file) => {
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64Data = reader.result as string;
                    onReadBase64 && onReadBase64(base64Data);
                };
                reader.readAsDataURL(file);
            }
        });
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            handleFiles(files);
        }
    };

    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const removeFile = (index: number) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
    };

    /*const sendFilesToBackend = async () => {
        try {
            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append("files", file);
            });

            // Simulação do envio usando Axios
            /*const response = await axios.post('URL_DO_BACKEND', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Resposta do backend:', response.data);
            // Lógica para lidar com a resposta do backend*/
    /*} catch (error) {
            console.error("Erro ao enviar arquivos:", error);
            // Lógica para lidar com erros de envio
        }
    };*/

    return (
        <Container>
            <AreaUpload
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={openFileDialog}
            >
                <InputFile
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                />
                <AreaIcon $dragging={dragging}>
                    <UploadDialog />
                </AreaIcon>
                <AreaDescription>
                    <Line>
                        <Bold>Click para carregar</Bold>
                        <Span> ou arraste e solte</Span>
                    </Line>
                    <SmallText>SVG, PNG, JPG (max. 800x400px)</SmallText>
                </AreaDescription>
            </AreaUpload>
            {showListUploads && (
                <ScrollView>
                    <UploadList>
                        {selectedFiles.map((file, index) => (
                            <UploadItem
                                key={index}
                                index={index}
                                file={file}
                                removeFile={removeFile}
                            />
                        ))}
                    </UploadList>
                </ScrollView>
            )}
        </Container>
    );
};
