let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwwDxD7JHOHcNhnD6ewv81eHHQHQWSE8rb4f6G3R8u9vnDtKOZCqlqWuN1Mwm-wDTc/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Sent Successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })