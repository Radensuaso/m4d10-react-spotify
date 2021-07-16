import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState, useEffect } from "react"
import fetchGet from "../functions/fetchGet"
import SingleSong from "./SingleSong"

const Trending = () => {
  const [muse, setMuse] = useState({ songs: [], update: true })
  const [queen, setQueen] = useState({ songs: [], update: true })
  const [breakingBenjamin, setBreakingBenjamin] = useState({
    songs: [],
    update: true,
  })

  const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

  useEffect(() => {
    fetchGet(url + "muse", setMuse)
    console.log(muse)

    fetchGet(url + "queen", setQueen)
    console.log(queen)

    fetchGet(url + "breaking benjamin", setBreakingBenjamin)
    console.log(breakingBenjamin)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [muse.update, queen.update, breakingBenjamin.update])

  return (
    <Row className="trending-artist-row">
      <h2>Muse</h2>
      {muse.songs.slice(0, 6).map((song) => (
        <Col xm={12} md={6} lg={2}>
          <SingleSong />
        </Col>
      ))}
    </Row>
  )
}

export default Trending
