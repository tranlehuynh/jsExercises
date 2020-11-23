const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Moving Animation Event 
container.addEventListener('mousemove', (x) => {
    console.log(x.pageY);
    let xAxis = (window.innerWidth / 2 - x.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - x.pageY) / 20;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
})

//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const buy = document.querySelector(".buy");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Animate In
container.addEventListener('mouseenter', (x) => {
    card.style.transition = "none";
    //Pop out
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(250px) rotateZ(-45deg)';
})

//Animate Out
container.addEventListener('mouseleave', (x) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Pop back
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
})