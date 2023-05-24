

const buttons = document.querySelectorAll('.btn');


buttons.forEach(element => {
    
    element.addEventListener('click', function(){
        buttons.forEach(function(element) {
            element.classList.remove('active')
          })
          element.classList.toggle('active')
    });
    
});