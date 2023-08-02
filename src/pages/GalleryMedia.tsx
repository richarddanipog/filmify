import { useEffect, useState } from "react";
import mockGalleryData from "../data/galleryMovies.json";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ItemModal from "../components/ItemModal/ItemModa";
import { ThreeDots } from "react-bootstrap-icons";

const GalleryMedia = (): JSX.Element => {
  const [items, setItems] = useState<any>([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setItems(mockGalleryData.results);
    }, 1000);
  }, []);

  return (
    <Container className="gallery">
      <Row lg={5} className="g-3">
        {items.map((item: any) => (
          <Col key={item.id}>
            <Card className="gallery-card bg-dark text-white">
              <Card.Img
                src={`http://image.tmdb.org/t/p/original${item.poster_path}`}
                alt="Card image"
              />
              <Card.ImgOverlay
                className="img-overlay"
                style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              >
                <ThreeDots onClick={() => setModalShow(item.id)} />

                <ItemModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  item={item}
                />
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GalleryMedia;
