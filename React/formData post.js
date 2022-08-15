let formData = new FormData();    //formdata object

formData.append('name', 'ABC');   //append the values with key, value pair
formData.append('age', 20);

const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}

axios.post(url, formData, config)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });