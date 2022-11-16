Method	Path						Description
GET		/api/upload/files			Obter uma lista de arquivos
GET		/api/upload/files/:id		Obter um arquivo específico
POST	/api/upload					Fazer upload de arquivos
DELETE	/api/upload/files/:id		Excluir um arquivo

// basico---------------------------------------------------------

  const formData = new FormData();
	formData.append("files", file);

	await api.post("upload", formData)
		.then((response) => {
			const fileId = response.data[0].id
		})
		.catch((error) => {
			console.log('erro', error)
		})
		
//-------------------------------------------------------------

/* 
	Salvar a imagem, pegar o id como referencia em uploads, se der 200
	então enviar para a a outra endpoint desejada ex:
*/

let formData = new FormData();
    formData.append("fullName", name);
    formData.append("companyName", company);
    formData.append("email", email);
    formData.append("phoneNumber", phone);
    formData.append("team", phone);
    formData.append("files", selectedFile);
    formData.append("message", message);

axios.post("your-strapi-url/upload",file) 
      .then((response) => {
        const fileId = response.data[0].id //pegar referencia do id

        axios({
            method: "post",
            url: "your-strapi-url/contact-submissions",
            data:{
                    fullName: name,
                    companyName: company,
                    email: email,
                    phoneNumber: phone,
                    team: team,
                    attachments: fileId,
                    message: message,
                }
            })
        .then(({ data }) => {
            setResponse(data);
        })
        .catch((error) => {
        //handle error
        });

        })
        .catch((error)=>{
        //handle error
    })
//--------------------------------------------------------------------------------------
//configurar limite de tamnho de imagem 

// criar pasta em: ./config/plugins.js

module.exports = {
  // ...
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
      }
    }
  }
};
