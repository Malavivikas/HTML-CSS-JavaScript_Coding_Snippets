const box = document.querySelectorAll('.notification-box p');
const number = document.querySelectorAll('.number');
number.forEach((e) => {
    e.innerText = box.length;
});