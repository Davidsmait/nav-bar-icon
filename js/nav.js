let bar_icon = document.getElementById("bar")
let nav = document.getElementById('nav-tag')
let content_page = document.getElementById('content-page')


bar_icon.addEventListener("click",e=>{
    
    nav.style.left = '0';
    nav.style.boxShadow = ' 2px 0 30px #222';
    content_page.style.marginLeft = '220px';
    content_page.style.transition = '.5s';
      
})


document.getElementById('close-nav').addEventListener('click', () =>{
    nav.style.left = '-300px';
    nav.style.boxShadow = ' none';
    content_page.style.marginLeft = '0';

})
