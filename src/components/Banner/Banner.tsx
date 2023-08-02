import { useEffect, useState } from "react";
import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_TMDB_URL } = process.env;

export const Banner = ({ ItemId }: { ItemId: string }): JSX.Element => {
  const [imagePath, setImagePath] = useState(
    "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg"
  );

  // useEffect(() => {
  //   if (ItemId) {
  //     const url = `${REACT_APP_TMDB_URL}/movie/${ItemId}/images?api_key=${REACT_APP_API_KEY}`;
  //     axios
  //       .get(url)
  //       .then(function (response) {
  //         console.log(response.data);
  //         setImagePath(response.data.backdrops[0].file_path);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   }
  // }, [ItemId]);

  return (
    <div className="wrapper-banner">
      {imagePath && (
        <div
          className="banner"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(http://image.tmdb.org/t/p/original${imagePath})`,
          }}
        >
          <div>
            <h1>Welcome.</h1>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>

            <div className="input-wrapper">
              <input
                type="search"
                id="form1"
                placeholder="Search for a movie, tv show..."
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
