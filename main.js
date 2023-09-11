let arr=[];
for(let i=0;i<10;i++){
    arr.push(Math.floor(Math.random()*10));
}

    let SumEvenNumber=0;
    for(let i=0;i<arr.length;i++){

        if(arr[i]%2==0){
            SumEvenNumber+=arr[i];

        }
    }
let  NumberMinFive =0;
for(let i=0;i<arr.length;i++){

    if(arr[i]<5){
        NumberMinFive+=arr[i];

    }
}

console.log("المصفوفة العشوائية",arr);
console.log(" مجموع الاعداد الزوجية في المصفوفة العشوائية",SumEvenNumber);
console.log(" مجموع الاعداد التي دليلها أصغر من5 في المصفوفة العشوائية",NumberMinFive);

let obj={
    name:"kais",
    age:21,
    number: 963992517890,
    email:"kais12hasan@gmail.com"
}
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.number);
console.log(obj.email);