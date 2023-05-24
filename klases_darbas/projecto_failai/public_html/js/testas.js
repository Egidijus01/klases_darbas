


// function setMenuItems(){
//   let menuItems = [{ title: "Apie mus", url: "index.html" },
//                 { title: "Kontaktai", url: "contacts.html" },
//                 { title: "Prekes", url: "prekes.html" },
//                 { title: "Geriausi pasiulymai", url: "top-offer.html" },
//             ];
export class meniu{
  constructor (){
    setMenuItems();
    click();
    console.log('all good')
  }
}
function setMenuItems(){
  let menuItems = [{ title: "Apie mus", url: "index" },
                { title: "Kontaktai", url: "contacts" },
                { title: "Prekes", url: "prekes" },
                { title: "Geriausi pasiulymai", url: "top-offer" },
            ];
let menu = document.querySelector("nav > div > ul");

menu.innerHTML = menuItems.map((item) => `<li class="el menu-button"><a href="${item.url}">${item.title}</a></li>`).join("");
}


function click(){
  $('.menu-button').click(function(e){
    e.preventDefault();
  
    removeCl('menu-button');
    $(this).addClass('active');
  
    let href = $(this).find('a').attr('href');
    keisti(href);
    
  });
}


function removeCl(clas){
  $(`.${clas}`).each(function() {
    $(this).removeClass('active');
  });
}

function keisti(href){
  
  $('main').load(`${href}.html main`)
}





// function currentPageCss(){
//   const currentUrl = window.location.href;
//   const menuButtons = document.querySelectorAll('.menu-button');
  
  
//   menuButtons.forEach(button => {
      
//       const buttonUrl = button.href;
//       if (buttonUrl == currentUrl) {
//         // If the button corresponds to the current page, modify its appearance
//         button.style.backgroundColor = 'red';
//         button.style.color = 'white';
//         button.style.border = '2px solid blue';
//     }
//   });
// }

// setMenuItems()
// currentPageCss()

// if (location.pathname.slice(-1) === '/') {
//   // Append the .html extension to the URL
//   const newUrl = location.pathname.slice(0, -1) + '.html';
//   // Redirect to the new URL
//   location.href = newUrl;
// }

// let firstb = document.getElementById('1b')
// let secondb = document.getElementById('2b')
// let thirdb = document.getElementById('3b')
// let fourthb = document.getElementById('4b')

// firstb.addEventListener('click', function(){
//   document.getElementById('1p').innerHTML = "pakeitimas"
// });

// secondb.addEventListener('click', function(){
//   document.getElementById('2p').innerHTML += " pridedu"
// });

// thirdb.addEventListener('click', function(){
//   document.getElementById('3p').style.color = 'red'
// })
// fourthb.addEventListener('click', function(){
//   document.getElementById('4p').innerText = 'labas'
// })

// let stac = document.querySelector('.staciakampis');
// let apsk = document.querySelector('.apskritimas');

// stac.addEventListener('click', function(){
//   stac.style.display = 'none'
// })
// apsk.addEventListener('click', function(){
//   apsk.style.display = 'none'
// })



// let rutulys = document.getElementById('ball');
// rutulys.style.transition = 'all 0.3s ease'


// let up = 50



// document.addEventListener('keydown', function(event){
//   event.preventDefault();
  
//     if (event.key === 'ArrowUp') {
      
//       rutulys.style.bottom =  up + 'px';
//       console.log('i virsu')
//       up +=15

//     } else if (event.key === 'ArrowDown') {
      
//       console.log('i apacia')
      
//       rutulys.style.bottom = up + 'px';
//       up -= 15
  
//     }
//     console.log(up)
    
  
// });



// if(window.location.href=='http://localhost/index.html'){
//     home.style.backgroundColor = ('red')
// }
// else if(window.location.href=='http://localhost/prekes.html'){
//     deals.style.backgroundColor = ('red')
// }
// else if(window.location.href=='http://localhost/top-offer.html'){
//     best_deals.style.backgroundColor = ('red')
// }
// else if(window.location.href=='http://localhost/contacts.html'){
//     contacts.style.backgroundColor = ('red')
// }
