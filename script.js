/*var l=parseInt(prompt("enter the value"));
var a=new Promise((resolve,rej)=>{
    if(l>=18){
        resolve("vote")
    }
    else{
        rej("not vot")
    }
});
console.log(a)*/

var contaniner = document.createElement("div");
contaniner.setAttribute("class", "container");
contaniner.setAttribute(
  "style",
  "background-color:gray ; width:80%;padding-left:6%;"
);
var row = document.createElement("div");
row.setAttribute("style", "height:90%;");
row.classList.add("row", "m-3");
contaniner.append(row);

var res = fetch("https://restcountries.com/v2/all");

res.then((data) => data.json()).then((value) => foo(value));

function foo(value) {
  for (var i = 0; i < value.length; i++) {
    row.innerHTML += `
        
        <div class="card border-suces col-md-4" style="max-width:18rem;margin-top:35px; margin-left:7px;">
        <div class="card border-primary mb-3" style="background-color:lightgray; max-width:18rem ; height:100%" >
          <div class="card-header" style="background-color:black; color:white; text-align:center">${value[i].name}</div>
          <img class="card-img-top " src="${value[i].flags.svg}" alt="Card image cap">
            <h6 class="card-title" style="color:white;text-align:center">capital:${value[i].capital}</h5>
            <h6 class="card-title" style="color:white;text-align:center">Region:${value[i].region}</h5>
            <h6 class="card-title" style="color:white;text-align:center">Country code:${value[i].alpha3Code}</h5>
            <a href="https://api.openweathermap.org/data/2.5/weather?q=${value[i].name}&appid=6eb9fde77a6af79f7f3bb0d39a5d51b8" class="btn btn-primary" style="color:white;text-align:cente;background-color: lightgray; border-bottom:5%; width:70%;margin-left:13%;">click for weather</a>
          </div>  
          </div>
          </div>`;
    document.body.append(contaniner);
  }
}

let url = `https://api.openweathermap.org/data/2.5/weather?q=${value[i].name}&appid=6eb9fde77a6af79f7f3bb0d39a5d51b8`;
var r = fetch(url);
r.then((data1) => data1.json()).then((data1) => console.log(data1.main.temp));

