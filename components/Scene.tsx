'use client'

import {Canvas, useThree} from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useProgress, Html, ScrollControls } from "@react-three/drei";
import styles from "../app/page.module.css"

function Loader() {
    const {progress, active} = useProgress();

    return <Html center>{progress.toFixed(1)}</Html>
}

export default function Scene() {
    return (
        <Canvas gl={{antialias: true}} dpr={[1, 1.5]} className={styles.canvas} camera={{ fov: 35, position: [5, 3, 5] }} >
            <directionalLight position={[-5,-5, 5]} intensity={2} />
            <Suspense fallback={<Loader />}>
                <ScrollControls damping={0.4} pages={4}>
                    <Model />
                </ScrollControls>
            </Suspense>
            <Model />
        </Canvas>
    )
}