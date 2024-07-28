type StringOrNum = string | number;
type Obj = { name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}
logDetails(123, 'John');
const greet = (user: Obj) => {
  console.log(`${user.name} says hello`); 
}
greet({name: 'John', uid: 123});