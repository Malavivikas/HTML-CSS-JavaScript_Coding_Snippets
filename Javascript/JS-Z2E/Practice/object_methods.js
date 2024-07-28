const person = {
    firstName: 'Vikas',
    lastName: 'Malavi',
    birthYear: 1996,
    age: 2023 - 1996,
    job: 'Developer',
    friends: ['Ganesh', 'Akash', 'Ajay', 'Avadhut'],
    hasDrivingLicense: true,
    /* calcAge: function(birthYear){
      return 2023 - birthYear;
    } */
    calcAge: function(){
      return 2023 - this.birthYear;
    },
    getSummary: function(){
      return `${this.firstName} is a ${this.age} year old ${this.job} and he has ${this.hasDrivingLicense ? 'a' : 'no'} driving license.`
    }
};
// console.log(person.calcAge(person.birthYear));
console.log(person.calcAge());
console.log(person.getSummary());
// console.log(person);
/* 
{
  firstName: 'Vikas',
  lastName: 'Malavi',
  age: 27,
  job: 'Developer',
  friends: [ 'Ganesh', 'Akash', 'Ajay', 'Avadhut' ]
}
*/
console.log(person.firstName);//Vikas(This is Dot(.) notation used to access value by property(key) name)
console.log(person['first' + 'Name']);//Vikas(This is a Bracket([]) notation used to specify an expression to fetch values)
console.log(person['last' + 'Name']);//Malavi
console.log(person['age']);//27

const res = prompt("What do you want to know about person? Choose between firstName, lastName, age, job and friends.")
// console.log(person.res); // Will show undefined
// console.log(person[res]);// If input job will return 'Developer' as a result in console
//If you input a value not available in the object in will return undefined
if(person[res]){
  console.log(person[res]);
}
else{
  console.log('Wrong request! Choose between firstName, lastName, age, job and friends.');
}
person.location = 'India';
//OR
person['instagram'] = '@malavivikas'
console.log(person);
console.log(`${person.firstName} has ${person.friends.length}, and his best friend is ${[person.friends[0]]}`);
