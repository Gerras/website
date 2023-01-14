import { useEffect, useState } from 'react';

export type ObservedElement = Readonly<{
  intersectionType: IntersectionType | null;
  rootBounds: DOMRectReadOnly | null;
  elementBounds: DOMRectReadOnly | null;
}>;
type IntersectionType = 'hidden' | 'partial' | 'visible';

const useElementIntersection = <TElement extends HTMLElement>(
  element: TElement | null
): ObservedElement => {
  // const [isIntersecting, setIntersecting] = useState(false);
  const [intersectionType, setIntersectionType] =
    useState<IntersectionType | null>(null);
  const [rootBounds, setRootBounds] = useState<DOMRectReadOnly | null>(null);
  const [elementBounds, setElementBounds] = useState<DOMRectReadOnly | null>(
    null
  );
  // This should return the rootbounds AND the boundrect for the element being tracked
  const observer = new IntersectionObserver(([entry]) => {
    setRootBounds(entry.rootBounds);
    setElementBounds(entry.boundingClientRect);
    if (entry.intersectionRatio === 0) {
      setIntersectionType('hidden');
    }
    if (entry.intersectionRatio < 1) {
      setIntersectionType('partial');
    }
    if (entry.intersectionRatio === 1) {
      setIntersectionType('visible');
    }
  });

  useEffect(() => {
    if (element) {
      observer.observe(element);
    }
    // Remove the observer as soon as the component is unmounted
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [element]);

  return { intersectionType, rootBounds, elementBounds } as const;
};

export default useElementIntersection;
