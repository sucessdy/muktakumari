import { useRef , React} from "react";
import Circle from "./components/Circle";
function App() {
  const rootRef = useRef();
  const circleRef = useRef();
  const handleMouseMove = (event) => {
    const circle = circleRef.current;

    setTimeout(() => {
      if (circle) {
        circle.style.left = `${event.clientX}px`;
        circle.style.top = `${event.clientY}px`;

        console.log("move ", circleRef);
      }
    }, 200);
  };

  return (
    <>
      <div ref={rootRef} onMouseMove={handleMouseMove}>
        <div className="h-screen relative ">
          {" "}
          <h1 className="text-black">helllooslks </h1>
          <Circle ref={circleRef} />
        </div>{" "}
      </div>
    </>
  );
}

export default App;
