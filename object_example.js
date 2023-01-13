const student={
    fname:"Teppo",
    lname:"Testi",
    sayName:function(){
        console.log(this.fname+ " "+this.lname);
    },
    setName:function(fn,ln){
        this.fname=fn;
        this.lname=ln;
    }
}

student.sayName();
student.setName("Liisa","Virtanen");
student.sayName();