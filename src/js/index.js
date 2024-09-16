const addTarea = document.getElementById('addTarea');

addTarea.addEventListener('submit', (event)=>{
    event.preventDefault();

    const ingresarTarea = document.getElementById('newTarea');
    const informacionTarea = ingresarTarea.value;

    agregarTarea(informacionTarea);
    ingresarTarea.value = ''; 

});


let tareas = [];

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

    tareas.forEach(tarea => {
        const itemTarea = document.createElement('li');
        itemTarea.textContent = `${tarea.informacionTarea} - ${tarea.estado? 'Realizada' : 'Pendiente'}`;
        listaTareas.appendChild(itemTarea);
    });
}
