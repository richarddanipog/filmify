import { Row, Col, Container } from "react-bootstrap";
import { Item } from "./Item";
import { Slider } from "@lifarl/react-scroll-snap-slider";

type ItemMovie = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
};

type ItemsListProps = {
  items: ItemMovie[];
  title: string;
};

export const ItemsList = ({ items, title }: ItemsListProps): JSX.Element => {
  return (
    <Container className={`wrapper-row-item mt-3`}>
      <h4 className="mb-4">{title}</h4>

      <Row className={`g-3 row-items`}>
        <Slider slideWidth={215}>
          {items.map((item) => (
            <Col key={item.id}>
              <Item item={item} />
            </Col>
          ))}
        </Slider>
      </Row>

      <hr />
    </Container>
  );
};
