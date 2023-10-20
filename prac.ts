let car:string = 'car';
car = 'cccc';
let a:number[] = [1,2,3];

const b = 3;

function fff(){
    console.log('das');
}


enum Os{
    Window = '윈도우',
    Linux = '리눅스',
    Ios = '애플'
}

let myOs:Os;
myOs = Os.Window;


// 인터페이스

type score = 'A' | 'B' | 'C' | 'D';

interface User{
    name:string;
    age:number;
    gender?:string;
    readonly birthyear : number;
    [grade:number] : score;
}


let user : User = {
    name : 'xx',
    age : 30,
    birthyear : 2000,
    1 : 'A'
}

user.age = 10;
user.name = 'yy';
user.gender = 'male';
// birthtear = 1990; -> x

interface Car {
    color : string,
    wheels : number,
    start() : void
}

interface Benz extends Car{
    door:number,
    stop():void
}

interface Toy extends Car, Benz{

}


class Bmw implements Car{
    color = 'red';
    wheels = 4;
    start = () => {console.log('sadsad')}
}

const bmw = new Bmw();
bmw.start;


function bb(a:number,b:number){
    return console.log(a+b);
}
const aa = (a:number, b:number) => {console.log(a+b)}
bb(2,3);
aa(4,5);

// 함수

function hello(name:string): string{
    return `input : ${name}`;
}

const sss = hello('aaa')
console.log(sss);

const testFunc = (a:string):string => {
    return `dsad`;
}

console.log(testFunc('ads'));

function add(...nums: number[]){
    nums.forEach((num) => {
        console.log(num);
    })
}

add(1,2,3,4);

// 리터럴
type Job = "police" | "developer" | "teacher";

interface User{
    name : string,
    job : Job;
}

const u : User = {
    name : "yoon",
    job : "developer"
}

// 제네릭

function getSize<T>(arr : T[]) : number{
    return arr.length;
}

const arr1 = [1,2,3];
getSize(arr1);

const arr2 = ['a','b','c'];
getSize(arr2);

interface Mobile<T> {
    name : string,
    price : number,
    choice : string
}

const mobile : Mobile<string> = {
    name : "item",
    price : 10000,
    choice : "no option"
}

