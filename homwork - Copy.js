function BestProfit(arr) {
    let min = arr[0];
    let index_min = 0 ;
    let index_max = 0 ;
    let max = arr[0];
    let day_min = "";
    let day_max = "" ;
   
   
    
    

    arr.forEach((element ,i) => {
        if (min > element){
        min = element;
        max = element ;
         index_min = i ;
        index_max = i ;
        }
       
    });
    
    for (let i = 0 ;i <arr.length ;i++){
        if (max < arr[i] && (i >=index_max)){
            max = arr[i]; ;
            index_max = i ;
            
        }
        
      
        
    };
    switch (index_max){
        case 0: day_max = "saturday";
        break;
        case 1: day_max = "sunday";
        break;
        case 2: day_max = "monday";
        break;
        case 3: day_max = "tuesday";
        break;
        case 4: day_max = "wednesday";
        break;
        case 5: day_max = "thursday";
        default : day_max = "any day";
        break;
    }

    switch (index_min){
        case 0: day_min = "saturday";
        break;
        case 1: day_min = "sunday";
        break;
        case 2: day_min = "monday";
        break;
        case 3: day_min = "tuesday";
        break;
        case 4: day_min = "wednesday";
        break;
        case 5: day_min = "thursday";
        default : day_min = "any day";
        break;
    }
    console.log("we buy on "+day_min +" and sell on "+day_max);
}
BestProfit([150, 146, 142, 143, 145, 144])
function CheckOverlap(t1Start, t1End, t2Start, t2End) {
let text ="";
t1Start == t1End ?text = "overlap":t2Start==t2End?text="overlap":t1Start==t2Start?text="overlap":t1End==t2Start?text="overlap":text="no overlap";
return text;
}
console.log(CheckOverlap("13/5/2021 13:00","14/5/2021 13:00","14/5/2021 13:00","16/5/2021 13:00")
);
function HowManyPairs(shoes) {
    let pairs =0;
    for (let i = 0; i < shoes.length; i++) {
        shoes[i]==shoes[i+1] && shoes[i+1]!=shoes[i+2] && i<shoes.length?pairs++ :shoes[i]!=shoes[i+1]?pairs++:null

    }
    return pairs/2;
}
console.log(HowManyPairs("RLRLRRLL"));
function Sortarray(a){
    let swap = true;
for (let n = 0; n< a.length&&swap; n++){

swap = false;
for(let i = 0; i < a.length; i++){

    if (a[i]>a[i+1]){
        let temp = a[i];
        a[i]=a[i+1];
        a[i+1]=temp;
        swap = true;
    }

}
}
return a;
}
console.log(Sortarray([23, 15, 34, 17, -28]) );
function min_max(a){
    let min = a[0];
    let max = a[0];

    a.forEach(element => {
        if(min  >= element){ 
            min = element;
        }
        else if (max <= element){
            max = element;
        }
    });
    return [min,max];
}
console.log(min_max(Sortarray([23, 15, 34, 17, -28])))
function missingnum(array){
    
    let miss = 0 ;
    Sortarray(array);
    for (let i = 0 ; i<array.length+1; i++){
        if (array[i]==i+1)continue;
        else {
            miss = i+1;
            break;
        }
    }
        
    
    return miss;

}
console.log(missingnum([10, 5, 1, 2, 4, 6, 8, 3, 9]))