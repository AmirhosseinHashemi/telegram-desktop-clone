import {useEffect, useRef} from "react";

function useInsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      const handleClick = (e) => {
        if (ref.current && ref.current.contains(e.target)) handler();
      };

      document.documentElement.addEventListener(
        "click",
        handleClick,
        listenCapturing
      );

      return () => {
        document.documentElement.removeEventListener(
          "click",
          handleClick,
          listenCapturing
        );
      };
    },
    [handler, listenCapturing]
  );

  return ref;
}

export default useInsideClick;
