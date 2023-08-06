import { Row, Col, Card } from "react-bootstrap";
import { ThreeDots } from "react-bootstrap-icons";
import ItemModal from "../ItemModal/ItemModa";

type GalleryListProps = {
  items: any[];
  setModalShow: Function;
  modalShow: boolean;
};

export const GalleryList = ({
  items,
  modalShow,
  setModalShow,
}: GalleryListProps): JSX.Element => {
  return (
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
              <span
                onClick={() => setModalShow(item.id)}
                className="item-icon"
                style={{
                  backgroundColor: "rgba(0,0,0,0.72)",
                  padding: ".35em",
                  cursor: "pointer",
                  borderRadius: "50%",
                }}
              >
                <ThreeDots />
              </span>

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
  );
};
