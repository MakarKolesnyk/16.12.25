const user = {
  login: 'fred',
  email: 'fred@gmail.com',
  age: 23,
  isMale: true,
  sayHi() {
    return 'hi, my login ' + this.login;
  },
  hobbies: ['sport', 'game'],
  address: {
    town: 'Zp',
    street: 'Qwerty'
  },
  property: undefined, // в json не попадают!!!
  description: null
};

console.log(user.sayHi());

const userInJson = JSON.stringify(user);
console.log(userInJson);

const jsonUser =`{"login":"fred","email":"fred@gmail.com","age":23,"isMale":true,"hobbies":["sport","game"],"address":{"town":"Zp","street":"Qwerty"},"description":null}`
const task = JSON.parse(jsonUser)
console.log(task);
