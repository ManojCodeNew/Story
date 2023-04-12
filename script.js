var out=document.querySelector('.out')
var story=document.querySelector('.s')
var mj="https://shortstories-api.onrender.com/"

story.addEventListener("click",function op(){
    fetch(mj)
    .then(function fun(e){
     return e.json();
    })
    .then(function f(p){
    //    out.value= p.story
       localStorage.setItem("story",p.story);
       location.replace("story.html")
    })
    
})

//Arrow function

// function Asum(a,b){
//     return a+b;
// }

// let sum=(a,b)=>a+b;
// let a=sum(10,20);
// console.log(a);