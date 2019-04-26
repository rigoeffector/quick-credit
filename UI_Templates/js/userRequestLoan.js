var toggleButton = document.querySelector(".toggle-button");    
var mobilenav = document.querySelector(".mobile-nav");
var backdrop = document.querySelector(".backdrop");
toggleButton.addEventListener('click',()=>{
    mobilenav.style.display='block';
    backdrop.style.display='block';
});
backdrop.addEventListener('click',()=>{
    mobilenav.style.display ='none';
    closeMobileNav();
})
const closeMobileNav = () =>{
backdrop.style.display='none';  
}


    