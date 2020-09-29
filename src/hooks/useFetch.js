import Axios from "axios";
import React from "react";

export const useFetch = (url) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(url);
        const data = await response.data;
        setResponse(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};
