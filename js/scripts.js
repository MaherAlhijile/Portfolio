document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
 
});

document.addEventListener('scroll', function() {
    const navbar =  document.querySelector(".nav");
    const navBtn =  document.querySelectorAll(".navButton");

    if (window.scrollY > 400) {
        navbar.style.width = "600px";
        navbar.style.borderStyle = "solid"
        navbar.style.boxShadow =  "0px 0px 0px 1px rgba(0,0,0,0.3)";
        navbar.style.backdropFilter=  "blur(20px)";

        navBtn.forEach((item) => {
            item.style.color = "black";
          });
    } else {
        navbar.style.backdropFilter=  "none";
        navbar.style.borderStyle = "none"
        navbar.style.width = "100%";
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow =  "none";
        navbar.style.color = "white";
        navBtn.forEach((item) => {
            item.style.color = "white";
          });
    }
});

const moon = () => {
    document.body.style.background = "#393E46";
    document.body.style.color= "white";
   


}


const sun = () => {
    document.body.style.background = "#F7F7F7";
    document.body.style.color= "black";


}