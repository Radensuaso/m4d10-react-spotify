import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState, useEffect } from "react"
import fetchGet from "../functions/fetchGet"
import SingleSong from "./SingleSong"

const Trending = () => {
  const artists = ["muse", "queen", "danheim"]

  const [muse, setMuse] = useState({ songs: [], update: true })
  const [queen, setQueen] = useState({ songs: [], update: true })
  const [danheim, setDanheim] = useState({
    songs: [],
    update: true,
  })

  const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

  useEffect(() => {
    fetchGet(url, artists[0], setMuse)
    console.log(muse)

    fetchGet(url, artists[1], setQueen)
    console.log(queen)

    fetchGet(url, artists[2], setDanheim)
    console.log(danheim)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [muse.update, queen.update, danheim.update])

  return (
    <Row className="trending-artist-row">
      <h2>Muse</h2>
      {/* 
      {muse.songs.slice(0, 6).map((song) => (
        <Col xm={12} md={6} lg={2}>
          <SingleSong />
        </Col>
      ))} */}
    </Row>
  )
}

export default Trending
