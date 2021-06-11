let o = {
    name: "Alisher",
    hobbies:["web","football","french"],
    favBook:{
        title:"Some title",
        year:2018,
        author:"Some author",
        details:{
            pages:500,
            price:250,
            colors:["red","blue","yellow"]
        }
    },
    sayHello:function(){
        console.log(`Hello ${this.name}`)
    }
}
let p = {
    name: "Alisher",
    hobbies:["web","football","french"],
    favBook:{
        title:"Some title",
        year:2018,
        author:"Some author",
        details:{
            pages:500,
            price:250,
            colors:["red","blue","yellow"]
        }
    }, 
    sayHello:function(){
        console.log(`Hello ${this.name}`)
    }
}

function eq(obj1, obj2){
    if(obj1 === obj2){
        return true
    }
    else if(typeof obj1 === "function" && typeof obj2 === "function"){
        if(JSON.stringify(obj1) === JSON.stringify(obj2)){
            return true
        }
    }
    else if(typeof obj1 === "object" && typeof obj2 === "object"){
        if(Object.keys(obj1).length !== Object.keys(obj2).length){
            return false
        }
        for(let prop in obj1){
            if(!eq(obj1[prop],obj2[prop])){
                return false
            }
           
        }
        return true
    }
}

console.log(eq(o,p))