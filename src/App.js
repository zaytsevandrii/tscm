import { useState } from "react"
import "./App.css"
import { Header } from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctor Appointment",
        day: "July 21nd at 12-30",
        reminder: true,
    },
    {
        id: 2,
        text: "Shopping",
        day: "July 21nd at 14-30",
        reminder: true,
    },
    {
        id: 3,
        text: "Byuing fridge",
        day: "July 21nd at 15-30",
        reminder: false,
    },
])

//Delete Tasks
const onDelete=(id)=>{
  setTasks(tasks.filter(t=>t.id !== id))
}

//Toggle reminder
const onToggle=(id)=>{
    setTasks(tasks.map(task=>task.id === id?{...task,reminder:!task.reminder}:task))
}
    return (
        <div className="container">
            <Header />
            <AddTask/>
            {tasks.length>0?<Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle}/>:'No tasks to show!'}
        </div>
    )
}

export default App
