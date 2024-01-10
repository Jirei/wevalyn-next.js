import { MutableRefObject } from "react";
import { useEffect, useState } from "react";
import { useIntersection } from "react-use";

export function useAppear(elementRef: MutableRefObject<null>) {
  const [hasAppeared, setHasAppeared] = useState(false);
  const intersection = useIntersection(elementRef, {
    root: null,
    threshold: 0,
  });
  useEffect(() => {
    if (intersection?.isIntersecting) setHasAppeared(true);
  }, [intersection?.isIntersecting]);
  return hasAppeared;
}
