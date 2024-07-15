// Start Counter when Scrolling
let nums = document.querySelectorAll(".home-counter-numbers .num");
let section = document.querySelector(".home-counter-numbers");
let started = false;

window.addEventListener("scroll", () => {
    if(window.scrollY <= section.offsetTop || window.scrollY >= section.offsetTop) {
        if(!started) {
            nums.forEach(num => startCount(num));
        }
        started = true;
    }
})
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent === goal){
            clearInterval(count)
        }
    },1800/goal)
}
// End Counter when Scrolling

// For Smooth Scrolling to Top
let topBtn = document.getElementById("top");
window.addEventListener("scroll" , () => {
    window.scrollY >= 100 ? topBtn.classList.add("show") : topBtn.classList.remove("show");
  });
  
  topBtn.addEventListener("click", () => {
    window.scrollTo({
        top : 0 ,
        behavior : "smooth"
    });
  });

  //End Smooth Scrolling to Top

//Srart smooth scrolling animation
let sections = document.querySelectorAll("section");
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            sec.classList.add("show-animate");
        } else {
            sec.classList.remove("show-animate");
        }
    })
}
//End smooth scrolling animation