let markMass = 78, markHeight = 1.69, johnMass = 92, johnHeight = 1.95;
let markBMI, johnBMI;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);