
// const forma = document.querySelector('#number');
// const laukas = document.getElementById('atsakymas');
// let p = document.createElement('p');

// const teigiamas = function() {
//   if (p.innerText !== "") {
//     p.innerHTML = "";
//   }
//   p.innerText = 'Tai yra skaicius tarp 0 ir 99';
//   p.style.backgroundColor = 'lightgreen'
//   p.style.color = 'green'
//   p.style.padding = '5px'
//   laukas.append(p);
// };

// function neigiamas() {
//   if (p.innerText !== "") {
//     p.innerHTML = "";
//   }
//   p.innerText = 'Tai yra neskaicius ARBA mazesnis uz 0 ARBA didesnis uz 99';
//   p.style.backgroundColor = '#FFCCCB'
//   p.style.color = 'red'
//   p.style.padding = '5px'
//   laukas.append(p);
// }

// forma.addEventListener("blur", function(e) {

//   e.preventDefault();
  
//   let tekstas = document.getElementById('number').value;
//   if (isNaN(tekstas)) {
//     neigiamas();
//   } else if (parseInt(tekstas) >= 0 && parseInt(tekstas) <= 99) {
//     teigiamas();
//   } else {
//     neigiamas();
//   }
// });

// let result = document.querySelector('#masyvas')

// let masyvas = document.querySelector('#masyvas').innerHTML.split(' ')
// console.log(masyvas) 
// let forma = document.querySelector('form');
// const psh = document.getElementById('push')
// const shft = document.getElementById('shift')
// const unshft = document.getElementById('unshift')
// const pp= document.getElementById('pop')
// let clickedButtonValue = '';


// forma.addEventListener('submit', function(e){
//   e.preventDefault();
//   let tekstas = document.getElementById('ivesti').value
//   const clickedButton = e.submitter;
  
//   const buttonValue = clickedButton.value;
//   console.log(buttonValue);
//   if (buttonValue==='push'){
//     masyvas.push(tekstas)
//     document.querySelector('#masyvas').innerHTML = masyvas
//   }
//   else if (buttonValue==='shift'){
//     masyvas.shift(tekstas)
//     document.querySelector('#masyvas').innerHTML = masyvas
//   }
//   else if (buttonValue==='unshift'){
//     masyvas.unshift(tekstas)
//     document.querySelector('#masyvas').innerHTML = masyvas
//   }
//   else if (buttonValue==='pop'){
//     masyvas.pop(tekstas)
//     document.querySelector('#masyvas').innerHTML = masyvas
//   }
// })


// let currentYear = 2023


// function generateDays(){
  
//   skaicius = Math.random()*120
  
//   if((skaicius>=20)){
//     return Math.round(skaicius*365);
//   } else{
//     generateDays();
//   }
  
// }
// function addBirtdate(days){
//   years = Math.round(days/365)
//   day = years%30

//   if (day===0){
//     day=1;
//   }
//   console.log(years)
//   console.log(day)
//   delete person.age;
//   person.birtdate = `${currentYear-years} - ${day}`
// }
// function checkIfDed(days){
//   years = days/365;
//   if(years<100){
//     person.alive = true;
//     person.interests.push('enjoying life')
//   }
// }




// let person = {
//   name : 'Rosa',
//   age : 120,
//   alive : false,
//   interests: ["Swimming", "cards"]
// }


// function configurePerson(name){
//   person.name = 'name';
//   amzius = generateDays();
//   checkIfDed(amzius)
//   addBirtdate(amzius)
// }
// configurePerson('Juan')


// let arr = ["I", "study", "Javascript", "right", "now"]

// arr.splice(0, 3, "Lets", "Dance");
// // console.log(arr.join('-'))
// // console.log(arr)

// let first = ['slice', 'splice', 'concat'];
// let second = ['push', 'pop', 'shift', 'unshift']
// // console.log(first.concat(second.concat('length', 7, {subject: 'methods'})));


// let accords = ["F", "E", "A7", "Ab7", "Gm7", "C7"] ;

// function prideti_7(elementas){
//   return elementas+'7';
// }

// function tikrinimas(masyvas, pridejimas){
//   let a = []
//   masyvas.forEach(element => {
//       if (element.endsWith('7') === false){
//         element = pridejimas(element);
//         a.push(element)
//       } else{
//         a.push(element)
//       }
//   });
//   return a;
// }
// console.log(tikrinimas(accords, prideti_7))


// // let divas = document.getElementById('elementai')
// // let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];



