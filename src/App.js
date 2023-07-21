import { useState } from "react"
import "./App.css"
import { Header } from "./components/Header"
import Tasks from "./components/Tasks"

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
    return (
        <div className="container">
            <Header />
            <Tasks tasks={tasks}/>
        </div>
    )
}

export default App
