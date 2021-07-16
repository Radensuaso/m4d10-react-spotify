import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavSpotify from "./components/NavSpotify"
import Player from "./components/Player"
import HomeSpotify from "./components/HomeSpotify"

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavSpotify />
        <Route path="/home" component={HomeSpotify} />
        <Player />
      </div>
    </Router>
  )
}

export default App
