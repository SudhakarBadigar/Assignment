class bank{
    f_name;
    set_name(name){
        this.f_name=name;

    }
    get_name(){
        return this.f_name;

    }
}
let e1 = new bank();
e1.set_name("Rama");
console.log(e1);
console.log(e1.get_name());

let e2 = new bank();
e2.set_name("Krishna");
console.log(e2);
console.log(e2.get_name());

