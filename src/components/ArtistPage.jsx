import Container from "react-bootstrap/Container"
import ArtistJumbotron from "./ArtistJumbotron"
import { useState, useEffect } from "react"
import fetchGet from "../functions/fetchGet"

const ArtistPage = (props) => {
  const [artist, setArtist] = useState({ data: {}, update: true })
  const url = "https://striveschool-api.herokuapp.com/api/deezer/artist/"

  const artistID = props.match.params.artistID

  useEffect(() => {
    fetchGet(url, artistID, setArtist)
    console.log(artist)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist.update])

  return (
    <>
      <ArtistJumbotron artist={artist.data} />
      <Container fluid id="artist-container"></Container>
    </>
  )
}

export default ArtistPage
