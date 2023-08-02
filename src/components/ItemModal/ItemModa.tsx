import { FunctionComponent } from "react";
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {item.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Overview</h4>
        <p>{item.overview}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;
