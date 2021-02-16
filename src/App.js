import React from 'react'
import logo from './logo.svg'
import './App.css'
import {
  requestPermission,
  messaging
} from './firebaseInit'
function App() {
  const [token, setToken] = React.useState("")
  React.useEffect(() => {
    requestPermission()
      .then((token) => {
        setToken(token)
      })
      .catch((err) => err)
  }, [])

  messaging.onMessage((payload) => {
    const {notification: {title}} = payload
    alert(title);
  })
console.log(token)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
