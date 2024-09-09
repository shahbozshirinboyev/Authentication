import { useState } from "react"
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom"

function App() {

  const [token, setToken] = useState(window.localStorage.getItem('token'));

  return (
    <>
      <Router>
        <Switch>
          { token ? nimadur : nimadur }
        </Switch>
      </Router>
    </>
  )
}

export default App
