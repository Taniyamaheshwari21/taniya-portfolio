import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

const AnimatedGirl = () => {
  const group = useRef();

  const { scene, animations } = useGLTF("src/assets/models/greetmodel.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const first = Object.values(actions)[0];
    first?.play();
  }, [actions]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.8}
      position={[0,-1, 0]}
      rotation={[-0.19, -Math.PI/1.7, 0]}
    />
  );
};

export default AnimatedGirl;
