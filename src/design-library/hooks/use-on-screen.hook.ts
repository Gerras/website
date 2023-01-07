import { useEffect, useState } from "react";

// Source: https://stackoverflow.com/a/65008608
const useOnScreen = <TElement extends HTMLElement>(
  element: TElement | null
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    console.log("HOOK REF", element);
    if (element) {
      console.log("OBSERVING!!!!!!");
      observer.observe(element);
    }

    // Remove the observer as soon as the component is unmounted
    return () => {
      console.log("REMOVEDDDDDDDDDDDDDDDD");
      observer.disconnect();
    };
  }, [element]);

  return isIntersecting;
};

export default useOnScreen;
