const date = new Date();

const Calendar = () => {
    date.setDate(1);
const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const prevDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const firstDayIndex = date.getDay();
const lastDateIndex = new Date(date.getFullYear(), date.getMonth() + 1,0).getDay();
console.log(lastDateIndex);
const nextDays = 7 - lastDateIndex - 1;
const months = ["January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"];
 
document.querySelector(".date h1").innerHTML = months[date.getMonth()];
document.querySelector(".date p").innerHTML = date.toDateString();

let Days = ' ';

for(let x = firstDayIndex; x>0; x--){
    Days += `<div class='prev-date'>${prevDate - (x-1)
    
    }</div>`;
}

for(let i = 1; i<= 31 ;i++){
    if(i == new Date().getDate()
    && date.getMonth()== new Date().getMonth()){
        Days += `<div class="today">${i}</div>`; 
    }
    else{
    Days += `<div>${i}</div>`;
    }
}

for(let j=1; j <= nextDays; j++){
    Days += `<div class="next-date">${j}</div>`;
    document.querySelector(".days").innerHTML = Days;
}

}

document.querySelector('.prev').addEventListener('click',() => {date.setMonth(date.getMonth() - 1);
    Calendar();
});

document.querySelector('.next').addEventListener('click',() => {date.setMonth(date.getMonth() + 1);
    Calendar();
});


Calendar()