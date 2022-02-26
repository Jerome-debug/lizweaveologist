import { useState, useEffect } from "react";

export default function useStartAnimationHook() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return animated;
}
