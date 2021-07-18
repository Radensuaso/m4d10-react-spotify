import Container from "react-bootstrap/Container"

const AlbumJumbotron = (props) => {
  return (
    <Container
      fluid
      id="album-header-container"
      style={{
        paddingLeft: "14rem",
        color: "white",
        backgroundRepeat: "no-repeat",
        background: props.dominantColor,

        height: "40vh",
      }}
    >
      <div className="d-flex pl-4 pb-4"></div>
    </Container>
  )
}

export default AlbumJumbotron
