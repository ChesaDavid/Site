let specialbtn = document.getElementById('upbutton');

window.onscroll = function(){scrollfunction()}

function scrollfunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        specialbtn.style.display = "block";
    }else{
        specialbtn.style.display = "block";
    }
}
specialbtn.addEventListener('click',function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    specialbtn.style.display = "none";
});