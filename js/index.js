let hour = document.getElementById('hours');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');
let aps = document.getElementById('ampm');


function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";


    if (h > 12) {
        h = h - 12;
      
        ampm = "PM";
    } else {
        hour.innerText = h;
    }

        
    h = h <10 ? "0"+ h : h;
    hour.innerText = h;
    m = m <10 ? "0"+ m : m;
    minute.innerText = m;
    s = s <10 ? "0"+ s : s;
    second.innerText = s;
    aps, (innerText = ampm);

    setTimeout(() => { 
        updateClock();
    }, 1000);

};

updateClock();