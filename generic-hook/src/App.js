import { useState } from "react";
import "./App.css";
import useDarkMode from "./hooks/useDarkMode";
import UserCard from "./Components/UserCard";
import Input from "./Components/Input";

function App() {
  //import the useDark mode hook here
  const [value, setValue]= useState("");
  const [isDarkMode, toogleDarkMode]=useDarkMode();

  const captureValue=(val)=>{
    setValue(val);
  }

  return (
    // add the dark-mode class name along with App depending on the boolean value of isDarkMode
    <div data-testid="app-component" className={`App ${isDarkMode ? "dark-mode" : ""}`}>

      <button data-testid="theme-button" className="theme-button" onClick={toogleDarkMode}>{isDarkMode ? "Light" : "Dark"}</button>

      <UserCard
      imageURL={"https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60"}
      avatarShape="round"
      name="user 1"
      title="Software Developer"
      description="Description for user 1"
      backgroundcolor="blue"
      />

      <br />
      <Input
      size="xl"
      type="text"
      variant='outline'
      value={value}
      onChange={captureValue}
      />

      <div data-testid="input-value">Input value is {value}</div>
    </div>
  );
}

export default App;

/*
imageURL for testing;
1. https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60
2. https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60
*/
