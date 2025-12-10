const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock() {
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = (h >= 12) ? "PM" : "AM";
    h = (h % 12) || 12;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
    document.getElementById("ampm").innerText = ampm;
    setTimeout(updateClock, 1000);
    
}

updateClock();