const data = [
  { name: "Tomato", cost: 15, weight: 5 },
  { name: "Carrot", cost: 10, weight: 2 },
  { name: "Onion", cost: 5, weight: 8 },
];

function getSortValue(vegetable) {
  return vegetable.cost;
}

const sortOrder = "desc";
const reverseOrder = sortOrder === "asc" ? 1 : -1;

const res = data.sort((a, b) => {
  const valA = getSortValue(a);
  const valB = getSortValue(b);

  if (typeof valA === "string") {
    return valA.localeCompare(valB) * reverseOrder;
  } else {
    return (valA - valB) * reverseOrder;
  }
});

console.log(res);
