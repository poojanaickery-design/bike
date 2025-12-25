//for in

let obj={
    name:"pooja",
    age:22 

}

for(let key in obj){
    console.log(obj[key])
}
obj.name

//for of

let arr=["apple","orange","banana","papaya"]

for(let fruit of arr){
    console.log(fruit)
}
//for each

arr.forEach((val,ind,arr)=>{
    console.log(val,ind,arr)
})

//MRF method

//map

let num=[1,2,3,4,5,6,7,8,9]

let five=num.map((el)=>el*2)
console.log(five)

//filter
let even=num.filter((el)=>el%2==0)
console.log(even)
let odd=num.filter((ele)=>ele%1==0)
console.log(odd)


//reduce
let sum=num.reduce((acc,val)=>acc+val)      //0+1=1    //1+2=3  //3+3=6
console.log(sum)


// first index Touppercase
let name = ['hello i am pooja'];

let pooj = name.map((el)=>el.split(" ").map(str =>str.charAt(0).toUpperCase() + str.slice(1)).join(" "));
console.log(pooj);

// map 
//valve,inbex,accumulation

let nun=[1,2,3,4,5,6,7]

const str=nun.map((v,i,a)=>v*5)
console.log(str)

let f=[10,20,30,40,50]
const fil=f.filter((i)=>i>30)
console.log(fil)




