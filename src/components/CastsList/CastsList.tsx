import { Row, Col, Container } from "react-bootstrap";

type CastsListProps = {
  casts: any[];
};

export const CastsList = ({ casts }: CastsListProps): JSX.Element => {
  return (
    <Container className={`casts-list relative`}>
      <h4>Top Casts</h4>
      <Row lg={2} md={2} sm={1}>
        {casts.slice(0, 12).map((people: any) => (
          <Col className="person g-3" key={people.id}>
            <img
              width={132}
              height={132}
              className="rounded-circle"
              src={
                people.profile_path
                  ? `http://image.tmdb.org/t/p/w132_and_h132_face${people.profile_path}`
                  : "/no_avatar.jpeg"
              }
              alt="avatar picture"
            />

            <div className="m-4 d-flex  justify-content-center flex-column">
              <p>{people.name}</p>
              <p>{people.character}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
