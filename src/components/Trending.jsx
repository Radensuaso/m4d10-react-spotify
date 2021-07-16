import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState, useEffect } from "react"
import fetchGet from "../functions/fetchGet"
import SingleSong from "./SingleSong"

const Trending = () => {
  const [muse, setMuse] = useState([])
  const [queen, setQueen] = useState([])
  const [breakingBenjamin, setBreakingBenjamin] = useState([])

  const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

  const fetchSongs = async () => {
    const museContent = await fetchGet(url + "muse")

    return museContent
  }

  useEffect(() => {
    setMuse(fetchSongs())
  }, [])

  return (
    <Row className="trending-artist-row">
      <h2>Muse</h2>
      {muse.map((song) => (
        <Col>
          <SingleSong />
        </Col>
      ))}
    </Row>
  )
}

export default Trending
