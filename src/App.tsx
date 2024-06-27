
import reactLogo from './assets/react.svg'
import './components/darkmode.tsx'
import './App.css'
import DarkMode from './components/darkmode.tsx'


function App() {
 

  return (
    
      <div>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <DarkMode />
      </div>
      
    
  )
}

export default App
