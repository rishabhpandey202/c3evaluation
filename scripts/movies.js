// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

 async function searchMovies(){
   try{
    const search=document.getElementById("search").value;
    //    console.log(search)//https://www.omdbapi.com/?i=tt3896198&apikey=20a65694&s=${query}
        const res=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=20a65694&s=${search}`);
        const data= await res.json();
        const movie=(data.Search);
        // console.log(data);
        // console.log(movie);
        appendData(movie)
        // return movie;
   }catch(err){
        console.log("error ");
   }
}

// var movies_data=document.getElementById("movies");

// console.log(data);
let movies=document.getElementById("movies");
function appendData(data){
    // console.log(data);
    
data.map(function(elem){

    var row=document.createElement("div")
    var poster=document.createElement("img")
    poster.src=elem.Poster;
    console.log(poster)
    var Title=document.createElement("p")
    Title.innerText=elem.Title;
    console.log(Title)

    var Year=document.createElement("p")
    Year.innerText=elem.Year;
    console.log(Year)
    var btn=document.createElement("button")
    btn.innerText="Book Now";
    btn.setAttribute("class","book_now");
        btn.addEventListener("click",function(){
        addToLocalStrorage(elem);
    })
   
    row.append(poster,Title,Year,btn)
    console.log(row)
    movies.append(row)
})
   
   

   
}

function  addToLocalStrorage(elem){
    var localData=localStorage.setItem("movie",JSON.stringify(elem));
    window.location.href="./checkout.html"
}
