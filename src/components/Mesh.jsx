import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Mesh = ({args}) => {
  const meshRef = useRef();

  // Atualize a cena a cada quadro
  useFrame(() => {
    // Faça as alterações na cena aqui
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={args}/>
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

export default Mesh;
