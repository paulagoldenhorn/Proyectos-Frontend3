import { createContext, useState } from 'react'
import { generateId } from '../../C10-repaso/idGenerator'

export const TasksListContext = createContext({})

export const TasksListProvider = (props) => {
  const [tasksList, setTaskList] = useState([])

  function addTask(newTaskName, newTaskType) {
    const newTask = {
      id: generateId(),
      taskName: newTaskName,
      taskType: newTaskType,
    }
    setTaskList([...tasksList, newTask])
  }

  function deleteTask(id) {
    setTaskList(tasksList.filter((elm) => elm.id !== id))
  }

  const value = {
    tasksList,
    addTask,
    deleteTask,
  }

  return (
    <TasksListContext.Provider value={value}>
      {props.children}
    </TasksListContext.Provider>
  )
}
