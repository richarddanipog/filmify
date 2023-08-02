import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IItemDetails } from "../interfaces/itemDetails.interface";
import movieDetailTest from "../data/movieDetails.json"; // remove this
import castsData from "../data/credits-movie.json"; // remove this
import Loading from "../components/Loading/Loading";
import { CastsList } from "../components/CastsList/CastsList";
import { ICast } from "../interfaces/cast.interface";
import { ICrew } from "../interfaces/crew.interface";

const { REACT_APP_API_KEY, REACT_APP_TMDB_URL } = process.env;

const ItemDetails = (): JSX.Element => {
  const [itemData, setItemData] = useState<IItemDetails>();
  const [casts, setCasts] = useState<ICast[]>([]);
  const [directors, setDirectors] = useState<ICrew[]>([]);
  const [writers, setWriters] = useState<ICrew[]>([]);
  const { id, media_type } = useParams<{ id: string; media_type: string }>();

  const getItemData = useCallback(async (id: string) => {
    const url = `${REACT_APP_TMDB_URL}/${media_type}/${id}?api_key=${REACT_APP_API_KEY}`;

    const { data } = await axios.get(url);
    setItemData(data);
  }, []);

  const getItemCasts = useCallback(async (id: string) => {
    const url = `${REACT_APP_TMDB_URL}/${media_type}/${id}/credits?api_key=${REACT_APP_API_KEY}`;

    const { data } = await axios.get(url);
    setCasts(data.cast);
    setDirectors(getItemDirectors(data.crew));
    setWriters(getItemWriters(data.crew));
  }, []);

  const getItemWriters = (data: any) => {
    return data.filter((c: any) => c.job === "Writer");
  };

  const getItemDirectors = (data: any) => {
    return data.filter(
      (c: any) => c.job === "Director" || c?.known_for_department === "Writing"
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (id) {
      getItemData(id);
      getItemCasts(id);
    }

    // setTimeout(() => {
    //   setItemData(movieDetailTest);
    //   setCasts(castsData.cast);
    //   setDirectors(castsData.crew.filter((c: any) => c.job === "Director"));
    //   setWriters(castsData.crew.filter((c: any) => c.job === "Writer"));
    // }, 2000);
  }, [id, getItemCasts, getItemData]);

  return (
    <Container className="item-details">
      {!itemData ? (
        <Loading />
      ) : (
        <>
          <Container
            className="item-details-img mt-3 d-flex justify-content-center align-items-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${itemData?.backdrop_path}?&w=3840&q=75)`,
            }}
          ></Container>

          <hr />
          <Container className="item-details-content">
            <img
              src={`http://image.tmdb.org/t/p/w500${itemData?.poster_path}`}
              alt="poster image"
            />
            <Container className="item-details-content-text">
              <h2>{itemData.title ? itemData.title : itemData.name}</h2>
              <h6>{itemData.tagline}</h6>
              <div className="genres">
                {itemData.genres.map(({ id, name }) => (
                  <span key={id}>{name}</span>
                ))}
              </div>

              <Container className="mt-4 overview">
                <h6>Overview</h6>
                <p>{itemData?.overview}</p>
              </Container>

              <Container className="crew">
                <div>Directors</div>
                <ul>
                  {directors.map((w) => (
                    <li>&otimes; {w.name}</li>
                  ))}
                </ul>
              </Container>

              <Container className="crew" style={{ borderBottom: "1px solid" }}>
                <div>Writers</div>
                <ul>
                  {writers.map((w) => (
                    <li>&otimes; {w.name}</li>
                  ))}
                </ul>
              </Container>
            </Container>
          </Container>
          <hr />
          <CastsList casts={casts} />
        </>
      )}
    </Container>
  );
};

export default ItemDetails;
