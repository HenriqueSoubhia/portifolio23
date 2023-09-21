import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

const Mesh = ({ args }) => {
  const meshRef = useRef();

  // Atualize a cena a cada quadro
  useFrame(() => {
    // Faça as alterações na cena aqui
    meshRef.current.rotation.x -= 0.01;
    meshRef.current.rotation.y -= 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={args} />
      <meshStandardMaterial  color="skyblue" />
    </mesh>
  );
};

export default Mesh;
