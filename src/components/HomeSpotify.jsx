import Container from "react-bootstrap/Container"
import NavHome from "./NavHome"
import { Route, Switch } from "react-router-dom"
import Trending from "./Trending"

const HomeSpotify = () => (
  <Container fluid id="home-spotify">
    <NavHome />
    <Switch>
      <Route path="/" exact component={Trending} />
      <Route path="/home" exact component={Trending} />
    </Switch>
  </Container>
)

export default HomeSpotify
