var out=document.querySelector('.out')
var story=document.querySelector('.story')
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

