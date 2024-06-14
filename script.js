var addBtn=document.getElementById("add");
var rmvBtn=document.getElementById("rmv");
var identity=document.getElementById("identity");

addBtn.addEventListener("click",()=>
{
    addBtn.style.backgroundColor="rgb(227, 214, 217)";
    identity.innerHTML="Friend";
    identity.style.color="Green"
    rmvBtn.style.backgroundColor="rgb(148, 205, 91)";
})

rmvBtn.addEventListener("click",()=>
    {
        rmvBtn.style.backgroundColor="rgb(227, 214, 217)";
        identity.innerHTML="Stranger";
        identity.style.color="deeppink";
        addBtn.style.backgroundColor="rgb(148, 205, 91)";
    })