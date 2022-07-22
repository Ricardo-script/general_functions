	<button onclick="getData()">Listar</button>
    <ul id="lista"></ul> 
     
     <script>
         
        async function getData(){
            const response = await fetch('https://api.github.com/users/ricardo-script');
            const data = await response.json();

            var temp="";

            temp+='<li>'+data.id+'</li>';
            temp+='<li>'+data.login+'</li>';
            temp+='<li>'+data.name+'</li>';

            document.getElementById('lista').innerHTML=temp;
        }
     
     </script>