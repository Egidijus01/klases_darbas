const div = document.getElementById('papildomi')

let emailCount = 1

const pridetiEmail = function(){
    const tarpinis = document.createElement('div');
    const labelis = document.createElement('label');
    const inputas = document.createElement('input');
    const mygtukas = document.createElement('button')

    mygtukas.innerText = 'Trinti'
    mygtukas.className = 'mygt'
    labelis.innerText = emailCount + ' email'
    labelis.setAttribute('for', 'email')
    inputas.type = 'email';
    inputas.className = 'ived'
    
    mygtukas.addEventListener('click', function(e){
        e.preventDefault();
        // console.log(e.target.parentElement)
        e.target.parentElement.remove();
        emailCount--;
    })

    tarpinis.append(labelis);
    tarpinis.append(inputas);
    tarpinis.append(mygtukas);
    div.append(tarpinis)
    emailCount++;
}
const prideti = document.createElement('button')
prideti.innerText = 'Prideti';
prideti.className = 'mygt';
prideti.addEventListener('click', function(e){
    e.preventDefault();
    pridetiEmail();

})

div.append(prideti);

