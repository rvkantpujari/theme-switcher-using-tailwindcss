import { useState } from 'react'
import SwitchBtn from './components/SwitchBtn/SwitchBtn'

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : 'light'}>
      <div className='h-[100vh] flex flex-col justify-center items-center font-bold bg-blue-300 text-gray-900 dark:bg-gray-800 dark:text-white'>
        <h2 className='text-2xl my-2'>Theme: {darkTheme ? 'Dark' : 'Light'}</h2>
        <SwitchBtn defaultChecked={false} onChange={() => setDarkTheme(!darkTheme)} />
      </div>
    </div>
  )
}

export default App
