import * as React from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// extend THREE to include TrackballControls
extend({ OrbitControls })

// key code constants
const ALT_KEY = 18;
const CTRL_KEY = 17;
const CMD_KEY = 91;

const Controls = ({}) => {
  const controls = React.useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    // update the view as the vis is interacted with
  });

  return (

  );
};

export default Controls;
