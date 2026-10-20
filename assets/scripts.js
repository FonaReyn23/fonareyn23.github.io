console.warn("Сайт создан исключительно в развлекательных целях и развитии навыков автора сайта. Возможно, что то из этого и получится)");


var follower = document.getElementById("followBlock");
var follower1 = document.getElementById("followBlock1");
var aboutTxtBlock = document.getElementById("aboutTxt");

window.addEventListener("mousemove", function(event){
    var cx = event.clientX;
    var cy = event.clientY;

    follower.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
    follower1.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
});

aboutTxtBlock.addEventListener("mouseenter", function(){
    follower.classList.add("hovered");
    follower1.classList.add("hovered1");
});
aboutTxtBlock.addEventListener("mouseleave", function(){
    follower.classList.remove("hovered");
    follower1.classList.remove("hovered1");
});

var btnInvers = document.querySelectorAll('.btnInv');

btnInvers.forEach(function(item){
    item.addEventListener("mouseenter", function(){
        follower.classList.add("hovered11");
        follower1.classList.add("hovered1");
    });
    item.addEventListener("mouseleave", function(){
        follower.classList.remove("hovered11");
        follower1.classList.remove("hovered1");
    });
});

// textContainer текст плавно появляется

/*const textType = "Зовут меня Тимур. <br>Живу в России. <br>Занимаюсь Front-End разработкой. <br>Также увлекаюсь фотографией, дизайном и играми.";
const typingSpeed = 40;

function typingWrite(text, speed, index = 0){
    const typingElement = document.getElementById("textContainer");
    if(index < text.length){
        typingElement.innerHTML = text.charAt(index);
        setTimeout(() => typingWrite(text, speed, index + 1), speed);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    typingWrite(textType, typingSpeed);
})*/