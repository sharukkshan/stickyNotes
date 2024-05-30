let text = document.querySelector("#text_area");
let color = document.querySelector("#color");
let btn = document.querySelector("#button");
let message = document.querySelector("#message");
let notes_Container = document.querySelector("#notes_container");

function addNotes(){
    
    if(text.value === ""){
        alert("please add some notes");
        return;
    }

    message.innerText = "";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross = document.createElement("button");
    
    div.appendChild(p);
    div.appendChild(cross);

    cross.innerText = "X";
    p.innerText = text.value;
    notes_Container.appendChild(div);
    div.style.backgroundColor = color.value;
    div.style.width = "150px";
    div.style.height = "150px";
    text.value = "";

    cross.addEventListener("click", function(){
        div.style.display = "none";
    })
    
}

btn.addEventListener("click", addNotes);
