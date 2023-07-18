'use client'

import { Canvas } from "@react-three/fiber";
import MainScene from "./MainScene";
import { Leva } from "leva";
import { OrbitControls } from "@react-three/drei";

const MainCanvas = () => {
  return (
    <>
      <Leva collapsed />
      <Canvas camera={{ position: [4, -2, 7] }} dpr={[1, 2]}>
        <ambientLight intensity={1.0} />
        <MainScene />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={false}
          autoRotateSpeed={3.0}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </>
  );
}

export default MainCanvas;