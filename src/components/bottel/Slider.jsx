import { Typography, Grid } from "@mui/material";
import { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import ThreeSixty from "react-360-view";
import "./Slider.css";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customColors.setStripes}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.customColors.soul}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.customColors.soul}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColors.soul}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.customColors.soul}
      />
    </group>
  );
}

const Slider = () => {
  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [soul, setSoul] = useState("#ffffff");

  const mainRef = useRef(null);

  // useEffect(() => {
  //   const onScroll = () => {
  //     const scrollPos = window.scrollY + window.innerHeight;
  //     console.log("scrollPos", scrollPos);
  //     if (scrollPos >= 1200) {
  //       mainRef.current.style.transform =
  //         "rotate(" + window.pageYOffset + "deg)";
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <Grid className="slider_container">
      <div className="shoe-card">
        <div className="product-canvas">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight />
              <spotLight
                intensity={0.9}
                angle={0.1}
                penumbra={1}
                position={[11, 15, 10]}
                castShadow
              />
              <Model
                customColors={{ mesh: mesh, stripes: stripes, soul: soul }}
              />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate={true}
              />
            </Suspense>
          </Canvas>
        </div>
        {/* <h2>Color chooser</h2>
          <div className="colors">
            <div>
              <input
                type="color"
                id="mesh"
                name="mesh"
                value={mesh}
                onChange={(e) => setMesh(e.target.value)}
              />
              <label for="mesh">Main</label>
            </div>

            <div>
              <input
                type="color"
                id="stripes"
                name="stripes"
                value={stripes}
                onChange={(e) => setStripes(e.target.value)}
              />
              <label for="stripes">Stripes</label>
            </div>
            <div>
              <input
                type="color"
                id="soul"
                name="soul"
                value={soul}
                onChange={(e) => setSoul(e.target.value)}
              />
              <label for="soul">Soul</label>
            </div>
          </div> */}
      </div>
    </Grid>
  );
};

export default Slider;
