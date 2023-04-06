window.addEventListener("load",()=>{
    let p=document.createElement("p");
    p.className="strory-container";
    p.innerHTML=localStorage.getItem("story");
    let body=document.querySelector(".body");
    body.appendChild(p);
})