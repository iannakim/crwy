const email = document.querySelector("input#nemail")



email.addEventListener('change', (evt) => {
  if (evt.target.value.includes("@")){
    email.style.color = 'green'
  }
})