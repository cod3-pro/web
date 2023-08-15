let slogans = document.querySelectorAll("h1 .slogan");
let time = 500;
slogans.forEach((slogan) => {
  setTimeout(() => {
    slogan.classList.add("show");
  }, time);
  time = time + 500;
});

time = 2000;
// tagline animation appear now
let taglines = document.querySelectorAll(".tagline span");
taglines.forEach((tag) => {
  setTimeout(() => {
    tag.style.color = "white";
  }, time);
  time = time + 100;
  setTimeout(() => {
    tag.style.color = "";
  }, time);
});

time = 2000;
let services = document.querySelectorAll(".service");
let trainings = document.querySelectorAll(".training");

services.forEach((service) => {
  setTimeout(() => {
    service.classList.add("show");
  }, time);
  time = time + 50;
  setTimeout(() => {
    service.style.backgroundColor = "#5CA7AD40";
  }, time);
});

trainings.forEach((training) => {
  setTimeout(() => {
    training.classList.add("show");
  }, time);
  time = time + 50;
  setTimeout(() => {
    training.style.backgroundColor = "#FFF";
  }, time);
});
