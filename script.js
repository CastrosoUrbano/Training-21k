// Código para marcar tareas como completadas

document.addEventListener('DOMContentLoaded', () => {
    // Obtiene todas las tareas
    const tareas = document.querySelectorAll('.tarea');

    // Recorre todas las tareas
    tareas.forEach(tarea => {
        // Obtiene el botón de completar
        const btnCompletar = tarea.querySelector('button');

        // Agrega un evento para marcar la tarea como completada
        btnCompletar.addEventListener('click', () => {
            tarea.classList.toggle('completada');
            actualizarEstadoTareas();
        });
    });

    // Función para actualizar el estado de las tareas (para ejemplo local)
    function actualizarEstadoTareas() {
        const tareasCompletadas = document.querySelectorAll('.tarea.completada');
        console.log(`Tareas completadas: ${tareasCompletadas.length}`);
    }
});
