let obj = {
  name: "Vikas",
  age: 28,
};

/* let arr = [];
for (let [key, value] of Object.entries(obj)) {
  arr.push(`${key}, ${value}`);
} */
console.log(Object.entries(obj).flat());
