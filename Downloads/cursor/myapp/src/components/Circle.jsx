import { forwardRef } from "react";

const Circle = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute w-20 h-20 rounded-full border border-red-600/20  bg-black  "
      style={{ left: 0, top: 0 }}
    >
      {" "}
    </div>
  );
});

export default Circle;
