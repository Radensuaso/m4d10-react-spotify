import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavSpotify from "./components/NavSpotify"
import Player from "./components/Player"
import HomeSpotify from "./components/HomeSpotify"

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavSpotify />
        <Switch>
          <Route path="/" component={HomeSpotify} />
          <Route path="/home" component={HomeSpotify} />
        </Switch>
        <Player />
      </div>
    </Router>
  )
}

export default App
