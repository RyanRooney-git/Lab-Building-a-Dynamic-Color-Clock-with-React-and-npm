import './App.css'
import { format } from 'date-fns';

function App() {
  const time = new Date()

  return (
    <div style={{
    display: 'flex', // allows the rest of the settings within the box such as justifycontent to move freely and center
    justifyContent: 'center', // centers the clock within the vertical container
    alignItems: 'center', // centers the items within the current container horizontally
    height: '100vh'}}> // makes the height match the full screen
      <p className='clock'>{format(time, 'Pp')}</p>
    </div>
  )
}

export default App
