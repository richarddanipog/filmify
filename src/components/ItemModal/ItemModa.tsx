import { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ItemModalProps {
  show: boolean;
  onHide: any;
  item: any;
}

const ItemModal: FunctionComponent<ItemModalProps> = ({
  show,
  onHide,
  item,
}) => {
  return (
    <Modal
      show={show === item.id}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ backgroundColor: "#282c34", color: "white" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          {item.title} ({item.original_language.toUpperCase()})
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#282c34", color: "white" }}>
        <Row>
          <Col sm={12} md={8}>
            <h4>Overview</h4>
            <p>{item.overview}</p>
            <div>Release Date: {item.release_date}</div>
          </Col>
          <Col sm={12} md={4} className="d-flex align-items-center">
            <img
              className="rounded"
              src={`http://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#282c34", color: "white" }}>
        <Button variant="warning" style={{ color: "white" }} onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;
