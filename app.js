// Selectio..//


const month_ =document.querySelector('.month');
const dayName_ =document.querySelector('.day-name');
const date_ = document.querySelector('.date');
const year_ =document.querySelector('.year'); 

//Date Object..//

let d = new Date();
// Month ///


month_.innerHTML=d.toLocaleDateString('en',{month:"long"});

// Day_Name

dayName_.innerHTML=d.toLocaleDateString('en',{weekday:"long"});

// Date//

date_.innerHTML=d.getDate();

// Year ..

year_.innerHTML-d.getFullYear();

