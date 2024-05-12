import React, { useState, useEffect, useCallback } from 'react';
import * as d3 from "d3";

const gistJsDelivrUrl =
    "https://gist.githubusercontent.com/kendalenz/32ca10c126219f8c706d3298d1c9cf1d/raw/6dd746ac16877b3c6b3c04d55536d0eba032a54f/cssNamedColors.csv";
const width = 2000;
const height = 3000;

const message = data => {
  let message = '';
  message = message + Math.round(d3.csvFormat(data).length / 1024) + ' kb\n';
  message = message + data.length + ' rows\n';
  message = message + data.length + ' colmns';
  return message;
};

const Home = () => { 
  const [data, setData] = useState(null);

  d3.csv(gistJsDelivrUrl).then(data => {
    setData(data);
  })

  return (
    <div>
    Data is {data ? message(data): 'loading'}
    </div>
  )
}

export default Home;
