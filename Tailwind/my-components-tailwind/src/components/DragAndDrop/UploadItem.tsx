import { useState, useEffect } from "react";
import { FileDialog, ImageDialog, Trash } from "./assets/icons";

type UploadItemProps = {
    file: File;
    index: number;
    removeFile: (index: number) => void;
};

export const UploadItem = ({ file, index, removeFile }: UploadItemProps) => {
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
        <div className="w-full h-24 border border-gray-200 bg-white rounded-xl flex flex-col items-center justify-center user-select-none px-4">
            <li className="w-full text-xs list-none flex flex-col gap-1">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {file.type.startsWith("image/") ? (
                            <ImageDialog />
                        ) : (
                            <FileDialog />
                        )}
                        <div className="flex flex-col justify-center">
                            <span className="text-gray-700 font-medium text-sm">
                                {file.name}
                            </span>
                            <span className="text-gray-700 text-xs">
                                {file.size} KB
                            </span>
                        </div>
                    </div>
                    <div
                        className="w-9 h-9 flex items-center justify-center cursor-pointer active:relative active:top-px"
                        onClick={() => removeFile(index)}
                    >
                        <Trash />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="w-full flex items-center justify-between pl-12 gap-3">
                        <div className="w-full h-2 bg-gray-200 rounded-full flex items-center overflow-hidden">
                            <div
                                className="bg-purple-800 h-2 transition-all duration-300"
                                style={{ width: `${fileProgress}%` }}
                            ></div>
                        </div>
                        <span className="text-gray-700 text-xs font-medium">
                            {fileProgress}%
                        </span>
                    </div>
                </div>
            </li>
        </div>
    );
};
