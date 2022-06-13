function readfile(e: any) {

		var file = e.target.files[0];
		var dir = e.target.value;
		
		const reader = new FileReader();
		reader.addEventListener('load', e => {
			csvData = e.target?.result?.toString();
			toJSON(csvData);			
		})
		reader.readAsText(file, 'UTF-8');
	
	}
	
	const toJSON = (csv: any) => {
		const lines = csv.split('\r\n')
		const result: string[] = [];
		const headers = lines[0].split(';')
	
		lines.map((l: any) => {
			const obj: any = {}
			const line: any = l.split(';')
		   
			headers.map((h: any, i: number) => {
				obj[h] = line[i]
			})
			result.push(obj)
		})
		console.log(result.splice(1, (result.length - 1))) // remove a primeira coluna que repete o cabeçalho
		return result.splice(1, (result.length - 1))
	}

    return(
        <div className='container-select-file'>
			<input type="text" readOnly={true} id='dir-select'/>
			<input type="file" id="select-file" name='selectFile' onChange={readfile}/>
			<label htmlFor="select-file" id='btn-label' >Selecionar</label>
        </div>
    );