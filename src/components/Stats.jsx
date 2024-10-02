import { sortCountries, countLanguages } from "../utils/countries";
import { Button, ButtonGroup } from "reactstrap";

export const Bar = ({ country: { name, value } }) => {
  let barStyle = {
    width: (value * 100) / 28 + "%",
  };

  return (
    <div
      className="stats-bar-wrapper row g-0 justify-content-evenly"
      style={{ width: "100vw" }}
    >
      <div className="col-2">
        <h5 style={{ paddingRight: "1rem", textAlign: "right" }}>{name}</h5>
      </div>
      <div className="col-8">
        <div className="stats-bar-filler bg-primary" style={barStyle}>
          <h5>{value}</h5>
        </div>
      </div>
      <div className="col-2">
        <h4 style={{ paddingLeft: "1rem", textAlign: "left", margin: 0 }}>
          {value}
        </h4>
      </div>
    </div>
  );
};

export const Stats = ({ setGraph, graph, data = [], value }) => {
  const changeToPopulationGraph = () => {
    setGraph("population");
  };
  const changeToLanguageGraph = () => {
    setGraph("language");
  };

  const LanguageGraphBars = ({ languages }) => {
    const bars = languages.map((data) => {
      return <LanguageGraph key={data.language} data={data} />;
    });
    return <div className="graphWrapper">{bars}</div>;
  };
  const LanguageGraph = ({ data: { language, count } }) => {
    return (
      <div
        className="stats-bar-wrapper row g-0 justify-content-evenly"
        style={{ width: "100vw" }}
      >
        <div className="col-3">
          <h5 style={{ paddingRight: "1rem", textAlign: "right" }}>
            {language}
          </h5>
        </div>
        <div className="col-6">
          <div
            className="stats-bar-filler bg-primary"
            style={{ width: `${count}%` }}
          >
            <h5>{count.toLocaleString()}</h5>
          </div>
        </div>
        <div className="col-3">
          <h4 style={{ paddingLeft: "1rem", textAlign: "left", margin: 0 }}>
            {count.toLocaleString()}
          </h4>
        </div>
      </div>
    );
  };

  const PopulationGraphBars = ({ populations }) => {
    const bars = populations.map((data) => {
      return <PopulationGraph key={data.name} data={data} />;
    });
    return (
      <div className="graphWrapper">
        <PopulationGraph data={{ name: "World", population: 7693165599 }} />
        {bars}
      </div>
    );
  };
  const PopulationGraph = ({ data: { name, population } }) => {
    const worldPopulation = 7693165599; // World population
    let formattedName;
    if (name === "Russian Federation") formattedName = "Russia";
    else if (name === "United States of America") formattedName = "USA";
    else formattedName = name;

    let barStyle = {
      width: Math.round((population / worldPopulation) * 100) + "%",
    };

    return (
      <div
        className="stats-bar-wrapper row g-0 justify-content-evenly"
        style={{ width: "100vw" }}
      >
        <div className="col-3">
          <h5 style={{ paddingRight: "1rem", textAlign: "right" }}>
            {formattedName}
          </h5>
        </div>
        <div className="col-6">
          <div className="stats-bar-filler bg-primary" style={barStyle}></div>
        </div>
        <div className="col-3">
          <h4 style={{ paddingLeft: "1rem", textAlign: "left", margin: 0 }}>
            {population.toLocaleString()}
          </h4>
        </div>
      </div>
    );
  };

  const mostPopulatedCountries = sortCountries(data, "population").slice(0, 14);
  const mostSpokenLanguages = sortCountries(
    countLanguages(data),
    "count"
  ).slice(0, 16);

  return (
    <div className="graph-wrapper">
      <ButtonGroup className="graph-buttons">
        <Button onClick={changeToPopulationGraph} className="population">
          Population
        </Button>
        <Button onClick={changeToLanguageGraph} className="languages">
          Languages
        </Button>
      </ButtonGroup>

      <h4 className="graph-title">
        {graph === "population" && value === ""
          ? "10 Most populated countries in the world"
          : "10 Most spoken languages in the world"}
      </h4>

      <div className="stats-wrapper">
        {graph === "population" ? (
          <PopulationGraphBars
            populations={mostPopulatedCountries}
            className={graph}
          />
        ) : (
          <LanguageGraphBars
            languages={mostSpokenLanguages}
            className={graph}
          />
        )}
      </div>
    </div>
  );
};
