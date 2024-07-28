//Example Google UI
// let query = document.querySelector('.query');
// let searchBtn = document.querySelector('.searchBtn');
// searchBtn.onclick = function() {
//     let url = 'https://www.google.com/search?q=' + query.value;
//     window.open(url);
// }

//Example Draggable Navbar
// const nav = document.querySelector('.nav');
// const toggle = document.querySelector('.toggle');
// toggle.onclick = function() {
//     this.classList.toggle('active');
//     nav.classList.toggle('active');
// }
// $(function() {
//     $(".nav").draggable();
// });

// Example Bubble Background

// function createBubbles() {
//     const section = document.querySelector('section');
//     const createElement = document.createElement('span');
//     var size = Math.random() * 60;

//     createElement.style.width = 20 + size + 'px';
//     createElement.style.height = 20 + size + 'px';
//     createElement.style.left = Math.random() * innerWidth + 'px';
//     section.appendChild(createElement);
//     setTimeout(() => {
//         createElement.remove();
//     }, 4000);
// }
// setInterval(createBubbles, 50);

// Example Download Files Button

// const button = document.getElementById('button');

// clickButton = () => {
//     button.classList.add('loading');
//     button.classList.remove('ready');
//     document.getElementById("default").style.display = "none";
//     setTimeout(() => {
//         button.classList.add('complete');
//         button.classList.remove('loading');
//         document.getElementById("success").style.display = "inline-block";
//         setTimeout(() => {
//             document.getElementById("default").style.display = "inline-block";
//             document.getElementById("success").style.display = "none";
//             button.classList.add('ready');
//             button.classList.remove('complete');
//         }, 5000);
//     }, 5000);
// }

// Example Random Suggestion Text JS

// const endpoint = 'https://www.boredapi.com/api/activity';
// const butoon = document.querySelector('.button');
// const form = document.querySelector('#form');
// const activityWrapper = document.querySelector('.activity');

// const getActivity = async(event) => {
//     event.preventDefault();
//     const isFree = event.target.children.namedItem('free').checked;
//     let Api = isFree ? `${endpoint}?price=0` : endpoint;

//     const response = await fetch(Api);
//     const json = await response.json();
//     const { activity } = json;

//     activityWrapper.innerHTML = activity;
// }
// form.addEventListener("submit", getActivity);

// Example Simple Counter

// const counter = document.getElementById('counter');
// const incr = document.querySelector('.incr');
// const decr = document.querySelector('.decr');

// let count = 0;
// incr.addEventListener("click", () => {
//     count++;
//     counter.innerHTML = count;
// });

// decr.addEventListener("click", () => {
//     if (count > 0) {
//         count--;
//         counter.innerHTML = count;
//     }
// })

// Example Drawer Navbar Menu
const nav = document.querySelector('.nav');
document.querySelector('.toggle').onclick = function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
}