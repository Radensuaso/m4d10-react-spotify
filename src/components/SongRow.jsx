import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SingleSong from "./SingleSong"

const SongRow = (props) => (
  <Row className="trending-artist-row">
    <h2>{props.title}</h2>
    {/* 
    {muse.songs.slice(0, 6).map((song) => (
      <Col xm={12} md={6} lg={2}>
        <SingleSong />
      </Col>
    ))} */}
  </Row>
)

export default SongRow
