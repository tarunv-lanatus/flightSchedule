import { Button } from "@mui/material";
import React, { useContext } from "react";
import flightContext from "../context/flightcontext";

export const FlightManagementTable = () => {
  const flightData = useContext(flightContext);
  return (
    <>
      <Button
        variant={"contained"}
        onClick={() => flightData?.setShowFlights(!flightData?.showFlights)}
      >
        Project
      </Button>
    </>
  );
};
