
function getSalary (){
  return new Promise((resolve)=> setTimeout(() => {
       resolve (33000); 
    },500))
    
}
function subText(salary){
    return new Promise((resolve)=> setTimeout(() => {
        resolve (salary-salary*0.75); 
     },500))

}
function subRent(salary){
    return new Promise((resolve)=> setTimeout(() => {
        resolve (salary-5000); 
     },500))

}
async function getIncome(){
    let salary = await getSalary();
    salary = await subText(salary);
    salary = await subRent(salary);
    return salary
}
let lastthing = await getIncome();
console.log(lastthing);