class prod{
    p_id=101;
    p_name='iphone';
    p_price=50000;
    get_prod(){
        return "hello";
    }
}
let p1 = new prod();
console.log(p1.p_id);
console.log(p1.p_name);
console.log(p1.p_price);
console.log(p1);
console.log(p1.get_prod());