import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react"
import fetchGet from "../functions/fetchGet"
import { usePalette } from "react-palette"
import AlbumJumbotron from "./AlbulmJumbotron"

const AlbumPage = (props) => {
  const [album, setAlbum] = useState({
    data: null,
    loading: true,
    error: false,
  })

  useEffect(() => {
    const albumUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/"

    const albumID = props.match.params.albumID
    fetchGet(albumUrl + albumID, setAlbum)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [album.loading])

  /* get dominant color */
  const { data } = usePalette(album.data && album.data.cover_big)

  return (
    <>
      <AlbumJumbotron dominantColor={data.vibrant} />
      <Container
        fluid
        id="album-container"
        style={{
          background: `linear-gradient(
              180deg,
              ${data.vibrant},
              rgba(18, 18, 18, 1) 20%
            )`,
        }}
      ></Container>
    </>
  )
}

export default AlbumPage
