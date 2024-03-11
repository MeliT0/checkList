import { Link } from "react-router-dom"
import { useState } from "react";

export const TodoList = () => {

    const [taskList, addNewTask] = useState(['prueba elemetno 1', 'prueba elemento 2']);
    const [input, setInput] = useState('');

    const updateTaskValue = (e) => {
        const taskValue = e.target.value;
        setInput(taskValue);
    }

    const createNewTask = (e) => {
        e.preventDefault();
        addNewTask([...taskList, input]);
        console.log("creando nueva tarea..." + input);
        setInput('');
        console.log("lista de tareas: " + taskList);
    }

    return (
        <>
            <h1>Tareas Pendientes</h1>
            <div className="card">
                <div className="card-body">
                    <ul>
                        {taskList.map(task =>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                <label className="form-check-label" for="flexCheckIndeterminate">
                                    {task}
                                </label>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
            <br />
            <br />
            <h1>Agregar Tarea</h1>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <label className="form-label">Descripcion de la tarea</label>
                        <input name="task" type="text" className="form-control" placeholder="Ingrese nueva tarea" onChange={e => updateTaskValue(e)}></input>
                    </div>
                    <div className="row">
                        <Link to='/checklist' className="btn btn-secondary" onClick={createNewTask}> Crear Nueva Tarea</Link>
                    </div>
                </div>
            </div>
        </>
    )
}


