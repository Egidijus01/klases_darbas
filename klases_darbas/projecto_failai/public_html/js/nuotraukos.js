let photos = document.getElementById('photos');


function createElements(){

}



fetch('./nuotraukos.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        json.forEach(element => {
            let divas = document.createElement('div')
            divas.setAttribute('class', 'nuotr')
            let label = document.createElement('span');
            let img = document.createElement('img');

            let lbl = element.author;
            label.innerHTML = lbl;
            let nuotrauka = element.download_url;
            img.setAttribute('src', nuotrauka);
            img.style.height = '200px'
            divas.append(label);
            divas.append(img);
            photos.append(divas);

        });
    });