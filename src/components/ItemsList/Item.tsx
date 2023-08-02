import { Card, Nav } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

export const Item = ({ item }: any) => {
  return (
    <Nav.Link
      to={`details/${item.media_type}/${item.id}`}
      as={NavLink}
      className="h-100"
    >
      <Card className="item-card">
        <Card.Img
          className="rounded"
          variant="top"
          src={`http://image.tmdb.org/t/p/original${item.poster_path}`}
          style={{ objectFit: "cover" }}
        />
        <div className="score-rating">
          <StarFill style={{ color: "#f5c518" }} />
          {item.vote_average.toFixed(1)}
        </div>
      </Card>
    </Nav.Link>
  );
};
