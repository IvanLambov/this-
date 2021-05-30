'use strict';
// vizov 
// function showThis(a, b) {
//      console.log(this);

//      function sum() {
//           console.log(this);
//           return a+ b;
//      }
//      console.log(sum());
// }
// showThis( 4,5);
// const obj={
// a:20,
// b:15,
// sum:function(){
//      function shout(){

     
//      console.log(this);
//      }
//      shout();
// }
// };
//  function User (name, id){
//       this.name=name;
//      this.id=id;
//      this.human= true;
//      this.hello = function(){
//           console.log("Hello!" + this.name);
//      };
//  }
//  let ivan = new User ('Ivan', 23);
// obj.sum();

// function sayName(surname){
//      console.log(this);
//      console.log(this.name + surname);
// }

// const user={
//      name:'John'
// };

// sayName.call(user, 'Smith', );
// sayName.apply(user, ['Smith']);

// function count(num){
//      return this*num;
// }
// //udvaivaem cislo 
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(53));
//1 obicnaia funct : =window , elsi use strict underfined 
//2 kontext u metodov obiektov - sam obiekt 
//3. this v konstruktorah i klassah eto novii exempliar obiekta 
//4.rucinaia priveazka this 
const btn = document.querySelector('.erd');
btn .addEventListener('cick',function(){
this.style.backgroundColor='red';
});


//strelocinaia function net konteksta vizova 
const obj ={
     num :5,
     sayNumber: function (){
          const say =() =>{
console.log (this.num);
          };
          say ();
     }
};
obj.sayNumber();

const double = (a)=> a*2;
console.log(double(4)); 

