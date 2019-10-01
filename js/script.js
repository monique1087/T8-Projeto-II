let caixaTexto = document.querySelector('#campo');
let form = document.querySelector('#formulario');
const primeiraDiv = document.querySelector('#div1');


form.addEventListener('submit', function(evento){
    evento.preventDefault()

    if (caixaTexto.value.length == 0 || caixaTexto.value.replace (/\s/g , '').length == 0) {
        alert("Por favor, Digite uma tarefa!");
        return(false);
    }
    
    let divmae = document.createElement("div");
    let tarefas = document.createElement("p");
    let excluir = document.createElement("span");

    divmae.className = "divTarefas";
    tarefas.innerHTML=caixaTexto.value;
    excluir.innerHTML="x";
    document.getElementById("campo").value = "";
    divmae.setAttribute('draggable', true);
    tarefas.setAttribute('draggable', true);
    primeiraDiv.setAttribute('draggable', true); 

    
    
    divmae.appendChild(tarefas);
    divmae.appendChild(excluir);
    primeiraDiv.appendChild(divmae);

    tarefas.addEventListener("dblclick", function(){
        tarefas.style.textDecoration = "line-through";
        tarefas.style.color = "grey";
    })

    tarefas.addEventListener("click", function(){
        tarefas.style.textDecoration = "none";
        tarefas.style.color = "black";
    })

    excluir.addEventListener("click", function(){
        divmae.parentNode.removeChild(divmae);   
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
    primeiraDiv.addEventListener("dragstart", function (ev) { 
        dragging = ev.target.closest(divmae)//tarefas
    })
    
    primeiraDiv.addEventListener("dragover", function (ev) {
        ev.preventDefault();
        const node = ev.target.closest(divmae) 
        this.parentNode.insertBefore(dragging, node)
    })

    primeiraDiv.addEventListener("dragend", function (ev) { 
        dragging = null     
    })
 
});