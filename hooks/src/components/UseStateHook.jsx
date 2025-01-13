import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({ FName: "", LName: "", email: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <h1>Use State Hook</h1>
      <p>
        useState hook in react is allow functional component to declare a state
        variable and provide function to update them
      </p>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <p>User Form</p>
      <p>Hii {formData.name}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        <input
          type="text"
          name="FName"
          placeholder="Enter first name"
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <input
          type="text"
          name="LName"
          placeholder="Enter last name"
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UseStateHook;
