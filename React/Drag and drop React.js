import React, { useState, useRef } from 'react';

const App: React.FC = () => {
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
        setSelectedFiles(updatedFiles);
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

    const sendFilesToBackend = async () => {
        try {
            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append('files', file);
            });

            // Simulação do envio usando Axios
            /*const response = await axios.post('URL_DO_BACKEND', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Resposta do backend:', response.data);
            // Lógica para lidar com a resposta do backend*/
        } catch (error) {
            console.error('Erro ao enviar arquivos:', error);
            // Lógica para lidar com erros de envio
        }
    };

    return (
        <div
            className={`drag-drop-area ${dragging ? 'dragging' : ''}`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
                multiple
            />
            <p>Arraste e solte os arquivos aqui ou clique para selecionar</p>
            <button type="button" onClick={openFileDialog}>
                Selecionar Arquivo
            </button>
            <div>
                Arquivos selecionados:
                <ul>
                    {selectedFiles.map((file, index) => (
                        <li key={index}>
                            {file.name}
                            <button type="button" onClick={() => removeFile(index)}>
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <button type="button" onClick={sendFilesToBackend}>
                Enviar para o Backend
            </button>
        </div>
    );
};

export default App;

