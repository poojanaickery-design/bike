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

let five=num.map((el)=>el*5)
console.log(five)

//filter

let even=num.filter((el)=>el%2==0)
console.log(even)

//reduce

let sum=num.reduce((acc,val)=>acc+val)      //0+1=1    //1+2=3  //3+3=6
console.log(sum)





