import { useEffect, useState } from "react";
import mockGalleryData from "../data/galleryMovies.json";
import { Container } from "react-bootstrap";
import { GalleryList } from "../components/GalleryList/GalleryList";

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
      <GalleryList
        items={items}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
    </Container>
  );
};

export default GalleryMedia;
