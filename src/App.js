import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Jan 2nd at 5:00pm',
      reminder: true,
    },

    {
      id: 2,
      text: 'Gym',
      day: 'August 8th at 10am',
      reminder: true,

    },

    {
      id: 3,
      text: 'Meet Sarah',
      day: 'Aug 18th at 4pm',
      reminder: false,

    },

  ])


  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App;
