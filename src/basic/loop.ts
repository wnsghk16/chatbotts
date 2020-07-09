export default function loop() {
    whileloop() //0 es5
    doWile() //1 es5
    forLoop() //2 es5
    forInArrayLoop() //3
    forOfObjectLoop() //4
    forOfArrayLoop() //5
    forOfMapLoop() //6
    forOfSetLoop() //7
    forOfStringLoop() //8
    symbolIterator() // 9
}
function whileloop() : void {
    console.log("--------0.while-loop--------")
    console.log("1부터 100까지 합")
    let i:number=1
    let sum:number=0
    while(i<=100){
        sum += i
        i++
    }
    console.log(sum)
}
function doWile() : void {
    console.log("--------1.doWile--------")
    console.log("1부터 100까지 합")
    let i:number=1
    let sum:number=0
    do{
        sum += i
        i++
    }while(i<=100)
    console.log(sum)
}
function forLoop() : void {
    console.log("--------2.forLoop--------")
    console.log("1부터 100까지 합")
    let sum:number=0
    for(let i=1;i<=100;i++){
        sum += i
    }
    console.log(sum)
}
function forInArrayLoop() : void {
    console.log("--------3.forInArrayLoop--------")
    let arr = ["a","b","c","d"]
    for (let i in arr){
        console.log(i,arr[i])
    }
}
function forOfObjectLoop() : void {
    console.log("--------4.forOfObjectLoop--------")
    let fruits = {"a":"apple","b":"banana","c":"cherry"}
    for (let i in fruits){
        console.log(i,fruits[i])
    }
}
function forOfArrayLoop() : void {
    console.log("--------5.forOfArrayLoop--------")
    let arr = ["a","b","c","d"]
    for (let i of arr){
        console.log(i,arr[i])
    }
}
function forOfMapLoop() {
    console.log(`---------- 6. forOfMapLoop ----------`)
    let map = new Map([["a",1],["b",2]])
    map.set("a",3)
    for(let i of map){
        console.log(i)
    }
}
function forOfSetLoop() {
    console.log(`---------- 7. forOfSetLoop ----------`)
    let set = new Set(["a","b","c","d","a","b","c"])
    for(let i of set){
        console.log(i)
    }
}
function forOfStringLoop() {
    console.log(`---------- 8. forOfStringLoop ----------`)
    for(let i of "Hello"){
        console.log(i)
    }
}
function symbolIterator() {
    console.log(`---------- 9. symbolIterator ----------`)
    let arr = [1,2]
    let obj = arr[Symbol.iterator]()
    console.log(`1. ${typeof obj}`)
    console.log(`2. ${JSON.stringify(obj.next())}`)
    console.log(`3. ${JSON.stringify(obj.next())}`)
    console.log(`4. ${JSON.stringify(obj.next())}`)
}