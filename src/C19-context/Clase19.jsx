import { useContext } from 'react';
import { TasksListContext, TasksListProvider } from './context/TasksListProvider';
import Task from './components/Task';



function Clase19() {
    const context = useContext(TasksListContext)
    {console.log(context)}
    return (
        <>
            <TasksListProvider>
                <Task />
            </TasksListProvider>
        </>
    )
}
export default Clase19;