//Exemplo:
import React, { useState } from 'react';

export default function Produtos(){

    const[file, setFile] = useState(null);
    const [previewImg, setPreviewImg] = useState(null);

    const fileSelected = (e) => {
        if(e.target.files[0]) {
            console.log(e.target.files[0]);
            // setFile(e.target.files[0]);s
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setPreviewImg(reader.result); //usar previewImg para POST
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    return(
        <Container>
			<Image>
				<img src={previewImg} alt="" />
			</Image>
			<AreaUpload>
				<input type='file' id='upload' onChange={fileSelected}/>
			</AreaUpload>
        </Container>
    );
}