import { Children, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Category from "./components/Category/Category";

function App() {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://test.backend.urbanoinfotech.com/swagger/?format=openapi"
        );
        const data = await response.json();
        console.log("fetched data", data);
      } catch (error) {
        console.log("Error in fethcing", error);
      }
    };
    fetchData();
  }, []);

  const getNextStep = () => {
    setCurrIndex((prev) => prev + 1);
  };

  const [fields, setFields] = useState({
    number: "",
    otp: "",
  });
  return (
    <div className="app">
      <Stepper index={currIndex}>
        <Login
          label="Enter Mobile no."
          value={fields.number}
          onInput={(text) => setFields((prev) => ({ ...prev, number: text }))}
          onSubmit={getNextStep}
        />
        <Login
          label="Enter OTP / last four digit of your number "
          value={fields.otp}
          onInput={(text) => setFields((prev) => ({ ...prev, otp: text }))}
          onSubmit={getNextStep}
          isOTP
        />
        <Profile  onSubmit={getNextStep} />
        <Category />
      </Stepper>
    </div>
  );
}

function Stepper(props) {
  const { index } = props;
  let children = Children.toArray(props.children);
  return children[index];
}

export default App;
