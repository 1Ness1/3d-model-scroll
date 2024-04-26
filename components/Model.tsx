import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Group } from "three"

useGLTF.preload("/shibahu.glb")

export default function Model() {
  const group = useRef<Group>(null)
  console.log(useGLTF(
    "/shibahu.glb"
  ))
  const { nodes, materials, animations, scene } = useGLTF(
    "/shibahu.glb"
  )

  const { actions } = useAnimations(animations, scene)
  const scroll = useScroll();

  console.log(actions)
  useEffect(() => {
    console.log(actions)
    //@ts-ignore
    actions["Take 001"].play().paused = true
  }, [])
  useFrame(
    () =>
      //@ts-ignore
      (actions["Take 001"].time =
        //@ts-ignore
        (actions["Take 001"].getClip().duration * scroll?.offset) / 4)
  )
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  )
}