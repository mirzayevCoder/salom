"use strict";
const yangilik = +prompt('siz qancha yangilik kordiz');
const personalNewsDB = {
  count: yangilik,
  news: {},
  actors: {},
  genres: [],
  privat: false
}
for(let i = 0; i < 2; i++){
  const a = prompt('oxirgi korgan yangiliklariz'),
    b = +prompt('unga qancha baho berar ediz');
  if(a != null && b != null && a != "" && b != "" && a.length < 10){
    personalNewsDB.news[a] = b; 
  }else{
    i--
  }
} 
if(personalNewsDB.count < 10){
  console.log('ikkichi');
}else if(personalNewsDB.count < 30){
  console.log('qoniqarli');
}else if(personalNewsDB.count < 50){
  console.log('alo');
}else{
  console.log('xato yuz berdi');
}
console.log(personalNewsDB);

