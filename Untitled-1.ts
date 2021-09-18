console.log("jj")

function getSalary(){
    return 1000;
}
function subText(salary){
return (salary-salary*0.07)
}
function subRent(salary){
return (salary-500)
}
function getIncome(){
    let salary = getSalary();
    salary = subText(salary);
    salary = subRent(salary);
    return (salary)
}
console.log(getIncome());