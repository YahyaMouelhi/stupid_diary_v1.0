const today = new Date().toJSON().slice(0, 10) + " " + new Date().toJSON().slice(11, 19);

document.querySelector("h3").textContent += today;