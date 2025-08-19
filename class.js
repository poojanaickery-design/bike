class info{
    name="shalu"
    age=7
    native="tirupuur"
    
    details(){
        console.log("my name is",this.name,"and age is",this .age,"and native is",this.native)
    }
}

const print=new info

console.log(print.name)
print.details()

class flower{
    constructor(name,colour,fragrance,season){
        this.name=name;
        this.colour=colour;
        this.fragrance=fragrance;
        this.season=season;
    }

    fdetails(){
        console.log("flower name is",this.name)
        console.log(`colour is $(this.colour)`)
        console.log("frangrance is",this.fragrance)
        console.log("season is ",this .season)
    }
}

const rose=new flower("rose","red","mild","all season")
rose.fdetails()

const jasmine=new flower("jasmine","white","heavy","summer")
jasmine.fdetails()