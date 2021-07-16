import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import NavSpotify from "./components/NavSpotify"
import Player from "./components/Player"

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavSpotify />
        <Player />
      </div>
    </Router>
  )
}

export default App
