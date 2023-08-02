import React, { Suspense } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Movies } from "./pages/Movies";
import { Navbar } from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";

const Home = React.lazy(() => import("./pages/Home"));
const ItemDetails = React.lazy(() => import("./pages/ItemDetails"));

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <Container className="h-100 p-0" fluid>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/details/:media_type/:id" element={<ItemDetails />} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
};

export default App;
