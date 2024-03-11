import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import {db} from '../firebase/config.js';
import { collection, onSnapshot, serverTimestamp, addDoc } from 'firebase/firestore';

export const TodoList = () => {

    const [taskList, addNewTask] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        onSnapshot(collection(db, 'taskList'), (snapshot) => {
            addNewTask(snapshot.docs.map(doc => doc.data()))
        })
    }, [input]);

    const updateTaskValue = (e) => {
        const taskValue = e.target.value;
        setInput(taskValue);
    }

    const createNewTask = (e) => {
        e.preventDefault();
        addDoc(collection(db, "taskList"), {
            value: input,
            timestamp: serverTimestamp(),
          });
        console.log("creando nueva tarea..." + input);
        setInput('');
        console.log("lista de tareas: " + taskList);
    }

    return (
        <>
            <h1>Tareas Pendientes</h1>
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        {taskList.map(task =>
                        <li className="list-group-item">
                            <div className="form-check">
                                <input className="form-check-input me-1" type="checkbox" value=""  />
                                <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                {task.value}
                                </label>
                            </div>
                            </li>
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


