class emp2{
    first_name;

    set_name(){
        console.log("set_name inside class");
    }
    get_name(){
        console.log("get_name");
    }
}
let e1 = new emp2();
let e2 = new emp2();
console.log(e1);
//console.log(e2);
console.log(e1.set_name);
console.log(e1.get_name);
e1.set_name();
e1.get_name();