let name="pooja"
let age="23"
console.log(" name :"+ name.toUpperCase())
console.log("age: "+age)

function result(tamil, english,maths,science,ss){
   let totalMarks=tamil+english+maths+science+ss;
   let percenstage=(totalMarks/500)*100;
   console.log("Total marks:" +totalMarks);
   console.log("percenstage:" +percenstage + "%")
   
if(percenstage>=91 && percenstage<=100){
        console.log("excellent");
     }else if(percenstage>=71){
        console.log("very good");
     }else if(percenstage>=51){
        console.log("good");
     }else if(percenstage>=35){
        console.log("average");
     }else if(percenstage<=35){
        console.log("fail");
     }
   }

result(40,70,80,45,88)

//odd/even using ifelse

let num=7;
if (num % 2 == 0){
   console.log(num + "even");
}else{
   console.log(num +"odd");

}

// switch
let a = 16;
let b = 5;
let operator="+"

switch(operator){
   case"+":
   console.log("add :"+(a+b))
   break;
   case"-":
   console.log("sub:"+ (a-b))
   break;
   case"*":
   console.log("multi:"+(a*b))
   break;
   case"/":
   console.log("div:"+(a/b))
   break;


   default:
      console.log("invalid operartor");

}