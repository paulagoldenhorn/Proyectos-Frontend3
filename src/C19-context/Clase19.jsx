import { TasksListProvider } from './context/TasksListProvider'
import TasksForm from './components/TasksForm'
import TasksDashboard from './components/TasksDashboard'
import styles from '../C18-router-playground/Comps.module.css'

function Clase19() {
  return (
    <>
      <TasksListProvider>
        <h1>Mis tareas</h1>
        <TasksForm />
        <div className={styles.cardContainer}>
          <TasksDashboard />
        </div>
      </TasksListProvider>
    </>
  )
}
export default Clase19
