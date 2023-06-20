import './App.css'
import Person from './Persons'


function App() {

  return (
    <div className='div-container'>
      <Person username={'Efosa'} age={34} />
      <Person username={'Desmond'} age={90} />
      <Person username={'Daniel'} age={17}/>

    </div>
  )
}

export default App
