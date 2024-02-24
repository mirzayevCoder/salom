"use strict";
// let num = +prompt("ikkinchi jahon urushi qachon bolgan")
// let x = 1941,
//     y = 1945;
// if(num >= x && num <= y){
//   console.log('togri javob');
// }else if(num <= x){
//   console.log('gitler hali uyida');
// }else if(num >= y){
//   console.log('urush otib ketgan');
// }

// let yosh = +prompt("yoshingizni kiriting")
// if(yosh <= 10){
//   console.log('salom kichkintoy');
// }else if(yosh <= 18){
//   console.log('salom mehmon');
// }else if(yosh <= 50){
//   console.log('salom amaki');
// }else if(yosh <= 100){
//   console.log('salom bobo');
// }else if(yosh >= 110){
//   console.log('inson bunday yoshga yetaolmaydi');
// }else{
//   console.log('notogri malumot kiritdiz');
// }

// let age = +prompt("yoshingizni kiriting")
// if(age >= 18 && age <= 59){
//   console.log('siz hali ishlashiz kerak');
// }else if(age >= 59){
//   console.log('pensiaga chiqish vaqti keldi');
// }else if(age <= 18){
//   console.log('ishlashga vohli borib oqing');
// }else{
//   console.log('notogri malumot kiritdinggiz');
// }

// const user = prompt('write login')
// if(user === 'admin'){
//   +prompt('write password') == 12345 ? alert('Welcome') : alert('Error password');
// }else{
//   alert('Sizni tasdiqlab bolmadi')
// }

// let num = +prompt('son kiriting')
// if(num > 0){
//   console.log(++num);                  //birinchi
// }else if(num <= 0){
//   console.log(num);
// }

// let num = +prompt('son kiriting')
// if(num > 0){
//   console.log(++num);                 //ikkinchi
// }else if(num <= 0){
//   console.log(num-2);
// }

// let num = +prompt('son kiriting')
// if(num > 0){
//   console.log(++num);                 
// }else if(num < 0){                        //uchunchi
//   console.log(num-2);
// }else if(num == 0){
//  console.log(num = 10);
// }

// let a = +prompt('son kiriting')
// let b = +prompt('son kiriting') 
// let c = +prompt('son kiriting') 
// if(a > 0){
//   console.log('musbat')
// }else{
//   console.log('manfiy');
// }
// if(b > 0){
//   console.log('musbat');                   //tortinchi
// }else{                                     //beshinchi
//   console.log('manfiy');
// }
// if(c > 0){
//   console.log('musbat');
// }else{
//   console.log('manfiy');
// }

// let x = +prompt('son kiriting')
// let z = +prompt('son kiriting')
// if(x > z){                                     //oltinchi
//   console.log(x, 'katta');                     //katta son topuvchi
// }else if(z > x){
//   console.log(z, 'katta');
// }

// let a = +prompt('son kiriting')
// let b = +prompt('son kiriting')
// if(a < b){
//   console.log(a, 'birinchi t/r');                   //yettinchi
// }else if(b < a){
//   console.log(b, 'ikkinchi t/r');
// }

// let a = +prompt('son kiriting')
// let b = +prompt('son kiriting')
// if(a > b){
//   console.log(a, 'kattasi');                   //sakkizinchi
// }else if(b > a){
//   console.log(b, 'kattasi');
// }
// if(a < b){
//   console.log(a, 'kichigi');
// }else if(b < a){
//   console.log(b, 'kichigi');
// }

// let a = +prompt('son kiriting')
// let b = +prompt('son kiriting')
// if(a < b){                                        //toqqizinchi
//   console.log(a, 'b katta->', b);
// }else if(a > b){
//   console.log(a -= a, 'b katta->', b);
// }

// let a = +prompt('son kiriting')
// let b = +prompt('son kiriting')
// let c = a + b;                                     //oninchi
// if(a != b){                                        //yig'indini ozlashtiruvchi
//   console.log('a ozgaruvchi', a = c, 'b ozgaruvchi', b = c);
// }else if(a == b){
//   console.log(0);
// }

// let a = +prompt('son kiriting')
// let b = +prompt('son kiriting')
// if(a > b){
//   console.log('a = ', a, 'b = ', b = a);         //on birinchi
// }else if(b > a){                                 //katta qiymatni ozlashtiruvchi
//   console.log('a = ', a = b, 'b = ', b);
// }else if(a == b){
//   console.log(0);
// }

// let a = +prompt('son kiriting')
// let b = +prompt('son kiriting')
// let c = +prompt('son kiriting')
// if(a < b && a < c){
//   console.log('a kichigi', a);                  //on ikkinchi
// }else if(b < a && b < c){                       //kichik son topuvchi
//   console.log('b kichigi', b);
// }else if(c < a && c < b){
//   console.log('c kichigi', c);
// } 

// let a = +prompt('son kiriting')
// let b = +prompt('son kiriting')
// let c = +prompt('son kiriting')
// if(a < b && a > c || a > b && a < c){              //on uchinchi
//   console.log('ortason shu', a);                   //orta son aniqlovchi
// }else if(b < a && b > c || b > a && b < c){
//   console.log('ortason shu', b);
// }else if(c < a && c > b || c > a && c < b){
//   console.log('ortason shu', c);
// }

