import { usePlane } from '@react-three/cannon';
import type { Mesh } from 'three';

export function Ground (): JSX.Element {
  const [ref] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }));
  return (
    <mesh ref={ref}>
        <planeGeometry attach='geometry' args={[50, 50, 50]}/>
        <meshStandardMaterial attach='material' color='green' />
    </mesh>
  );
}
