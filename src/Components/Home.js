import React, { useState, useCallback } from 'react';

const width = 2000;
const height = 3000;
const circleRadius = 30;
const initialMousePosition = { x: width / 2, y: height / 2};

const Home = () => { 
  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  const handleMouseMove = useCallback (event => {
    const {clientX, clientY} = event;
    setMousePosition({ x: clientX, y: clientY })
  }, [setMousePosition]);

  return (
    <div>
      <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r={circleRadius}
        >
        </circle>
      </svg>
    </div>
  )
}

export default Home;
