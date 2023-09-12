const toggle_Btn = document.querySelector('.bars')
    const toggle_BtnIcon = document.querySelector('.bars i')
    const floTante= document.querySelector('.flotante')
    
    toggle_Btn.onclick = function(params) {   
    floTante.classList.toggle('open')
    const isOpen=floTante.classList.contains('open')
    toggle_BtnIcon.classList=isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
    }