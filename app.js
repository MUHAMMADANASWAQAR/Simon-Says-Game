let userseq=[];
let gameseq=[];
let started =false ; 
let level =0 ; 
console.log(level);
let btns=['yellow','red','purple','green'];
document.addEventListener("keypress",function(){
if (started ==false){
 started=true;
 gamelevel();   
}
}
);
function gameflash(btn){
    btn.classList.add("flashwhite")
    setTimeout(function(){
        btn.classList.remove("flashwhite");
    },250);}
 function userflash(btn){
        btn.classList.add("flashgreen")
        setTimeout(function(){
            btn.classList.remove("flashgreen");
        },250);

}
let h2= document.querySelector("h2"); 

function gamelevel(){
    userseq=[];
    level++; 
    console.log(level);
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randomcolor=btns[randidx];
    console.log(randomcolor);
    let randbtn=document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

let allbtns=document.querySelectorAll(".btn");
function checkAns(indx){
  
    if (userseq[indx]==gameseq[indx]){
        if (userseq.length==gameseq.length){
            setTimeout(gamelevel,1000);
        }}
    else{
    h2.innerHTML=`Game Over ! Your score was <b>${level}</b><br> Press any key to start`;
   document.querySelector('body').style.backgroundColor="red";

    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
    }

}
function btnPress (){
    let btn =this ; 
    userflash(this);
    let usercolor=this.getAttribute("id");
    userseq.push(usercolor);
    console.log(usercolor);
    checkAns(userseq.length-1);
}
    for (btn of allbtns){
        btn.addEventListener("click",btnPress);
    }
  function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
  }