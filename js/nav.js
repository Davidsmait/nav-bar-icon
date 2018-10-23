let bar_icon = document.getElementById("bar");
let count = 0;


bar_icon.addEventListener("click",e=>{

        
        if(e.isTrusted && count === 0){
            document.getElementById('nav').style.display = 'block';
            count++;
        }else if(e.isTrusted && count === 1){
            document.getElementById('nav').style.display = 'none';
            count--;
        }
})

