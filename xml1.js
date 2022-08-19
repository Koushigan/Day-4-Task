// Display Countries names, regions, sub-region, populations

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();

xhr.responseType = "json";

xhr.onload = function displayResult(){
    const countries = xhr.response;
    console.log(countries);
  
    for(let index in countries){
        console.log(+index+ 1, countries[index].name);
        console.log(+index+ 1, countries[index].region);
        console.log(+index+ 1, countries[index].subregion);
        console.log(+index+ 1, countries[index].population);
    }
};  