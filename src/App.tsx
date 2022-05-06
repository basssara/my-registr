import React, { useState } from "react";
import Registration from "./registration";
import Login from "./login";
import Button from "./components/Button";
import "./index.css";

function App() {
  const [change, setIsChage] = useState<boolean>(false);
  return (
    <div>
      <div>
        <div>
          {change ? <Registration /> : <Login />}
          <Button
            handleClick={(e) => {
              change ? setIsChage(false) : setIsChage(true);
            }}
          >
            {change ? <p>Sign In</p> : <p>Sign Up</p>}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
