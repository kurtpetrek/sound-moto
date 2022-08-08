import React, { useState } from "react";
import "./App.css";
import Revs from "./Components/Revs";

function App() {
  const [hasLocation, setHasLocation] = useState(false);
  const [positionData, setPositionData] = useState<any>(null);

  const startApp = () =>
    navigator.geolocation.watchPosition((position) => {
      setHasLocation(true);
      setPositionData(position);
      console.log({ position });
      // doSomething(position.coords.latitude, position.coords.longitude);
    });

  if ("geolocation" in navigator) {
    if (!hasLocation) {
      return <button onClick={startApp}>Start App</button>;
    } else {
      return <Revs positionData={positionData} />;
    }
  } else {
    return <div>Service unavailable, no geolocation data access</div>;
  }
}

export default App;
