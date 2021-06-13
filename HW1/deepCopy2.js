//доработанная версия
let o = {
    name:"Name",
    age:27,
    favBook:{
        title:"Title",
        pages:570,
        published:new Date(1995, 11, 17, 3, 24, 0),
        showInfo:function(){
            console.log(`This book has ${this.pages} pages`)
        },
        colors:["red", "green"]
    }
}


function clonify(objFrom){
    let objTo;
    if(typeof objFrom !== 'object'){
        return objFrom;
    }
    if(Array.isArray(objFrom)){
        objTo = [];
    }else{
        objTo = {};
    }
    for(let prop in objFrom){
        let val = objFrom[prop]
        objTo[prop] = clonify(val)
    }
    return objTo
}


let p = clonify(o)
p.favBook.colors[1] = "blue"
console.log(p)
console.log(o)