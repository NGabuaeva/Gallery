import { useRef, useEffect, useState } from "react";

export function useHorizontalScroll() {
  const elRef = useRef(null);
  const [yMovement, setYMovement] = useState(0)
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY !== yMovement) {
          e.preventDefault();
          setYMovement(e.deltaY)
        }
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}
