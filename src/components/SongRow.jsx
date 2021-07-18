import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SingleSongCard from "./SingleSongCard"
import Loading from "./Loading"
import AlertSpotify from "./AlertSpotify"

const SongRow = (props) => (
  <>
    <h2 className="row-title">
      {props.title} {props.info.loading && <Loading />}
    </h2>
    <Row className="trending-artist-row mb-4">
      {props.info.error ? (
        <AlertSpotify variant="danger" text="Woops, something went wrong." />
      ) : (
        props.info.data.slice(0, 6).map((song) => (
          <Col key={song.id} className="mb-3" xm={12} sm={6} md={4} lg={2}>
            <SingleSongCard setPlayerSong={props.setPlayerSong} song={song} />
          </Col>
        ))
      )}
    </Row>
  </>
)

export default SongRow
