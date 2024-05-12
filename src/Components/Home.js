import React, { useState, useEffect, useCallback } from 'react';
import * as d3 from "d3";
import { message } from './Message';

const gistJsDelivrUrl =
    "https://gist.githubusercontent.com/kendalenz/32ca10c126219f8c706d3298d1c9cf1d/raw/6dd746ac16877b3c6b3c04d55536d0eba032a54f/cssNamedColors.csv";

const Home = () => { 
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(gistJsDelivrUrl).then(setData);
  }, []);

  return (
    <pre>
      {data ? message(data): 'Loading...'}
    </pre>
  )
}

export default Home;
