import { useState } from 'react'

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()
  if (title.trim().length < 3) {
    alert("La tarea debe tener al menos 3 caracteres")
    return
  }

  fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  })
    .then(res => res.json())
    .then(newTask => {
      setTasks(prev => [...prev, newTask])
      setTitle('')
    })
    .catch(err => console.error('Error al agregar tarea:', err))
}


  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default TaskForm
