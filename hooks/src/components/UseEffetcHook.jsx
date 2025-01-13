import { useEffect } from "react";

const UseEffectHook = () => {
  const fetchUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <h1>Use Effect Hook</h1>
    </div>
  );
};
export default UseEffectHook;
