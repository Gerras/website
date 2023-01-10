import { useEffect, useState } from "react";
import { getViewPortWidth } from "../utils/dom.utils";

// ADD CONFIG OBJECT THAT ALLOWS FOR SPECIFYING A TIMEOUT
export const useViewportWidth = () => {
  // save current window width in the state object
  let [width, setWidth] = useState(getViewPortWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId: number;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      window.clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = window.setTimeout(() => setWidth(getViewPortWidth()), 150);
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return width;
};
