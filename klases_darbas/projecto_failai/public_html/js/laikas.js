
// function randNum(to){
//     let rand = Math.random()
    
//     let number = Math.round(rand*to)
//     return number
//   };
//   console.log(randNum(10))
  
//   let arr = []
//   let i = 0;
//   while(i<=16){
//     if(i%4==0){
//       arr.push(i);
//     }
//     i++;
//   }
//   console.log(arr)
  


// const myForm = document.querySelector('form');
// let parag = document.getElementById('svarbus')

// myForm.addEventListener('submit', function(e){

//     e.preventDefault();
//     parag.innerHTML = e.target.elements.vardas.value + " - " + e.target.elements.pavarde.value;



// })


elementai = document.querySelectorAll('.darbas')

myForm = document.querySelector('form');

myForm.addEventListener('submit', function(e){

    e.preventDefault();
    const selectedOptions = document.querySelectorAll('input[name="xd"]:checked');
    const selectedValues = Array.from(selectedOptions).map(option => option.value);
    
    elementai.forEach(elementas => {
      const atributai = elementas.getAttribute('atributas').split(' ');

        
        
        if (selectedValues.some(value => atributai.includes(value)))  {

        elementas.style.display = 'block';
        }
        else{
        elementas.style.display = 'none';

        }
      });
})

let textas = document.getElementById('tekstas').innerText;

result = textas.replace(/\d/g, function(x){
  return parseInt(x)**2
})
document.getElementById('tekstas').innerText = result

