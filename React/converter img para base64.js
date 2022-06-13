//React converter img para base 64

 const[file, setFile] = useState(null);
 const[previewImg, setPreviewImg] = useState(newImage); // state para armazenar a img base64
 
 
 const fileSelected = (e) => {
	if(e.target.files[0]) {
		console.log(e.target.files[0]);
		setFile(e.target.files[0]);
		const reader = new FileReader();
		reader.addEventListener("load", () => {
			setPreviewImg(reader.result);
		});
		reader.readAsDataURL(e.target.files[0]);
		console.log(file);
	}
 }
 
 
 return(
	<input type='file' id='upload' onChange={fileSelected}/>
 );