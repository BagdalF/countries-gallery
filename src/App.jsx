import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import useFetch from "./utils/useFetch.js";

//components imports
import { Navegation } from "./components/Navegation.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./components/Home.jsx";
import { Stats } from "./components/Stats.jsx";

export const App = (props) => {
  const [permData, setPermData] = useState([]);
  const [value, setValue] = useState("");
  const [graph, setGraph] = useState("population");
  // eslint-disable-next-line no-unused-vars
  const [flag, setFlag] = useState({
    name: true,
    capital: false,
    population: false,
  });
  // eslint-disable-next-line no-unused-vars
  let [data, setData] = useState([]);
  data = useFetch(value, flag, graph, setPermData);

  const NotFound = (props) => (
    <h1>The page you're looking for was not found</h1>
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Navegation />

        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  data={data}
                  value={value}
                  setValue={setValue}
                  permData={permData}
                />
              }
            />
            <Route
              exact
              path="/stats"
              element={
                <Stats
                  setGraph={setGraph}
                  graph={graph}
                  data={data}
                  value={value}
                />
              }
            />
            <Route element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};