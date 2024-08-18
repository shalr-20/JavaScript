let Data="secret info";

class User{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("data= ", Data);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        Data="new value";
    }
}

let s1=new User("Abc", "abc@gmail.com");
let s2=new User("Def", "def@gmail.com");
let s3=new User("Ghi", "ghi@gmail.com");

let ad1=new Admin("admin", "admin@gmail.com");