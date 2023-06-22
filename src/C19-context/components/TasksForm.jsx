import { useState } from 'react'
import { useContext } from 'react'
import { TasksListContext } from '../context/TasksListProvider'

function TasksForm() {
  const tasksListContext = useContext(TasksListContext)

  const [newTaskName, setNewTaskName] = useState('')
  const [newTaskType, setNewTaskType] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    tasksListContext.addTask(newTaskName, newTaskType)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: '15px',
        padding: '10px',
        backgroundColor: 'green',
        color: 'white',
        width: '300px',
        fontSize: '20px',
      }}
    >
      <label>Tarea:</label>
      <input
        type='text'
        value={newTaskName}
        style={{ fontSize: '20px' }}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <label>Tipo:</label>
      <select
        name='taskType'
        value={newTaskType}
        style={{ fontSize: '20px' }}
        onChange={(e) => setNewTaskType(e.target.value)}
      >
        <option value=''>Select</option>
        <option value='Trabajo'>Trabajo</option>
        <option value='Ocio'>Ocio</option>
      </select>
      <br />
      <button type='submit' style={{ fontSize: '15px' }}>
        Agregar tara
      </button>
    </form>
  )
}
export default TasksForm
