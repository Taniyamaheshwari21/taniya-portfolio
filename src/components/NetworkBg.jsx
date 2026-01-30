import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const POINT_COUNT = 85;
const MAX_DISTANCE = 2;

const NetworkBackground = () => {
  const linesRef = useRef();

  // Generate points once
  const points = useMemo(() => {
    return Array.from({ length: POINT_COUNT }, () => ({
      position: new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(7),
        THREE.MathUtils.randFloatSpread(4),
        THREE.MathUtils.randFloatSpread(6)
      ),
      velocity: new THREE.Vector3(
        THREE.MathUtils.randFloat(-0.002, 0.002),
        THREE.MathUtils.randFloat(-0.002, 0.002),
        THREE.MathUtils.randFloat(-0.002, 0.002)
      ),
    }));
  }, []);

  // Geometry buffers
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(POINT_COUNT * POINT_COUNT * 7), 3)
    );
    geo.setAttribute(
      "color",
      new THREE.BufferAttribute(new Float32Array(POINT_COUNT * POINT_COUNT * 6), 3)
    );
    return geo;
  }, []);

  useFrame(() => {
    let positions = geometry.attributes.position.array;
    let colors = geometry.attributes.color.array;

    let ptr = 0;
    let cptr = 0;

    // Animate points
    points.forEach((p) => {
      p.position.add(p.velocity);

      ["x", "y", "z"].forEach((axis) => {
        if (Math.abs(p.position[axis]) > 3) {
          p.velocity[axis] *= -1;
        }
      });
    });

    // Build lines
    for (let i = 0; i < POINT_COUNT; i++) {
      for (let j = i + 1; j < POINT_COUNT; j++) {
        const dist = points[i].position.distanceTo(points[j].position);

        if (dist < MAX_DISTANCE) {
          const alpha = 1 - dist / MAX_DISTANCE;

          // Positions
          positions[ptr++] = points[i].position.x;
          positions[ptr++] = points[i].position.y;
          positions[ptr++] = points[i].position.z;

          positions[ptr++] = points[j].position.x;
          positions[ptr++] = points[j].position.y;
          positions[ptr++] = points[j].position.z;

          // Color (red/orange with alpha illusion)
          const r = 1.0;
          const g = 0.3 + alpha * 0.4;
          const b = 0.2;

          colors[cptr++] = r * alpha;
          colors[cptr++] = g * alpha;
          colors[cptr++] = b * alpha;

          colors[cptr++] = r * alpha;
          colors[cptr++] = g * alpha;
          colors[cptr++] = b * alpha;
        }
      }
    }

    geometry.setDrawRange(0, ptr / 3);
    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={1}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  );
};

export default NetworkBackground;
