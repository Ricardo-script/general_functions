const toDataURL = async (url) => {
	return await fetch(url)
		.then((response) => {
			return response.blob();
		})
		.then((blob) => {
			return URL.createObjectURL(blob);
		});
}

async function download(url, name = "download", type = "png") {
	const a = document.createElement("a");
	a.style.display = "none";
	a.href = await toDataURL(url);
	a.download = name + "." + type;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}