import { useState } from 'react';
import {Modal,Button} from 'react-bootstrap';

const apiImage = "https://image.tmdb.org/t/p/w500/";
const MovieCard = ({poster_path,title,release_date,overview}) => {
  const[show, setShow] = useState(false);
  const handleShow =()=>setShow(true);
  const handleClose=()=>setShow(false);
  return (
    <div className="card text-center border-0 mb-3" data-testid="movie-card">
      <img src={apiImage+poster_path} data-testid="movie-poster" className="mb-1" onClick={handleShow}  />
      <h6 data-testid="movie-title">{title}</h6>
      <p data-testid="movie-release-date">{release_date}</p>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
          <Modal.Title></Modal.Title>
          <Modal.Body>
              {<img className="card-img-top" src={apiImage+poster_path} style={{width:"15rem"}} data-testid="movie-poster"  /> }
      <h6 data-testid="movie-title">{title}</h6>
      <p data-testid="movie-release-date">Release Date: {release_date}</p>
      <h6>Overview</h6>
      <p data-testid="movie-overview">{overview}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>close</Button>
          </Modal.Footer>
      </Modal>
      </div>
  )
}
export default MovieCard