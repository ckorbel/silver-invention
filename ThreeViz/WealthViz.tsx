import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface WealthVizProps {
  median: any;
  bezos: any;
  layout: "grid" | "spiral";
}

const WealthViz: React.FC<WealthVizProps> = ({ median, bezos, layout }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#252934");
        }}
      >
        <OrbitControls />
        <ambientLight color="#ffffff" intensity={0.1} />
        <hemisphereLight
          color="#ffffff"
          skyColor="#ffffbb"
          groundColor="#080820"
          intensity={1.0}
        />
        <hemisphereLight
          color="#ffffff"
          skyColor="#ffffbb"
          groundColor="#080820"
          intensity={1.0}
        />
        {bezos.map((d: any, i: any) => {
          const x = (i % 30) * 1.05;
          const y = Math.floor(i / 30) * 1.05;
          const z = 0;
          return (
            <mesh
              key={d.id}
              position={[x, y, z]}
              rotation={[Math.PI * 0.5, 0, 0]}
            >
              <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
              <meshStandardMaterial attach="material" color="#118C4F" />
            </mesh>
          );
        })}
      </Canvas>
    </div>
  );
};

export default WealthViz;
