let caixaTexto = document.querySelector('#campo');
let form = document.querySelector('#formulario');
let divTarefas = document.querySelector(".divTarefas")
const primeiraDiv = document.querySelector('#div1');
const riscada = document.querySelector("#excluirRiscada")


form.addEventListener('submit', function(evento){
    evento.preventDefault()

    if (caixaTexto.value.length == 0 || caixaTexto.value.replace (/\s/g , '').length == 0) {
        alert("Por favor, Digite uma tarefa!");
        return(false);
    }
    
    let divmae = document.createElement("div");
    let tarefas = document.createElement("p");
    let excluir = document.createElement("span");
    let editar = document.createElement("span")

    divmae.className = "divTarefas";
    tarefas.innerHTML=caixaTexto.value;
    excluir.innerHTML="x";
    tarefas.innerHTML=caixaTexto.value;
    editar.innerHTML = "Edit"
    document.getElementById("campo").value = "";
    divmae.setAttribute('draggable', true);
    tarefas.setAttribute('draggable', true);
    primeiraDiv.setAttribute('draggable', true); 

    
    
    divmae.appendChild(tarefas);
    divmae.appendChild(excluir);
    primeiraDiv.appendChild(divmae);
    divmae.appendChild(editar)


    tarefas.addEventListener("dblclick", function(){
        tarefas.style.textDecoration = "line-through";
        tarefas.style.color = "grey";
    })


    tarefas.addEventListener("click", function(){
        tarefas.style.textDecoration = "none";
        tarefas.style.color = "black";
    })

    tarefas.addEventListener("dblclick", function(){
        // divmae.childNodes.remove(tarefas)
        
    })

    excluirRiscada.addEventListener("click", function(){
        // divmae.removeChild(tarefas)
        // console.log(divmae)
        document.querySelectorAll('.divTarefas').forEach((item) => {
            if (item.childNodes[0].style.textDecoration === "line-through") {
                item.parentNode.removeChild(item)
            }
        
        })

    })

    excluir.addEventListener("click", function(){
        divmae.parentNode.removeChild(divmae);   
    })

    // document.querySelectorAll('.divTarefas').forEach((item) => {
    //     if (item.childNodes[0].style.textDecoration === "line-through") {
    //         console.log(item)
    //     }
    
    // })

    document.querySelectorAll('.divTarefas').forEach((item) => {
        if (item.childNodes[0].style.textDecoration === "line-through") {
            divmae.removeChild(".divTarefas")
        }
    
    })

    editar.addEventListener("click", function(){
        tarefas.setAttribute("contentEditable", true);
    })

    let excluirTodas = document.getElementById('excluirTodas');
    let selecionarTodas = document.getElementById('selecionarTodas');

    excluirTodas.addEventListener("click", function(){
        evento.preventDefault()
        divmae.remove();
    })



    selecionarTodas.addEventListener("dblclick", function(){
        tarefas.style.textDecoration = "line-through";
        tarefas.style.color = "grey";
    }) 

    selecionarTodas.addEventListener("click", function(){
        tarefas.style.textDecoration = "none";
        tarefas.style.color = "black";
    }) 

    //divmae
    // divmae.addEventListener("dragstart", function (ev) { 
    //     dragging = ev.target.closest(primeiraDiv)//tarefas
    // })
    
    // divmae.addEventListener("dragover", function (ev) {
    //     ev.preventDefault();
    //     const node = ev.target.closest(primeiraDiv) 
    //     this.parentNode.insertBefore('dragging', node)
    // })

    // divmae.addEventListener("dragend", function (ev) { 
    //     ev.preventDefault();
    //     const node2 = ev.target.closest(primeiraDiv) 
    //     this.parentNode.insertBefore('dragging', node2)
    //     dragging = null     
    // })
    primeiraDiv.addEventListener("dragstart", function (ev) { 
        dragging = ev.target.closest(".divTarefas")//tarefas

    })
    
    primeiraDiv.addEventListener("dragover", function (ev) {
        ev.preventDefault();
		const node = ev.target.closest(".divTarefas") 
        this.insertBefore(dragging, node)

    })

    primeiraDiv.addEventListener("dragend", function (ev) { 
        dragging = null     

    })
});