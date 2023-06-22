import { useContext, useState } from 'react'
import { TasksListContext } from '../context/TasksListProvider'

function Task() {
  const tasksListContext = useContext(TasksListContext)
  const [newTaskName, setNewTaskName] = useState('')
  const [newTaskType, setNewTaskType] = useState('')

  function handleAddTask() {
    tasksListContext.addTask(newTaskName, newTaskType)
  }

  return (
    <>
      <input
        type='text'
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <select name='taskType' value={newTaskType} onChange={(e) => setNewTaskType(e.target.value)}>
        <option value="">Select</option>
        <option value="Trabajo">Trabajo</option>
        <option value="Ocio">Ocio</option>
      </select>
      <button onClick={handleAddTask}>Agregar tara</button>

      {tasksListContext.tasksList &&
        tasksListContext.tasksList.map(task => (
          <div key={task.id}>
            <h4>Tarea: {task.taskName}</h4>
            <p>Categoria: {task.taskType}</p>
          </div>
        ))}
    </>
  )
}
export default Task