// let a = +prompt('son kiriting')
// let b = +prompt('son kiriting')
// let c = +prompt('son kiriting')
// if(a < b && b < c){
//   console.log(a, b, c);
// }else if(a < c && c < b){
//   console.log(a, c, b);
// }else if(b < a && a < c){
//   console.log(b, a, c);                             //on tortinchi
// }else if(b < c && c < a){                           //osish tartibi
//   console.log(b, c, a);
// }else if(c < a && a < b){
//   console.log(c, a, b);
// }else if(c < b && b < a){
//   console.log(c, b, a);
// }

// const num = {
//   ajhahg: 'kajdj',
//   hdgsy: 'axh',
//   hdgadfy: 'jhadyg'
// }
// for (let key in num) {
//   console.log(key, num[key]);
// }

// const num = prompt('son kiriting', '')
// const icon = prompt('***** kiriting', '')
//   for(let i = ''; i.length < num;){
//     i = i + icon;
//     console.log(i);                      //********
// }

// let son = +prompt("son kiriting");
// let a = son / 2;
// for(let i = 0; i <= a * son + a; i++){                 //barcha sonlarni qoshish
//   console.log(i);
// }

// let num1 = prompt('son kiriting')

//   for(let i = 0; i <= num1; i++){
//   if(num1 == 0){
//     console.log(i, 'null son');
//   }else if(i % 2 == 0){                             //juft son, toq son
//     console.log(i, 'juft son');
//   }else{
//     console.log(i, 'toq son')
//   }
// }

// let buttun = document.getElementById("tugma");
// let ptag = document.getElementById("a");

// function bosish() {
//   let input = document.getElementById("num").value;
//   let total = 0;
  
//   for(let i = 0; i <= input; i++){
//     total += i;
//   }
//   ptag.innerHTML = total;
// }
// buttun.onclick = bosish;

// let tugma = document.getElementById("send");
// let h1 = document.getElementById("z");

// function enter() {
//   let num = document.getElementById("1").value
//   let text = document.getElementById("2").value

//   for(let i = 0; i <= num; i++){
//     h1.innerHTML = i + text;
//   }
// }
// tugma.onclick = enter;

let tugma = document.querySelector("#btn")
  tugma.onclick = enter
let text = document.querySelector("#h4")

function enter(){
  let yosh = document.querySelector("#age").value
  if(yosh <= 0 || yosh <= 10){
    text.innerHTML = 'Salom kichkintoy'
  }else if(yosh <= 18){
    text.innerHTML = 'Salom mehmon'
  }else if(yosh <= 50){
    text.innerHTML = 'Salom amaki'
  }else if(yosh <= 100){
    text.innerHTML = 'Salom ota'
  }else{
    text.innerHTML = 'inson bu yoshga yetishi qiyin'
  }
}

let send = document.querySelector("#button")
  send.onclick = enter1
let htag = document.querySelector("#h3")

function enter1(){
  let work = document.querySelector("#input").value
  if(work < 18){
    htag.innerHTML = "ishlashga hali vohli borib o'qing"
  }else if(work >= 18 && work <= 60){
    htag.innerHTML = "siz hali ishlashingiz kerak"
  }else{
    htag.innerHTML = "pensiaga chiqish vaqti bo'ldi"
  }
}

let btn = document.querySelector("#send")
  btn.onclick = enter2
let htwo = document.querySelector("#h2")

function enter2(){
  let email = document.querySelector("#login").value
  if(email === "admin"){
    let password = document.querySelector("#parol").value
    == 12345 ? htwo.innerHTML = "Welcome" : htwo.innerHTML = "Error password"
  }else{
    htwo.innerHTML = "Sizni tasdiqlab bo'lmadi"
  }
}

let buttun = document.querySelector("#goo")
  buttun.onclick = enter3
let hone = document.querySelector("#h1")

function enter3(){
  let oy = document.querySelector("#month").value
  if(oy == 1 || oy == 2 || oy == 12){
    hone.innerHTML = "qish fasli"
  }else if(oy >= 3 && oy <= 5){
    hone.innerHTML = "bahor fasli"
  }else if(oy >= 6 && oy <= 8){
    hone.innerHTML = "yoz fasli"
  }else if(oy >= 9 && oy <= 11){
    hone.innerHTML = "kuz fasli"
  }else{
    hone.innerHTML = "error number"
  }
}


let one = document.querySelector("#ggg")
  one.onclick = enter4
let H = document.querySelector("#www")

  function enter4(){
    let a = +document.querySelector("#num1").value
    let b = +document.querySelector("#num2").value
    let c = +document.querySelector("#num3").value
    if(a > b && a > c){
      H.innerHTML = a
    }else if(b > a && b > c){
      H.innerHTML = b
    }else{
      H.innerHTML = c
    } 
  }

let bir = +prompt("son yozing")
let ikki = prompt('ismizni yozing')
let uch = +prompt("son yozing")
function myfunc(a, b) {
  return a + b;
}
function myfunc1(a, b) {
  return a - b;
}
function myfunc2(a, b) {
  return a + b;
}
function myfunc3(a, b) {
  return a + b;
}
switch (ikki) {
  case "+":
    console.log(myfunc(bir, uch));
    break;
  case "-":
    console.log(myfunc1(bir, uch));
    break
  case "*":
    console.log(myfunc2(bir, uch));
    break
  case "/":
    console.log(myfunc3(bir, uch));
}