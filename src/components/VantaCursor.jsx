import React, { useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";

const VantaCursor = () => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!effectRef.current && vantaRef.current) {
      effectRef.current = HALO({
        el: vantaRef.current,
        THREE,

        backgroundAlpha: 0,        // 🔑 makes background transparent
        backgroundColor: 0x000000, // ignored when alpha = 0

        amplitudeFactor: 1.8,
        ringFactor: 1,
        rotationFactor: 1,
        size: 0.1,
        speed: 1,

        mouseControls: false,
        touchControls: false,
        gyroControls: false,
      });

    }
    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  // position the Vanta div at mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (vantaRef.current) {
        vantaRef.current.style.left = `${e.clientX - 50}px`;
        vantaRef.current.style.top = `${e.clientY - 50}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
        ref={vantaRef}
        style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "200px",
        height: "400px",

        transform: "translate(-25%, -35%)",
        pointerEvents: "none",
        zIndex: 9999,

        background: "transparent",   // 🔑 important
        mixBlendMode: "screen",      // optional but looks 🔥
        }}
    />
    );
};

export default VantaCursor;
