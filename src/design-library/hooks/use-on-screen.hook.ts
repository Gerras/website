import { useEffect, useState } from "react";

// Source: https://stackoverflow.com/a/65008608
const useOnScreen = <TRef extends HTMLElement>(
  ref: React.MutableRefObject<TRef | null>
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    if (ref.current) {
      console.log("OBSERVING!!!!!!");
      observer.observe(ref.current);
    }

    // Remove the observer as soon as the component is unmounted
    return () => {
      console.log("REMOVEDDDDDDDDDDDDDDDD");
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

export default useOnScreen;
