import { useEffect, useState } from "react"

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const elementSize = () => width < 481 ? 32 : 48;

  return elementSize;
}; 