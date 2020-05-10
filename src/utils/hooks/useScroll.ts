import React from "react";

function useScrollEvent<T extends (e: WindowEventMap["scroll"], ...args: any[]) => any>(listener: T, deps: React.DependencyList = []) {
  React.useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    }
  }, [deps, listener]);
}

export default useScrollEvent;