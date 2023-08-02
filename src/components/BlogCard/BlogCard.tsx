import { Button, Card, Container } from "react-bootstrap";
import { IMovie } from "../../interfaces/movie.interface";

type BlogProps = {
  item?: IMovie;
};

const BlogCard = ({ item }: BlogProps): JSX.Element => {
  if (!item) return <></>;

  return (
    <Container className="blog-card-wrapper relative d-flex justify-content-center align-items-center">
      <div
        className="blog-card d-flex"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}?&w=3840&q=75)`,
        }}
      >
        <Card>
          <Card.Body>
            <Card.Title className="mb-2">
              {item.title} ({item.original_language.toLocaleUpperCase()})
            </Card.Title>
            <Card.Subtitle className="mb-4">
              Release Date: {item.release_date}
            </Card.Subtitle>
            <Card.Text>{item.overview}</Card.Text>
          </Card.Body>
        </Card>
        <div className="blog-card-button">
          <Button variant="warning">Read More</Button>
        </div>
      </div>
    </Container>
  );
};

export default BlogCard;
