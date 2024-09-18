const addTarea = document.getElementById('addTarea');

addTarea.addEventListener('submit', (event)=>{
    event.preventDefault();

    const ingresarTarea = document.getElementById('newTarea');
    const informacionTarea = ingresarTarea.value;

    
    if (editarIndex != null) {
        tareas[editarIndex].informacionTarea = informacionTarea;
        editarIndex = null;
        addTarea.querySelector('button').textContent = 'Agregar'
    }else{
        agregarTarea(informacionTarea);
    }
    ingresarTarea.value = ''; 
    mostrarTareas();

});


let tareas = [];
let editarIndex = null;

function agregarTarea(informacionTarea){
    tareas.push({
        informacionTarea: informacionTarea,
        estado:false
    });
    mostrarTareas();
}


// Función para mostrar la lista de tareas en el HTML
function mostrarTareas() {
    const listaTareas= document.getElementById('listaTareas');
    listaTareas.innerHTML = '';

    tareas.forEach((tarea, index) => {
        const itemTarea = document.createElement('li');
        itemTarea.textContent = `${tarea.informacionTarea} - ${tarea.estado? 'Realizada' : 'Pendiente'}`;
        listaTareas.appendChild(itemTarea);

        //boton para editasr la tarea
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.classList.add('btn'); 
        btnEditar.onclick = () => editarTarea(index)
        itemTarea.appendChild(btnEditar)

        //eliminar tarea
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btnDelete');
        btnEliminar.onclick = () => eliminarTarea(index)
        itemTarea.appendChild(btnEliminar)

        //Cambiar de estado la tarea
        const btnEstado = document.createElement('button');
        btnEstado.textContent = 'Cambiar Estado';
        btnEstado.classList.add('btnEstado');
        btnEstado.onclick = () => cambiarEstado(index)
        itemTarea.appendChild(btnEstado)

    });
}

function editarTarea(index) {
    const editarTarea = document.getElementById('newTarea');
    editarTarea.value = tareas[index].informacionTarea;

    editarIndex = index;
    addTarea.querySelector('button').textContent = 'Guardar tarea';
    
}

function eliminarTarea(index) {
    tareas.splice(index,1);
    mostrarTareas(); 
}

function cambiarEstado(index) {
    tareas[index].estado = !tareas[index].estado
    mostrarTareas();
}