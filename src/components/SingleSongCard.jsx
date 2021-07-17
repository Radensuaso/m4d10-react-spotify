import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

const SingleSongCard = ({ song }) => (
  <Card className="single-song-card p-3">
    <Card.Img className="img-fluid" variant="top" src={song.album.cover_big} />
    <Card.Body>
      <Card.Title>{song.title}</Card.Title>
      <Card.Text>
        <Link className="text-muted" to={"/artist/" + song.artist.id}>
          {song.artist.name}
        </Link>
      </Card.Text>
    </Card.Body>
  </Card>
)

export default SingleSongCard
