let name="pooja";
console.log(name.split("").reverse().join(""))

function arr(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            let acc=true
            if(arr){
                resolve('finished')
            }
            else{
                reject('not finished')
            }
        },2000);
    })
}

async function sai(){
    try{
        const a=await arr()
        console.log(a)
    }
    catch(err){
        console.log("ERROR :",err)
    }
}