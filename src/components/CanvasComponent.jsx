import { Canvas } from "@react-three/fiber";
import Mesh from "./Mesh";
import { OrbitControls } from '@react-three/drei'

const CanvasComponent = ({args}) => {


  return (
    <Canvas>
      <Mesh args={args}/>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default CanvasComponent;
