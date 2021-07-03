import { useEffect, useState } from "react";

export default function useDeviceOrientation() {
  const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);

  useEffect(() => {
    function updateDeviceOrientation(e) {
      setAlpha(e !== undefined ? e.alpha : 0);
      setBeta(e !== undefined ? e.beta : 0);
      setGamma(e !== undefined ? e.gamma : 0);
    }

    window.addEventListener("deviceorientation", updateDeviceOrientation);

    updateDeviceOrientation();

    return () =>
      window.removeEventListener("deviceorientation", updateDeviceOrientation);
  }, []);

  return { alpha, beta, gamma };
}
