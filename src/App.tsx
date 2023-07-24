import './App.css';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { PointView } from './components/PointView';

function App (): JSX.Element {
  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 30]}></Sky>
      <ambientLight intensity={0.5}></ambientLight>
      <PointView/>
      <Physics>
        <Ground/>
      </Physics>
    </Canvas>
  );
}

export default App;
