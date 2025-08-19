function arithmatic(){
    let a=10
    let b=5 
    
    console.log(a+b)
    console.log(a-b)
    let c= a*b
    console.log(c)
    console.log(a/b)
    console.log(a%b)
    console.log(a**b)
    a++
    console.log(a)
    b--
    console.log(b)

}

//arithmatic() 
 
function assignment(){

      let a=10
      let b=25
      a+=b        //a=a+b
      console.log(a)

      a-=b       //a=a-b
      console.log(a) 
}


//assignment()

function equality(){  
   let a=10
   let b=20
   let c="10"

   // == it checks the value only 

   console.log(a==b)
   console.log(a==c)

   // === it checks both value and datatype 

   console.log(a===b)
   console.log(a===c)

}

equality()
    

function conparison(){

    let a=10 
    let b= 20
    let c="10"

    console.log(a!=b)
    console.log(a<b)
    console.log(a>b)
    console.log(c>=b)
    console.log(c<=b)
}

comparison()

function logical(){


    let a=10
    let b=20
    let c="10"
 
    console.log(a==c && a<b)
    console .log(a==c || a>b)
    console.log(a!=b)
}

logical()

let age=15
let ternary=(age>15)? "adult" : "child"
console.log(ternary)

  
