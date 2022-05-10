import React, { useState, FC } from "react";
import Registration from "./registration";
import Login from "./login";
import Button from "./components/Button";
import "./index.css";

const App: FC = () => {
  const [change, setIsChage] = useState(false);
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
