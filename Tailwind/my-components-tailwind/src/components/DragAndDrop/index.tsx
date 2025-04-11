import { useState, useRef } from "react";
import { UploadDialog } from "./assets/icons/UploadDialog";
import { UploadItem } from "./UploadItem";

type DragAndDropProps = {
    multiple?: boolean;
    onDragAndDrop?: (listItem: File[]) => void;
    onReadBase64?: (base64Data: string) => void;
    showListUploads?: boolean;
    title?: string;
    height?: number;
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
    title,
    height = 0,
}: DragAndDropProps) => {
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
            onDragAndDrop?.(updatedFiles);
        } else {
            setSelectedFiles(files);
            onDragAndDrop?.(files);
        }

        // Verificar se o arquivo é uma imagem e imprimir o base64 no console
        files.forEach((file) => {
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64Data = reader.result as string;
                    onReadBase64?.(base64Data);
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

    return (
        <div className="w-full flex flex-col gap-4">
            <div
                className={`w-full ${
                    height === 0 ? "h-full" : `h-[${height}px]`
                } border border-gray-200 bg-white rounded-xl flex flex-col items-center justify-center user-select-none pb-2.5 cursor-grab active:opacity-50`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={openFileDialog}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                    className="hidden"
                />
                <div
                    className={`transition-transform duration-300 ${
                        dragging ? "scale-150" : "scale-100"
                    }`}
                >
                    <UploadDialog />
                </div>
                <div className="flex flex-col items-center justify-center">
                    {title && (
                        <span className="text-lg font-semibold text-purple-800 md:text-base">
                            {title}
                        </span>
                    )}
                    <div className="flex flex-col items-center md:flex-row gap-1">
                        <span className="text-sm font-semibold text-purple-800 md:text-xs">
                            Click para carregar
                        </span>
                        <span className="text-sm text-gray-600 md:text-xs">
                            ou arraste e solte
                        </span>
                    </div>
                    <span className="text-xs text-gray-600 text-center">
                        SVG, PNG, JPG (max. 800x400px)
                    </span>
                </div>
            </div>
            {showListUploads && (
                <div className="h-auto max-h-[270px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-white scrollbar-thumb-rounded">
                    <div className="flex flex-col gap-4">
                        {selectedFiles.map((file, index) => (
                            <UploadItem
                                key={index}
                                index={index}
                                file={file}
                                removeFile={removeFile}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
