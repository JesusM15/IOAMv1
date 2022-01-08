const search = document.getElementById('search');
const btnSend = document.getElementById("btn-send");
const poster = document.querySelector(".movie-poster");
const infoContainer = document.querySelector(".info-container");
const name = document.querySelector(".name");
const resume = document.querySelector(".resume");
const awards = document.querySelector(".awards");
const genre = document.querySelector(".genre");
const rating = document.querySelector(".imdbRating");
const released = document.querySelector(".released");
const actors = document.querySelector(".actors");
const runTime = document.querySelector(".run-time");
const menu = document.querySelector("#menu");
const responsiveNav = document.querySelector(".nav-li-responsive-container");

let emoji = document.querySelector(".emoji");
let request;
let result;
let userSearch;

const getMovie = async ()=>{
	try{
	    userSearch = search.value.toUpperCase();
	    request = await fetch(`http://www.omdbapi.com/?t=${userSearch}&apikey=9a817356&`);
	    result = await request.json();
	    console.log(result);
	    infoContainer.style.display = `block`;
	    poster.src = `${result.Poster}`;
	    name.innerHTML = `${result.Title}`;
	    resume.innerHTML = `${result.Plot}`;
	    awards.innerHTML = `${result.Awards}`;
	    rating.innerHTML = `${result.imdbRating}`;
	    genre.innerHTML = `${result.Genre}`;
	    released.innerHTML = `${result.Released}`;
	    actors.innerHTML = `${result.Actors}`;
	    runTime.innerHTML = `${result.Runtime}`;
	    if (parseFloat(result.imdbRating) <= 3){
	    	emoji.innerHTML = `🤮`;
	    }
	    else if (parseFloat(result.imdbRating) <= 6.5 && parseFloat(result.imdbRating)>3){
	    	emoji.innerHTML = `🤕`;
	    }
	    else if (parseInt(result.imdbRating) <= 7.5 && parseFloat(result.imdbRating)>6.5){
	    	emoji.innerHTML = `😱`;
	    }
	    else if (parseInt(result.imdbRating) <= 10 && parseFloat(result.imdbRating)>7.5){
	    	emoji.innerHTML = `🥵😋`;
	    }
    }catch(e){
    	infoContainer.style.display = `none`;
    	console.log("Hubo un error");
    	console.log(e);
    }
}

btnSend.addEventListener("click", (e)=>{
	e.preventDefault();
	getMovie();
});

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