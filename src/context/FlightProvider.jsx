import { useState } from "react";
import flightContext from "./flightcontext";

export const FlightProvider = (props) => {
  const [showFlights, setShowFlights] = useState(false);

  return (
    <flightContext.Provider value={{ showFlights, setShowFlights }}>
      {props.children}
    </flightContext.Provider>
  );
};
