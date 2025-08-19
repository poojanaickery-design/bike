
let arr = ["sita","sai","pooja","krishna","yashu","jyothi"];

// first filter
let filtered = arr.filter(name => name.length > 3);

// then map
let names = filtered.map(name => name.toUpperCase());

console.log(names);
 

const cart = [
    { item:"book",price:120,quantity:2},
    { item:"pen",price:10,quantity:5},
    {item:"bag",price:500,quantity:1},
]
//for of

for(let item of cart){ 
    let total=item.price*item.quantity;
    console.log(item => {total});

}
//for 
for (let key in cart[0]) 
    console.log(`${key}: ${cart[0][key]}`);


//for each 

cart.forEach((product)=>{
    console.log(product.item.toUpperCase())
})
