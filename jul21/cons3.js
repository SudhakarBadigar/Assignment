class account{
    constructor(id,name,email,sal){
        this.acoount_id=id;
        this.account_name=name;
        this.account_email=email;
        this.account_sal=sal;
    }
    get account_email(){
        return this.account_name+":"+this.account_email;
    }
}
let a1 = new account(101,'rama','ram@ay.com',60000);
console.log(a1);
let r1 = a1.get account_email();
console.log(r1);