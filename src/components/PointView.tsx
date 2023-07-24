import { PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export function PointView (): JSX.Element {
  const { camera, gl } = useThree();
  return (
        <PointerLockControls
            args={[camera, gl.domElement]}
        />
  )
}
