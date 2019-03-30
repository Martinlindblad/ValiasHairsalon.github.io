// _____________Scroll Function___________

let deskNav = document.getElementsByClassName("desktop-nav")
let navBtn = document.getElementsByClassName("nav-btn")
let logo = document.getElementsByClassName("logo")
let mobileNav = document.getElementsByClassName("mobile-nav")
let container = document.getElementsByClassName("container")
let windowHeight = "15";


window.onscroll = function(){
    if(window.width >= '1000px'){
        scrollFunction()
    }
    
}




function scrollFunction() {
    if (document.body.scrollTop > windowHeight || document.documentElement.scrollTop > windowHeight ) {
        // deskNav[0].style.transition = "all 0.5s ease";
        deskNav[0].style.height = "7%";
        // navBtn[0].style.transition = "all 0.3s ease";
        navBtn[0].style.paddingTop = "0%";
        navBtn[0].style.fontSize = "1.5rem";
        // logo[0].style.transition = "all 0.5s ease";
        logo[0].style.paddingBottom = "1%";
        
    }
    else {
        // deskNav[0].style.backgroundColor = "rgba(43, 43, 42, 0.5)";
        deskNav[0].style.height = "9%";
        navBtn[0].style.padding = "10px 0";
        deskNav[0].style.paddingTop = "1.5%";  
    }
}

// ____________Burger function______________

function burgerFunction(x) {
    x.classList.toggle("change");
}

// ____________Burger OpenClose_____________

function openClose(){
    let x = document.getElementById("links")    
    if(x.style.opacity === "1"){
        x.style.opacity = "0";
    }else{
        x.style.opacity = "1"
    }
}

// _____________________Burger DropDown_______________
let wide = screen.width;
function viewHeight(){
    if(wide >= '700px') {
        alert ="hej då";
    }else if (wide >= '500px') {
        alert ="hej";
    }
    console.log(wide);
    
    
    
}
if ($(window).width() < 768) {
    container[0].style.height = "50vh"
    
}
if ($(window).width() > 768) {
    container[0].style.height = "100vh"
    
}




function dropDown(){
    let d = document.getElementById("links")    
    if(d.style.opacity === "1"){
        
        mobileNav[0].style.height = "100vh";
        mobileNav[0].style.zIndex = "black";
        navBtn[0].style.transitionDelay = "0.3s";
        navBtn[0].style.width = "100%";
    }else{
        navBtn[0].style.width = "30%";
        mobileNav[0].style.height = "6vh";
        // mobileNav[0].style.backgroundColor = "rgba(43, 43, 42, 0.5)";
        navBtn[0].style.transitionDelay = "0s";
    
    }
}

// ____________________Postition__________________
function position(){
    let hOne = document.getElementById("header-one");
    if(hOne.style.position === "inherit"){
        hOne.style.position = "relative";
    }else{
        hOne.style.position = "inherit";
    }
}

function positionTwo(){
    let hTwo = document.getElementById("header-two");
    if(hTwo.style.position === "inherit"){
        hTwo.style.position = "relative";
    }else{
        hTwo.style.position = "inherit";
    }
}




// ______________________FIRE EVENT + Prevent Scroll Hamburger___________________

document.getElementById("burger").addEventListener("click", function(){
    openClose();
    burgerFunction(this);
    dropDown();
    position();
    positionTwo();
    let d = document.getElementById("links")    
    if(d.style.opacity === "1"){
        document.body.style.overflowY = "hidden";
    }else{
        document.body.style.overflowY = "scroll";
    }
})




