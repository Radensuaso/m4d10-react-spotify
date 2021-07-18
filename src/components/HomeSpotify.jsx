import { useState, useEffect } from "react"
import fetchGet from "../functions/fetchGet"
import Container from "react-bootstrap/Container"
import SongRow from "./SongRow"

const HomeSpotify = ({ setPlayerSong }) => {
  const queries = ["Rock Music", "Chill Out", "Classical"]

  const [query0, setQuery0] = useState({
    data: [],
    loading: true,
    error: false,
  })
  const [query1, setQuery1] = useState({
    data: [],
    loading: true,
    error: false,
  })
  const [query2, setQuery2] = useState({
    data: [],
    loading: true,
    error: false,
  })

  const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

  useEffect(() => {
    fetchGet(url + queries[0], setQuery0)
    console.log(query0)

    fetchGet(url + queries[1], setQuery1)
    console.log(query1)

    fetchGet(url + queries[2], setQuery2)
    console.log(query2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query0.loading, query1.loading, query2.loading])

  return (
    <Container fluid id="home-spotify">
      <SongRow
        title={queries[0]}
        songs={query0}
        setPlayerSong={setPlayerSong}
      />
      <SongRow
        title={queries[1]}
        songs={query1}
        setPlayerSong={setPlayerSong}
      />
      <SongRow
        title={queries[2]}
        songs={query2}
        setPlayerSong={setPlayerSong}
      />
    </Container>
  )
}

export default HomeSpotify
