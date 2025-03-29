const btnquote=document.getElementById("btn-quote");
 async function genrateRandomquote(){
    try{
        const url="https://dummyjson.com/quotes/random";
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
        document.querySelector(".quote").textContent = data.quote;
        document.querySelector(".author").textContent = data.author;


    }
    catch(err){
       console.error(err)
    }
}
btnquote.addEventListener("click",genrateRandomquote);