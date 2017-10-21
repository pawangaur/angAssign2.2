class Myclass{
private str:string;
private value:number;
constructor(strval:string,val: number){
this.str=strval;
this.value=val;
}
message():string{
return this.str+'`'+this.value;
}
}
let obj=new Myclass('random',12);
console.log(obj.message());