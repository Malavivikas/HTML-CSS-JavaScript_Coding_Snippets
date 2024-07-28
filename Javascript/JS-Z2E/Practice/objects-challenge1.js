//markMass = 78, markHeight=1.69, johnMass=92, johnHeight=1.95;
let mark ={
    fullName: "Mark Chen",
    markMass: 78,
    markHeight: 1.69,
    calcBMI: function () {
        this.bmi = this.markMass / this.markHeight ** 2;
        return this.bmi;
    }
}
let john ={
    fullName: "John Doe",
    johnMass: 92,
    johnHeight: 1.95,
    calcBMI: function () {
        this.bmi = this.johnMass / (this.johnHeight * this.johnHeight);
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI()
// console.log(mark.calcBMI());
// console.log(john.calcBMI());
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is greater than ${john.fullName}'s BMI(${john.bmi}).`);    
}else{
    console.log(`${john.fullName}'s BMI (${john.bmi}) is greater than ${mark.fullName}'s BMI(${mark.bmi}).`); 
}