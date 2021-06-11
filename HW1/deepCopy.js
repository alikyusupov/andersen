//Намеренно не гуглил даже само понятие глубокое копирование чтобы случайно не подсмотреть ответ
//Поэтому возможны косяки
//Насколько я понял глубокое копирование - копирование в тч вложенных объектов и методов

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
            colors:["red","blue","yellow"],
            printDetails:function(){
                console.log(`${this.pages} and ${this.price}`)
            }
        }
    },
    printName:function(){
        console.log(`${this.name}`)
    }
}

function copy(objFrom, objTo = {}){
    for(let prop in objFrom){
        objTo[prop] = objFrom[prop]
    }
    return objTo
}

let p = copy(o)
console.log(p.favBook.details.printDetails())//"500 and 250"
console.log(p.favBook.details.colors)//["red", "blue", "yellow"]
console.log(p.printName)//ƒ (){console.log(`${this.name}`)}
