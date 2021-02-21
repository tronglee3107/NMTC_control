let a=document.querySelector('button');
let x = document.getElementById("notice");
x.style.display = "none";
a.addEventListener('click',()=>{
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    } 
})
