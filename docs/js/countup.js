let countUpDate = new Date("sep 19, 2022 06:45:00").getTime();
let y = setInterval(function() {
  let now = new Date().getTime();
  let distance = Math.abs(countUpDate - now);
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countup").innerHTML = `${days} Days ${hours} h ${minutes} m ${seconds} s`;
  if (distance < 0) {
    clearInterval(y);
    document.getElementById("countup").innerHTML = "EXPIRED";
  }
}, 1000);