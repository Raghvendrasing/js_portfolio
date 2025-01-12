import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";  // Import necessary components for 3D rendering

import CanvasLoader from "../Loader";  // Loader component to show while assets are loading

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);  // Load the texture for the decal (icon)

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb" // Light color for the 3D shape
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}  // Apply the decal to the geometry (icon image)
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}  // Ensure the canvas can save the image
    >
      <Suspense fallback={<CanvasLoader />}>  {/* Show a loader while 3D content is loading */}
        <OrbitControls enableZoom={false} />  {/* Disable zoom controls */}
        <Ball imgUrl={icon} />  {/* Pass the icon to the Ball component */}
      </Suspense>

      <Preload all />  {/* Preload all 3D assets to ensure smooth rendering */}
    </Canvas>
  );
};

export default BallCanvas;
