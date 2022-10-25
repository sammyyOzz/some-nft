import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();
  return (
    <div style={{ position: 'fixed', top: 0 }}>
      <Confetti 
        numberOfPieces={500} 
        tweenDuration={50000}
        gravity={0.2} 
        width={width} 
        height={height} 
        recycle={false}
      />
    </div>
  );
};

export default ConfettiComponent;
