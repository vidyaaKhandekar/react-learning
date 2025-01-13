import { createContext } from "react";

const UseContextHook = () => {
  const ThemeContext = createContext("light");

  return (
    <>
      <h1>useContext hook</h1>
    </>
  );
};
export default UseContextHook;
