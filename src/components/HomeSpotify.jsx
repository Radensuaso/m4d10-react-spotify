import Container from "react-bootstrap/Container"
import NavHome from "./NavHome"
import { Route } from "react-router-dom"
import Trending from "./Trending"

const HomeSpotify = () => (
  <Container fluid id="home-spotify">
    <NavHome />
    <Route path="/home" exact component={Trending} />
  </Container>
)

export default HomeSpotify
