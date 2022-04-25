// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
 var chooseMovies=document.getElementById("movie");
var data=JSON.parse(localStorage.getItem("movie")) ;
//  console.log(data)

function map(data){
    console.log(data)

    var row=document.createElement("div")
    var poster=document.createElement("img")
    poster.src=data.Poster;
    console.log(poster)
    var Title=document.createElement("p")
    Title.innerText=data.Title;
    console.log(Title)

    var Year=document.createElement("p")
    Year.innerText=data.Year;
    console.log(Year)
    // var btn=document.createElement("button")
    // btn.innerText="Book Now";
    // btn.setAttribute("class","book_now");
    //     btn.addEventListener("click",function(){
    //     addToLocalStrorage(elem);
    // })
   
    row.append(poster,Title,Year)
    console.log(row)
    chooseMovies.append(row)


}
map (data)

function alert(){
    // console.log("here")
    alert ("Insufficient Balance!")
}
