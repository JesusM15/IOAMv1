window.addEventListener('load', function(){
    //la clase donde esta la lista //dentro de {} pondras las opciones
    new Glider(document.querySelector('.lista-slide'), {
        slidesToShow: 3,
        slidesToScroll: 1, //cuantos slide avanza
        arrows: {
            prev: '.previus-slide',
            next: '.next-slide'
        }
    });
});

const popularesImg1 = document.querySelector(".item-1");
const popularesImg2 = document.querySelector(".item-2");
const popularesImg3 = document.querySelector(".item-3");
const popularesImg4 = document.querySelector(".item-4");
const popularesImg5 = document.querySelector(".item-5");
const popularesImg6 = document.querySelector(".item-6");
let request;
let result;

const slideFetch = async () =>{
   charge = false;
   request = await fetch("http://www.omdbapi.com/?t=harry potter&apikey=9a817356&")
   result = await request.json();
   popularesImg1.src = `${result.Poster}`;
   request = await fetch("http://www.omdbapi.com/?t=spider-man &apikey=9a817356&");
   result = await request.json();
   popularesImg2.src = `${result.Poster}`;
   request = await fetch("http://www.omdbapi.com/?t=jurassic world &apikey=9a817356&");
   result = await request.json();
   popularesImg3.src = `${result.Poster}`;
    request = await fetch("http://www.omdbapi.com/?t=star wars &apikey=9a817356&");
   result = await request.json();
   popularesImg4.src = `${result.Poster}`;
   request = await fetch("http://www.omdbapi.com/?t=Fantastic Beasts &apikey=9a817356&");
   result = await request.json();
   popularesImg5.src = `${result.Poster}`;
   request = await fetch("http://www.omdbapi.com/?t=titanic &apikey=9a817356&");
   result = await request.json();
   popularesImg6.src = `${result.Poster}`;
   charge = true;
   return charge;

}

let charge;

if (charge){

}else{
    slideFetch()
}

const menu = document.querySelector("#menu");
const responsiveNav = document.querySelector(".nav-li-responsive-container");

let state;

const menuFunction = () =>{
    if (state){
        state = false;
        responsiveNav.style.top = "-2500px";
    }else{
        state = true;
        responsiveNav.style.top = "0";
    }
}

menu.addEventListener("click", (err)=>{
    menuFunction();
});