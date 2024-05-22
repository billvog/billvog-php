import { useMemo } from "react";

export function useIsMobile() {
  const isMobile = useMemo(() => {
    if (!navigator) {
      return false;
    }

    return navigator.userAgent.match(/(iPad|iPhone|iPod|Android|Silk)/gi) !== null;
  }, [navigator]);

  return isMobile;
}
