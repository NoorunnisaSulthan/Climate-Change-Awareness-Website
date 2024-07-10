
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector(".scene2");




const opacity = document.querySelectorAll(".opacity");

let header_height = header.offsetHeight;


window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 3;
   

    
   

   
})

//cursor

var crsr=document.querySelector("#cursor");
var cblur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    cblur.style.left=dets.x-50+"px";
    cblur.style.top=dets.y-50+"px";
})
