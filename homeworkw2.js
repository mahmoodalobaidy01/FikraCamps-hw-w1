function sortByLength(a){
let swap = true;

while(swap){
    swap = false;
    for(let i = 0; i < a.length-1;i++){
        if (a[i].length > a[i+1].length){
            let temp = a[i];
            a[i] = a[i+1];
            a[i+1] = temp;
            swap = true
        }
    }
}
return a;
}
let x =sortByLength(["a", "ccc", "dddd", "bb"]);
console.log(x);
