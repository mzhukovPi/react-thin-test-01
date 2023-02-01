import logo from './logo.svg'
import './App.css'

function App() {
  const aa = 'AAA'
  const bb = process.env.BACKEND_URL
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
        <p>(Ed)it <code>src/App.js</code> and save to reload.</p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>Learn React</a>
        <p>BACKEND_URL: {process.env.BACKEND_URL}</p>
        <p>BACKEND_URL: {process.env}</p>
        <p>BACKEND_URL(aa): {aa}</p>
        <p>BACKEND_URL(bb): {bb}</p>
      </header>
    </div>
  )
}

export default App
