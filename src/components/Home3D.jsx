import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  ScrollControls,
  useScroll,
} from "@react-three/drei";

/* ===================== MODEL ===================== */

const Model = () => {
  const gltf = useGLTF("/src/assets/models/hero.glb");

  return (
    <group
      rotation={[0, -0.6, 0]}
      scale={5}
      position={[0.5, -0.4, 0]}
    >
      <primitive object={gltf.scene} />
    </group>
  );
};

/* ===================== CAMERA + SCROLL ===================== */

const SceneController = ({ controlsRef, setTextProgress }) => {
  const scroll = useScroll();

  useFrame((state) => {
    // 3D zoom
    const zoomOutZ = 2 + scroll.offset * 7;
    state.camera.position.z = zoomOutZ;
    state.camera.lookAt(0, 0, 0);

    // Enable rotation only while hero is visible
    if (controlsRef.current) {
      controlsRef.current.enabled = scroll.offset < 0.95;
    }

    // 🔑 DRIVE TEXT FROM SAME SCROLL
    setTextProgress(scroll.offset);
  });

  return null;
};

/* ===================== MAIN ===================== */

const Home3D = () => {
  const controlsRef = useRef();
  const [textProgress, setTextProgress] = React.useState(0);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* ===================== CANVAS ===================== */}
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 2], fov: 45 }}
        gl={{ alpha: false }}
      >
        <color attach="background" args={["#0f172a"]} />

        <ambientLight intensity={1} />
        <directionalLight position={[15, 5, 12]} intensity={1.2} />
        <directionalLight position={[-15, 5, 12]} intensity={2} />

        <Suspense fallback={null}>
          <ScrollControls pages={1} damping={0.25}>
            <Model />
            <SceneController
              controlsRef={controlsRef}
              setTextProgress={setTextProgress}
            />
          </ScrollControls>
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          enableRotate
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.18}
          rotateSpeed={0.6}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>

      {/* ===================== TEXT OVERLAY ===================== */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="flex h-full items-center px-20">
          <div
            style={{
              opacity: Math.min(textProgress * 2, 1),
              transform: `translateY(${40 - textProgress * 40}px)`,
              transition: "opacity 0.15s linear, transform 0.15s linear",
            }}
          >
            <h1 className="text-[6rem] font-bold leading-none text-[#eeeeeece]">
              Taniya<br />Maheshwari
            </h1>

            <div
              className="inline-block mt-6"
              style={{
                opacity: Math.max((textProgress - 0.15) * 2, 0),
                transform: `translateY(${20 - textProgress * 20}px)`,
                
              }}
            >
              <span className="inline-block -rotate-6 bg-[#1f3b7a] px-4 py-2 text-white font-semibold tracking-widest">
                SOFTWARE DEVELOPER
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3D;
