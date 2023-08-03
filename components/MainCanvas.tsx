'use client'

import { Canvas } from "@react-three/fiber";
import MainScene from "./MainScene";
import { Leva } from "leva";
// import { OrbitControls } from "@react-three/drei";

const MainCanvas = () => {
  return (
    <>
      <Leva collapsed />
      <div className="absolute top-0 left-0 w-screen h-screen z-[-1]">
        <Canvas camera={{ position: [0, 0, 7] }} dpr={[1, 2]}>
          <ambientLight intensity={1.0} />
          <MainScene />
        </Canvas>
      </div>
    </>
  );
}

export default MainCanvas;