// // numbers.forEach(element => {
// //   indexas = numbers.indexOf(element);
// //   teks = document.createElement('p');
// //   teks.innerHTML = `Index nr: ${indexas} , value: ${element}`
// //   divas.append(teks);
// // });


// let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, 8, -4, 6];


// //antra uzduotis
// const budgets = [
//   {
//     name: "Rytis",
//     budget: 50,
//   },
//   {
//     name: "Saulė",
//     budget: 230,
//   },
//   {
//     name: "Paulius",
//     budget: 1500,
//   },
//   {
//     name: "Gytis",
//     budget: 92,
//   },
//   {
//     name: "Sandra",
//     budget: 7,
//   },
// ];
// // console.log(budgets[0].budget)
// let dIs2 = numbers.map(num => num*2)

// // console.log(dIs2)

// function multiply(item, num){
//   return item*num
// }
// let daugyba = numbers.map(item => multiply(item,4))
// // console.log(daugyba)

// function getBudgets(arr){
//   let budgets = arr.map(item => item.budget)
//   return budgets.reduce((a, b) => a + b)
// }

// console.log(getBudgets(budgets))
// let names = budgets.map(item => item.name)
// console.log(names)

// function vyrasArMoteris(name){
//   if(name.endsWith('s')){
//     return 'vyras';
//   } else{
//     return 'moteris';
//   }

// }



// function isPersonInArray(names, name, callBack){
//   if(names.includes(name)){
//     let sex = callBack(name)
//     if(sex === 'vyras'){
//       console.log('Welcome Mr. '+ name)
//     } else{
//       console.log('Welcome Miss. '+ name)
//     }
//   } else{
//     console.log('Unfotunately Name is not in our list')
//   }
// }
// const vardai = ['Matas', 'Batas', "Antanas", "Tomas", "Laura"]
// isPersonInArray(vardai, 'Laura', vyrasArMoteris)



// let count = 0;
// a = numbers.filter(num => num===2)
// console.log(a.length);



// const monies = budgets.map((person) => person.budget);

// console.log(monies.some(num => num<0))

// function belowHundred(arr){
//   let num = []
//   if(arr.some(num => num<100)===true){
//     num = arr.filter(num => num>100);
    
//   }else {
//     console.log('All numbers are above 100');
//     num = arr;
//   }
//   return num;
// }
// console.log(belowHundred(monies))

// // function simbolified(arr){
// //     if(arr.every(name => name.length>3)===true){
      
// //     }
// // }






// let duomenys_input = document.getElementById('duomenys')
// document.getElementById('store_data').addEventListener('click', (e) => {
//     localStorage.setItem('manoRaktas', duomenys_input.value)
// })
// document.getElementById('store_data').addEventListener('click', (e) => {
//     duomenys_input.value = localStorage.getItem('manoRaktas');
// })
// // console.log(localStorage.getItem('manoRaktas'))

// let form = document.getElementById('localas');
// let h = document.getElementById('pakeis')

// document.getElementById('tekstas').addEventListener('keyup', () => {
//     h.innerHTML = tekstas.value
// })

// form.addEventListener('click', () => {
//     changeValue();
// })
// function startTimer() {
//     setTimeout(changeValue, 2000);
// }
// function changeValue(){
//     let tekstas = document.getElementById('tekstas');
//     localStorage.setItem('raktas', tekstas.value);
// }

// document.getElementById('tekstas').addEventListener('onblur', () => {
//     startTimer();
// })
// console.log(localStorage.getItem('raktas'))

// const storage = localStorage;

// window.onload = () =>{
//     if(storage.getItem('consent')!=='accepted'){
//         let consent = window.confirm("agree to terms and policies");
//         if(consent){
//             storage.setItem('consent', 'accepted')
//         }
//     } 

// }
// console.log(storage.getItem('consent'))

let formata = document.getElementById('spalva');

formata.addEventListener('submit', (e) => {
  e.preventDefault();
  color = document.getElementById('pasirinkti').value;
  document.cookie = 'color='+color;
  console.log(color);
  console.log(document.cookie);
  location.reload();
  
})
function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [key,value] = el.split('=');
    cookie[key.trim()] = value;
  })
  return cookie[cookieName];
}
function clearAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
}


if(document.cookie){
  console.log('veikia')
  let ele = document.getElementById('delete');
  ele.style.display = 'block'
  let sausainis = getCookie('color');
  formata.style.display = 'none';
  document.querySelector('body').style.backgroundColor = sausainis
}
document.getElementById('delete').addEventListener('click', () => {
  clearAllCookies();
  location.reload();
})
