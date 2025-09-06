import './App.css'
import Button from './components/navigation/Button'
import Logo from './components/navigation/Logo'
import Navlist from './components/navigation/Navlist'


function App() {

  return (
    <>
    {/* navigation bar plus logo section  */}
      <div className="navbar">
        <div> <Logo /></div>
        <div >
          <div className='navList'> 
            <div><Navlist/></div>
            <div><Button /></div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
