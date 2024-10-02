import { useState, useEffect } from "react";
import { filterCountries } from "./countries";

export const useFetch = (value, flag, graph, setPermData) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = "https://restcountries.com/v2/all";
    try {
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  useEffect(() => {
    (async function () {
      let result = await fetchData();
      setPermData(result);
      let filtered = filterCountries(result, value);
      setData(filtered);
    })();
  }, [value, flag, graph, setPermData]);
  return data;
};

export default useFetch;
