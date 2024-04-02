let button = document.getElementById("impButton")
    
window.onscroll = function() {scrollfunction()}

function scrollfunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop>20){
        button.style.display = "block";
    }else{
        button.style.display = "block";
    }
}
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }