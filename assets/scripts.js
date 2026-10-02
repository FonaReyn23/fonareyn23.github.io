/*  const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("visible");
    } else {
        header.classList.remove("visible");
    }
});  */


var follower = document.getElementById("followBlock");
var follower1 = document.getElementById("followBlock1");
var aboutTxtBlock = document.getElementById("aboutTxt");

window.addEventListener("mousemove", function(event){
    var cx = event.clientX;
    var cy = event.clientY;

    follower.style.transform = `translate(${cx}px, ${cy}px)`
    follower1.style.transform = `translate(${cx}px, ${cy}px)`
});

aboutTxtBlock.addEventListener("mouseenter", function(){
    follower.classList.add("hovered");
    follower1.classList.add("hovered1");
});
aboutTxtBlock.addEventListener("mouseleave", function(){
    follower.classList.remove("hovered");
    follower1.classList.remove("hovered1");
});