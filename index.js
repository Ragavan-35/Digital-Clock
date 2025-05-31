const hours1 =document.getElementById("hours");
const minutes1 =document.getElementById("minutes");
const seconds1 =document.getElementById("seconds");
const session =document.getElementById("ampm");
function displaytime(){


let today= new Date();
let hr= today.getHours();
let min= today.getMinutes();
let sec= today.getSeconds();

if(hr>12){
    hr=hr-12
    session.innerHTML="PM"
}


hours1.innerHTML=hr<10 ? "0"+hr:hr;
minutes1.innerHTML=min<10 ? "0"+min:min;
seconds1.innerHTML=sec<10 ? "0"+sec:sec;


}
setInterval(displaytime,1000);