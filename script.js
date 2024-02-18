/*------------------Reverse ---------------------*/
function Reverse (str) {
var strrv='';
var a = (str.length-1)
for (let i = a ; i> -1 ; i--){
    strrv=strrv+str[i]; 
}
return strrv;
}
/*------------------count ---------------------*/
function count(str) {
    var count=0
    for (const i of str) {
      console.log(i);
      count =count +1;
        
    }
        console.log(str.length)
        console.log(count);
    }
    console.log(count('abcdef'))
/*-----------------Capitalize Words----------------------*/
function Capitalize (str) {
var pos = 1;
var a=0;
str= str[0].toUpperCase()+str.slice(1);
while (pos < str.length && pos >0) {
    a=str.indexOf(' ', pos);
    pos=a+1;
    str= str.slice(0,a+1)+str[a+1].toUpperCase()+str.slice(a+2);

return str
}}
console.log(str);
/*----------------max min-----------------------*/
arry=[20,30,5,3,9,2,5]
max=arry[0]
min=arry[0]
for(let i=0;i<arry.length;i++){
    if(arry[i]>max){
        max=arry[i]
    }
    if(arry[i]<min){
        min=arry[i]
    }
}
console.log(min)
console.log(max)
/*----------------Sum -----------------------*/
arry=[20,30,5,3,9,2,5]
sum=0
for(let i=0;i<arry.length;i++){
    sum=sum+arry[i]
}
console.log(sum)
/*------------------Factorial---------------------*/
function fact(num) {
    fact=1
    if (num==0){
        return fact;
    }
    else{
        for(let i=2;i<num+1;i++){
        fact=fact*i;}
    }
    return fact;
    }
  
/*-------------------Prime --------------------*/
function primeryy(num) {

var div=0
if(num==1){console.log("its not primery")
    return 1
}
for(let i=1;i<num+1;i++){
    if(num%i==0){
        div += 1}
}
if(div>2){
    console.log("its not primery")
    return 1
}
else{
    console.log("its  primery")
    return 0
}
}

/*-------------------Fibonacci ------------------------*/
function Fibonacci(n) {
if (n < 0){
    return -1;
}
else if( n==0){ 
    return 0;
}
else if((n==1)||(n==2)){ 
     return 1;
}
else{
    return Fibonacci(n-1) + Fibonacci(n-2);
}}














/*Reverse (str) 
Capitalize (str)
console.log(fact(6))
primeryy(9)
console.log(Fibonacci(9))*/
