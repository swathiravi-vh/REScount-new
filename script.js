var container=document.createElement("div");
container.setAttribute("class","container");
var row= document.createElement("div");
//<div class="row row-md-3"></div>
//to add multiple class selector to the HTML element
//we will be using classList
//classList is a property to add multiple classes to a single HTML element
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((value)=>foo(value));


function foo(value){
    for(var i=0;i<value.length;i++){
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card text-center">
        <div class="card-header" >
          ${value[i].name}
        </div>
        <div class="card-body">
        <img src="${value[i].flag}" class="card-img-top" >
          <h5  class="card-title">Capital:${value[i].capital}</h5>
          <h5 class="card-title">Region:${value[i].region}</h5>
          <h5 class="card-title">Latlng:${value[i].latlng}</h5>
          <a href="#" class="btn btn-primary">Click for Weather</a>
        </div>
        </div>
      </div>`
      document.body.append(container);

    }
}
