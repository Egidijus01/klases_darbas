let card_nr = 0

document.addEventListener('DOMContentLoaded', () => {
    // DOMContentLoaded event ensures that the HTML has been loaded before executing the code
  
  
    let forma = document.querySelector('form');
  
    forma.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission
  
      let front = document.getElementById('front');
      let back = document.getElementById('back');
  
      console.log(front.value);
      
      let localus = {};
      localus['front'] = front.value;
      localus['back'] = back.value;
      localStorage.setItem(card_nr, localus)
      
      card_nr++;
      localStorage.setItem('viso', card_nr)
      front.value = ''; // Clear the input fields after submission
      back.value = '';
      

    });
  });

document.getElementById('perziureti').addEventListener('click', () => {
    let saugomos_korteles = {};

    for(let i=0;i<localStorage.getItem('viso');i++){
        let a = localStorage.getItem(i)
        saugomos_korteles[i] = a
    }




    const windowFeatures = "left=100,top=100,width=320,height=320";
    let jsonStr = JSON.stringify(saugomos_korteles);
    let url = "http://localhost:8080/perziureti.html?data=" + encodeURIComponent(jsonStr);
    console.log(saugomos_korteles)

    window.open(
        url, "", windowFeatures
      );

})


