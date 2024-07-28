"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
logDetails(123, 'John');
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
greet({ name: 'John', uid: 123 });
