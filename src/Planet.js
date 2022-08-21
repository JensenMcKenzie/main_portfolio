/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Yo.Ri (https://sketchfab.com/grox777)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/purple-planet-264eb22207184fc99a5e3b1279a763b8
title: Purple Planet
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {Canvas, useFrame} from "@react-three/fiber";
//Import three.js
import * as THREE from 'three';
export default function Model(props) {

  var xLoc = window.innerWidth / 2;
  var yLoc = window.innerHeight / 2;
  function handle (event) {
    xLoc = event.clientX;
    yLoc = event.clientY;
  }
  document.addEventListener('mousemove', handle);
  useFrame(() => {
    // rotate the planet around its axis relative to the mouse position
    if (xLoc > (window.innerWidth / 2) + (window.innerWidth / 10)) {
      group.current.rotation.y += .00003 * (xLoc - ((window.innerWidth / 2) + (window.innerWidth / 10)));
    }
    else if (xLoc < (window.innerWidth / 2) - (window.innerWidth / 10)) {
      group.current.rotation.y -= .00003 * (Math.abs(xLoc - ((window.innerWidth / 2) + (window.innerWidth / 10))));
    }
    if (yLoc > (window.innerHeight / 2) + (window.innerHeight / 10)) {
      group.current.rotation.x += .00003 * (yLoc - ((window.innerHeight / 2) + (window.innerHeight / 10)));
    }
    else if (yLoc < (window.innerHeight / 2) - (window.innerHeight / 10)) {
      group.current.rotation.x -= .00003 * (Math.abs(yLoc - ((window.innerHeight / 2) + (window.innerHeight / 10))));
    }
    //group.current.rotation.y += 0.01;
  })

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/planet.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Planet" rotation={[0, 0, Math.PI / 2]}>
              <group name="Clouds_0" rotation={[0, 0, -Math.PI / 2]} scale={1.01}>
                <mesh name="Clouds_0_0" geometry={nodes.Clouds_0_0.geometry} material={materials.Clouds_0} />
              </group>
              <mesh name="Planet_0" geometry={nodes.Planet_0.geometry} material={materials.PurplePlanet} />
            </group>
            <group name="Clouds_1" scale={1.02}>
              <mesh name="Clouds_1_0" geometry={nodes.Clouds_1_0.geometry} material={materials.Clouds_1} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/planet.gltf')
