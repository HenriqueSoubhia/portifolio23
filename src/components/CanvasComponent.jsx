import { Canvas } from "@react-three/fiber";
import Mesh from "./Mesh";
import { OrbitControls } from '@react-three/drei'

const CanvasComponent = ({args}) => {


  return (
    <Canvas style={{ width: "400px", height: "400px" }} gl={{ antialias: true }}>
      <ambientLight intensity={0.6} color="white" />
      <directionalLight position={[5, 5, 5]} color="white" />
      <Mesh args={args}/>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default CanvasComponent;
