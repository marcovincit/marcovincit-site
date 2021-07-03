import { useEffect, useState } from "react";

export default function useCursorPosition() {
  const [cursorPositionX, setCursorPositionX] = useState(0);
  const [cursorPositionY, setCursorPositionY] = useState(0);

  useEffect(() => {
    function updateCursorPosition(e) {
      setCursorPositionX(e ? e.clientX : null);
      setCursorPositionY(e ? e.clientY : null);
    }

    window.addEventListener("mousemove", updateCursorPosition);

    updateCursorPosition();

    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  return { cursorPositionX, cursorPositionY };
}
