import { useRef, useState } from "react";

const UseRefHook = () => {
  const ref = useRef();
  const [count, setCount] = useState(0);
  console.log(ref);

  return (
    <div>
      <h1>UseRef Hook </h1>
      <p>ref value : {ref.current}</p>
      <button onClick={() => ref.current++}>Increment</button>
      <p>useState value : {count}</p>
      <button onClick={() => setCount(() => count + 1)}>Increment count</button>
      <input type="text" ref={ref} />
    </div>
  );
};
export default UseRefHook;
