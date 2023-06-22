import { createContext, useState } from "react";
import {generateId} from '../../C10-repaso/idGenerator';


export const TasksListContext = createContext({})

export const TasksListProvider = (props) => {

    const [tasksList, setTaskList] = useState([])

    function addTask(newTaskName, newTaskType) {
        const newTask = {
            id: generateId(),
            taskName: newTaskName,
            taskType: newTaskType
        }
        setTaskList([...tasksList, newTask])
    }

    function deleteTask(task) {
        setTaskList(tasksList.filter(elm => elm.id != task.id))
    }

    const value = {
        tasksList,
        addTask,
        deleteTask
    }

    return (
        <TasksListContext.Provider value={value}>
            {props.children}
        </TasksListContext.Provider>
    )
}

/*
{
            id: 1,
            taskName: "Terminar tarea React",
            taskType: "Trabajo"
        },
        {
            id: 2,
            taskName: "Empezar tarea Pipelines",
            taskType: "Trabajo"
        },
        {
            id: 3,
            taskName: "Aprender el feliz cumpleanios en guitarra",
            taskType: "Ocio"
        }
*/