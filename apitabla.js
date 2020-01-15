var contenido = document.querySelector('#contenido');


function traer() {

var valor = document.getElementById("texto").value;
busqueda = '#'+valor;
TweetJs.Search(busqueda,
    function (data) {
        if(data.statuses.length == 0)
            {
            console.log('No #Hashtag Relacionados');
            }
            else {
                //console.log(data.);
                contenido.innerHTML = '';
            var indice = 1;
            var twits = data.statuses.length;
            var arreglo = data.statuses;
            console.log(arreglo);
            for(let valor of arreglo){
                contenido.innerHTML += `
                <tr>
                    <th scope="row"> ${indice} </th>
                    <td>${twits}</td>
                    <td>${valor.text}</td>
                    <td> <img src="${valor.retweeted_status ? valor.retweeted_status.user.profile_image_url: '#'}" > </td>
                </tr>
            `
                indice++;

                }
            }
        });

}