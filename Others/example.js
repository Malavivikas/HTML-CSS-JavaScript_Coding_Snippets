// const select = document.querySelectorAll(".currency");
// const btn = document.getElementById('btn');
// const num = document.getElementById('num');
// const ans = document.getElementById('ans');

// fetch('https://api.frankfurter.app/currencies')
//     .then((data) => data.json())
//     .then((data) => {
//         display(data);
//     });

// function display(data) {
//     const entries = Object.entries(data)
//         // console.log(entries);
//     for (var i = 0; i < entries.length; i++) {
//         select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
//         select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
//     }
// }
// btn.addEventListener("click", () => {
//     let curr1 = select[0].value;
//     let curr2 = select[1].value;
//     let value = num.value;

//     if (curr1 != curr2) {
//         convert(curr1, curr2, value);
//     } else {
//         alert("Choose different currency!!!");
//     }
// });

// function convert(curr1, curr2, value) {
//     const host = "api.frankfurter.app";
//     fetch(
//             `https://${host}/latest?amount=${value}&from=${curr1}&to=${curr2}`
//         )
//         .then((val) => val.json())
//         .then((val) => {
//             console.log(Object.values(val.rates)[0]);
//             ans.value = Object.values(val.rates)[0];
//         });
// }

// const items = [10, 20, 30, 40, 40, 60, 70, 80, 90, 100];
// const randItems = items[Math.floor(Math.random() * items.length)];
// console.log(randItems);