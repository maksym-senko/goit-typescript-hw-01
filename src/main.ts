// import { age, username, toggle, empty, callback } from "./basic/1";
// import { person } from "./basic/2";
// import { value, status } from "./basic/3";
// import { showMessage, calc } from "./basic/4";
// import { DayOfWeek, isWeekend } from "./basic/5";
// import { printUserInfo } from "./basic/6";
// import { mango, poly } from "./basic/6";
// import { page1 } from "./basic/7";
// import { compare } from "./generics/2";
// import { merge } from "./generics/3";
// import { createOrUpdateUser } from "./generics/4";
// import { RoleDescription, UserRole } from "./generics/5";
// import { Params, Form } from "./generics/6";
import './style.css'


const main = () => {
  // basic 
  // 1.ts 
  // console.log(age);
  // console.log(username);
  // console.log(toggle);
  // console.log(empty);
  // console.log(callback(5));


  // 2.ts 
  // console.log(person[0]);
  // console.log(person[1]);


  // 3.ts 
  // const value = 'Hello';
  // const status = 'enable';


  // console.log('value:', value);
  // console.log('status:', status);


  // 4.ts
  // showMessage("Hello, TypeScript!");
  // const result = calc(10, 20);
  // console.log(result);

  // 5.ts
  // console.log(isWeekend(DayOfWeek.Monday));
  // console.log(isWeekend(DayOfWeek.Saturday));
  // console.log(isWeekend(DayOfWeek.Sunday));

  // 6.ts
  // printUserInfo(mango);
  // printUserInfo(poly);

  // 7.ts
  // const isPage1Valid = typeof page1 === 'object' && page1.title && typeof page1.likes === 'number';
  // console.log(isPage1Valid);


  // generics 
  // 1.ts
  // const userData = {
  //   id: 1,
  //   name: 'Max',
  //   email: 'max@example.com',
  // };


  // console.log(typeof userData.id === 'number');
  // console.log(typeof userData.name === 'string');
  // console.log(userData instanceof Object);

  // 2.ts 
  // const top = {
  //   name: 'Top Object',
  //   color: 'Red',
  // };
  

  // const bottom = {
  //   position: 1,
  //   weight: 100,
  // };
  

  // const result = compare(top, bottom);
  // console.log(result); 


  // 3.ts 
  // const objA = { name: 'Alice', age: 25 };
  // const objB = { job: 'Developer', city: 'New York' };

  // const merged = merge(objA, objB);
  // console.log(merged);


  // 4.ts 
  // createOrUpdateUser({ 
  //   email: 'user@mail.com', 
  //   password: 'password123' 
  // });


  // createOrUpdateUser({ 
  //   name: 'John', 
  //   surname: 'Doe' 
  // });


  // createOrUpdateUser({ 
  //   name: 'John', 
  //   surname: 'Doe', 
  //   email: 'john@example.com', 
  //   password: 'newpassword123' 
  // });


  // 5.ts 
  // console.log(RoleDescription[UserRole.admin]);
  // console.log(RoleDescription[UserRole.editor]);
  // console.log(RoleDescription[UserRole.guest]);


  // 6.ts
  // const Form: Params = {
  //   email: 'user@example.com',
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   phone: '123-456-7890',
  // };

};


main();