//Exemplo:
import React, { useState } from 'react';

export default function Produtos(){

    const [file, setFile] = useState(null); // state para conter o arquivo
    const [previewImg, setPreviewImg] = useState(null); // state para pré visualização

    const fileSelected = (e) => { // captura e tratativa de imagem
        if(e.target.files[0]) {
            console.log(e.target.files[0]);
            setFile(e.target.files[0]); // file para post
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setPreviewImg(reader.result); //previewImg para preview
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }
	
	const fileUploadHandler = async () => { // post de imagem
        const fd = new FormData();
        fd.append('image', file);
        await api.post('images', fd);
    }
	
	
    return(
        <Container>
			<Image>
				<img src={previewImg} alt="" />
			</Image>
			<AreaUpload>
				<input type='file' id='upload' onChange={fileSelected}/>
			</AreaUpload>
			<button onClick={fileUploadHandler}>salvar</button>
        </Container>
    );
}