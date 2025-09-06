let ansContainer=document.querySelector('.ans')
let numbers=document.querySelectorAll('.numbers');
let operators=document.querySelectorAll('.operator');
let equal=document.getElementById('equal');
let clear=document.getElementById('clear');

let num1='';
let num2='';
let op=null;
let isfirstclick=true;//to make sure second no gets stored in num2
let justevaluated=false;//to make sure no gets stored in num1 after finding the result of prev expression
let ans=null;

/*Storing values in num1 and num2*/
numbers.forEach((number)=>{
    number.addEventListener('click',()=>{
        if(justevaluated){
            num1='';
            num2='';
            ansContainer.innerText='';
            isfirstclick=true;
            ans=null;
            op=null;
            justevaluated=false;
        }
        if(isfirstclick){
            num1+=number.innerText
            ansContainer.innerText = num1;
        }
        else{
            num2+=number.innerText
            ansContainer.innerText = num2;
        }
    })
})

/*Storing value in operator*/
operators.forEach((operator)=>{
    operator.addEventListener('click',()=>{
        if(num1!==''){
            op=operator.innerText;
            isfirstclick=false;
            ansContainer.innerText=''
        }
    })
})


//finding output if num1, num2,op is not empty
equal.addEventListener('click',()=>{
    if(op==null || num1=='' || num2=='') ansContainer.innerText='Error';
    else if(op=='+') ans=parseFloat(num1)+parseFloat(num2);
    else if(op=='-') ans=parseFloat(num1)-parseFloat(num2);
    else if(op=='*') ans=parseFloat(num1)*parseFloat(num2);
    else if(op=='%') ans=parseFloat(num1)%parseFloat(num2);
    else ans=parseFloat(num1)/parseFloat(num2);
    ansContainer.innerText=ans;
    justevaluated=true;
})

//clearing num1,num2,op when C is cliicked
clear.addEventListener('click',()=>{
    ansContainer.innerText='';
    num1='';
    num2='';
    op=null;
    ans=null;
    isfirstclick=true;
})