
const colors = ["pink", "orange", "blue", "cyan", "red", "purple", "yellow" ]
let index = 0 ;
document.getElementById("colors-btn").addEventListener("click", function(){
    
    document.body.style.backgroundColor = colors[index];
    if(index < colors.length -1){
        index++;
    }
    else{
        index = 0;
    }
})