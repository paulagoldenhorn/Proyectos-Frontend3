import { useContext } from 'react'
import { TasksListContext } from '../context/TasksListProvider'
import styles from '../../C18-router-playground/Comps.module.css'

function TasksDashboard() {
  const tasksListContext = useContext(TasksListContext)

  function handleDelete(e) {
    tasksListContext.deleteTask(e.target.id)
  }

  return (
    <>
      {tasksListContext.tasksList &&
        tasksListContext.tasksList.map((task) => (
          <div key={task.id} className={styles.card}>
            <h4>Tarea: {task.taskName}</h4>
            <p>Categoria: {task.taskType}</p>
            <button id={task.id} onClick={handleDelete}>
              Eliminar
            </button>
          </div>
        ))}
    </>
  )
}
export default TasksDashboard
