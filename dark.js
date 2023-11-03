let active = document.getElementsByClassName('toggle')[0]
let btn = document.getElementsByClassName('indicator')[0]
let body = document.querySelector('body')

btn.addEventListener('click',function(){
    active.classList.toggle('active')
    body.classList.toggle('active')

})
