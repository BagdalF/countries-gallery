import { Country } from "./Country";
import { Input } from "reactstrap";

export const Home = ({ data = [], value, setValue, permData = [] }) => {
  const onChange = (e) => setValue(e.target.value);

  return (
    <>
      <div className="intro-wrapper row g-4 d-flex" style={{ margin: "auto" }}>
        <h1>World Countries Data</h1>
        <h4 style={{ fontWeight: "400" }}>
          There are {permData.length} countries in the api.
        </h4>
        {value !== "" ? (
          <p className="feedback">
            {data.length} satisfied the search criteria
          </p>
        ) : (
          ""
        )}

        <div className="search-wrapper col-8 justify-content-evenly">
          <Input
            id="exampleSearch"
            name="search"
            placeholder="Search countries, capitals and languages"
            type="search"
            onChange={onChange}
            value={value}
            autoFocus
          />
        </div>
      </div>

      <div className="gallery-wrapper row g-4 justify-content-evenly">
        {data && data.map((country) => <Country country={country} />)}
      </div>
    </>
  );
};
