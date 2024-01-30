const inputitem = document.querySelector('.txt')
const listcontainer = document.querySelector('.ul-list')

function addTask(){
    let li = document.createElement('li')
    li.innerHTML = inputitem.value
    listcontainer.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
    inputitem.value = ""
    savedata()
}

listcontainer.addEventListener("click", function(e){
   if(e.target.tagName==="SPAN"){
    console.log("delete");
    e.target.parentElement.remove();
    savedata()
   }else if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        savedata()
   }
},false)

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showTask()