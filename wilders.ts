interface User {
  name: String;
  age: Number;
}

const prettyPrintWilder = (users: Array<User>) => {
  users.map((user: User) => {
    console.log(`${user.name} is ${user.age} years old`);
  });
};

const wilders: Array<User> = [];
const user1 = { name: 'Pierre', age: 23 };
const user2 = { name: 'Paul', age: 23 };
const user3 = { name: 'Jacques', age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
