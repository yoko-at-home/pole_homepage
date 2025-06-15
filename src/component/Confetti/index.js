import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";

export const ConfettiSection = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState("");
  const confetiRef = useRef(null);

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);

  return (
    <>
      <div className="relative z-50 h-screen w-screen p-0" ref={confetiRef}>
        <Confetti numberOfPieces={150} width={width} height={height} />
      </div>
    </>
  );
};

export const ConfettiSmall = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState("");
  const confetiRef = useRef(null);

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);

  return (
    <>
      <div className="relative z-50 h-40 w-full p-0" ref={confetiRef}>
        <Confetti numberOfPieces={150} width={width} height={height} />
      </div>
    </>
  );
};
