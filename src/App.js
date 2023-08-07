import { useState, useRef } from "react";
import {
  AnimatedBlock,
  useMeasure,
  useScroll,
  useAnimatedValue,
  Easing
} from "react-ui-animate";
import "./styles.css";

const Image0 =
  "https://s3.amazonaws.com/honeyguide/assets/everest-parallax/mounteverest-0.png";
const Image1 =
  "https://s3.amazonaws.com/honeyguide/assets/everest-parallax/mounteverest-1.png";
const Image2 =
  "https://s3.amazonaws.com/honeyguide/assets/everest-parallax/mounteverest-2.png";
const Image3 =
  "https://s3.amazonaws.com/honeyguide/assets/everest-parallax/mounteverest-3.png";

export default function App() {
  const [height, setHeight] = useState(0);
  const y = useAnimatedValue(0, { tension: 200, friction: 30 });
  const offsetOne = useAnimatedValue(0);
  const offsetTwo = useAnimatedValue(0);
  const offsetThree = useAnimatedValue(0);

  const bind = useMeasure(({ height }) => {
    setHeight(height);
  });

  useScroll(
    ({ scrollY }) => {
      y.value = -scrollY;
      offsetOne.value = -scrollY * 0.2;
      offsetTwo.value = -scrollY * 0.4;
      offsetThree.value = -scrollY * 0.6;
    },
    [height]
  );

  return (
    <>
      <AnimatedBlock
        {...bind()}
        style={{
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
          translateY: y.value
        }}
        className="App"
      >
        <AnimatedBlock
          style={{
            position: "absolute",
            top: 300,
            right: 0,
            backgroundColor: "red",
            width: 200,
            height: 200,
            translateY: offsetOne.value
          }}
        />
        <AnimatedBlock
          style={{
            position: "absolute",
            top: 400,
            right: 100,
            backgroundColor: "green",
            width: 200,
            height: 200,
            translateY: offsetTwo.value
          }}
        />
        <AnimatedBlock
          style={{
            position: "absolute",
            top: 500,
            right: 200,
            backgroundColor: "blue",
            width: 200,
            height: 200,
            translateY: offsetThree.value
          }}
        />
        <h1>Hello CodeSandbox</h1>
        <div style={{ height: 500, backgroundColor: "#e1e1e1" }} />
        <h2>Start editing to see some magic happen!</h2>
        <div style={{ height: 500, backgroundColor: "#3399ff" }} />
        <h2>Start editing to see some magic happen!</h2>
        <div style={{ height: 500, backgroundColor: "#e1e1e1" }} />
        <h2>Start editing to see some magic happen!</h2>
        <div style={{ height: 500, backgroundColor: "#3399ff" }} />
      </AnimatedBlock>
      <div style={{ height }} />
    </>
  );
}
