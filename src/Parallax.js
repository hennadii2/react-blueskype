import { useState } from "react";
import {
  AnimatedBlock,
  useMeasure,
  useScroll,
  useAnimatedValue
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
  const y = useAnimatedValue(0, {
    tension: 200,
    friction: 30,
    immediate: true
  });
  const image0Offset = useAnimatedValue(0);
  const image1Offset = useAnimatedValue(0);
  const image2Offset = useAnimatedValue(0);
  const image3Offset = useAnimatedValue(0);
  const mountainOffset = useAnimatedValue(0);

  const bind = useMeasure(({ height }) => {
    setHeight(height);
  });

  useScroll(
    ({ scrollY }) => {
      y.value = -scrollY;

      image0Offset.value = -scrollY * 0.4;
      image1Offset.value = -scrollY * 0.6;
      image2Offset.value = -scrollY * 0.8;
      image3Offset.value = -scrollY * 1.2;
      mountainOffset.value = -scrollY * 0.5;
    },
    [height]
  );

  return (
    <>
      <AnimatedBlock
        {...bind()}
        style={{
          position: "fixed",
          width: "100vw",
          top: 0,
          left: 0,
          translateY: y.value
        }}
        className="App"
      >
        <AnimatedBlock
          style={{
            width: "100%",
            height: "150vh",
            // backgroundColor: "#3399ff",
            backgroundImage: `url(${Image0})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            translateY: image0Offset.value
          }}
        />

        <AnimatedBlock
          style={{
            width: "100%",
            height: "150vh",
            // backgroundColor: "red",
            backgroundImage: `url(${Image1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            translateY: image1Offset.value
          }}
        />
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <AnimatedBlock
            style={{
              fontSize: 180,
              position: "absolute",
              fontWeight: "bold",
              top: "44%",
              color: "#fff",
              left: "50%",
              translateX: "-50%",
              translateY: mountainOffset.value
            }}
          >
            MOUNTAINS
          </AnimatedBlock>
        </div>
        <AnimatedBlock
          style={{
            width: "100%",
            height: "150vh",
            // backgroundColor: "green",
            backgroundImage: `url(${Image2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            translateY: image2Offset.value
          }}
        />
        <AnimatedBlock
          style={{
            width: "100%",
            height: "150vh",
            // backgroundColor: "yellow",
            backgroundImage: `url(${Image3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            translateY: image3Offset.value
          }}
        />

        <div style={{ height: 2000 }} />
      </AnimatedBlock>
      <div style={{ height }} />
    </>
  );
}
