let form = document.getElementById('forma');

async function postData(title, content) {
  const data = {
    'title': title,
    'content': content
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/post', requestOptions);
    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function getData() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/posts', requestOptions);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}


async function editData(id, contentas, title) {
    
    let data = {
        'title' : title,
        'content': contentas
    }
    
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
    
      try {
        const response = await fetch(`http://127.0.0.1:8000/post/${id}`, requestOptions);
        const result = await response.json();
    
        console.log(result);
      } catch (error) {
        console.error(error);
      }
}

async function delete_post(id){
    const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      };
    console.log(`http://127.0.0.1:8000/post/${id}`)
      try {
        const response = await fetch(`http://127.0.0.1:8000/post/${id}`, requestOptions);
        const result = await response.json();
    
        console.log(result);
      } catch (error) {
        console.error(error);
      }
}

function dataVisual() {
  let divas = document.getElementById('postai');

  getData()
    .then(data => {
      data.forEach(element => {
        let tarpinis = document.createElement('div');
        let title_data = element.title;
        let content_data = element.content;
        let data_data = element.data;
        let posto_id = element.id;

        let title = document.createElement('h2');
        let content = document.createElement('p');
        let data = document.createElement('p');

        let editButton = document.createElement('button');
        let delete_button = document.createElement('button');

        title.innerHTML = title_data;
        content.innerHTML = content_data;
        data.innerHTML = data_data;

        editButton.innerText = "Edit";
        delete_button.innerText = "Delete";

        editButton.addEventListener('click', function() {
            if (editButton.innerText === 'Edit') {
              const inputField = document.createElement('input');
              inputField.value = content.textContent;
          
              const contentParent = content.parentNode;
              if (contentParent) {
                contentParent.replaceChild(inputField, content);
          
                inputField.focus();
          
                editButton.innerText = 'Save';
              } else {
                console.error("Unable to access parent node of content element.");
              }
            } else {
              const inputField = tarpinis.querySelector('input');
              if (inputField) {
                const updatedData = inputField.value;
          
                editData(posto_id, updatedData, title_data);
          
                const inputFieldParent = inputField.parentNode;
                if (inputFieldParent) {
                  inputFieldParent.replaceChild(content, inputField);
                  content.textContent = updatedData;
          
                  editButton.innerText = 'Edit';
                } else {
                  console.error("Unable to access parent node of input field.");
                }
              } else {
                console.error("Unable to access input field.");
              }
            }
          });
          
        delete_button.addEventListener('click', () => {
            delete_post(posto_id)
            
        })
        

        tarpinis.append(title);
        tarpinis.append(content);
        tarpinis.append(data);
        tarpinis.append(editButton);
        tarpinis.append(delete_button);

        tarpinis.style.border = '1px solid black';

        divas.append(tarpinis);
      });
    })
    .catch(error => {
      console.error(error);
    });
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
  
    postData(title, content);
});


dataVisual()