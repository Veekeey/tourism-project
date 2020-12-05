//accepts a description and renders a modal with it.
function renderModal(content){
    document.getElementById("bigmod").style.display = "block";
    let btn = document.getElementById('book-btn');
    btn.insertAdjacentHTML('beforebegin', content);
    
}



//extracts the id from every individual IMG element
function handleClick() {

    document.onclick = function(e){

        let currentId = e.target.getAttribute('id');      
      
        for(let data in allData){  
            if(allData[data].id == currentId ){

                renderModal(allData[data].description);
            }
        }     

    }
   
}



// function to close modal
function closeModal() {
  document.getElementById("bigmod").style.display = "none";
}




// booking form validation
document.querySelector('.find-submit').addEventListener('click', (e) => {
  e.preventDefault();

  let userInput = document.querySelector('.fullname').value;
  let userEmail = document.querySelector('.email').value;
  let userPhone = document.querySelector('.phone-num').value;

  if (userInput.length == 0) {
    document.querySelector('.error').style.display = 'block';
  }else {
    document.querySelector('.error').style.display = 'none';
  }

  if (userPhone.length < 11 || userPhone.length > 11) {
    document.querySelector('.phone-error').style.display = 'block';
  }else {
    document.querySelector('.phone-error').style.display = 'none';
  }

  let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regResponse = reg.test(userEmail);
    if (regResponse) {
      document.querySelector('.email-error').style.display = 'none';
    }else {
      document.querySelector('.email-error').style.display = 'block'
    }
    
})

