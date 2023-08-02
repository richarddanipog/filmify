import axios from "axios";
import movieTrending from "../data/movieTrending.json"; //remove this
import tvTrending from "../data/tvTrending.json"; //remove this
import movie from "../data/movie.json"; //remove this
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Banner } from "../components/Banner/Banner";
import { ItemsList } from "../components/ItemsList/ItemsList";
import { IMovie } from "../interfaces/movie.interface";
import { ITVSeries } from "../interfaces/tvSeries.interface";
import BlogCard from "../components/BlogCard/BlogCard";
import Loading from "../components/Loading/Loading";

const { REACT_APP_API_KEY, REACT_APP_TMDB_URL } = process.env;

const Home = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [tvSeries, setTvSeries] = useState<ITVSeries[]>([]);
  const [randomItem, setRandomItem] = useState<any>();

  const getRandomItemFromArray = (array: any) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    setRandomItem(array[randomIndex]);
  };

  const getTrendMovies = () => {
    const url = `${REACT_APP_TMDB_URL}/trending/movie/day?api_key=${REACT_APP_API_KEY}`;

    axios.get(url).then(({ data }) => {
      const { results } = data;
      setMovies(results);
      getRandomItemFromArray(results);
    });
  };

  const getTrendTvSeries = () => {
    const url = `${REACT_APP_TMDB_URL}/trending/tv/day?api_key=${REACT_APP_API_KEY}`;

    axios.get(url).then(({ data }) => {
      setTvSeries(data.results);
      setLoading(false);
    });
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   getTrendMovies();
  //   getTrendTvSeries();
  // }, []);

  useEffect(() => {
    // Test ONLY
    setMovies(movieTrending.results);
    setTvSeries(tvTrending.results);
    setRandomItem(movie);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container fluid className="p-0">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Banner ItemId={randomItem?.id} />
          <ItemsList items={movies} title={"Movies Trending"} />
          <ItemsList items={tvSeries} title={"TV Series Trending"} />
          <BlogCard item={randomItem} />
        </>
      )}
    </Container>
  );
};

export default Home;
