import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import flightContext from "../context/flightcontext";
import flightData from "../flightData.json";

const rows = flightData;
const columns = [
  "",
  "Flight",
  "Destination",
  "Scheduled time",
  "Arrival zone",
  "Remarks",
];

let dummyColumns = [];
for (let i = 0; i < columns.length - 3; i++) {
  dummyColumns.push(i);
}

export const FlightHandlerModal = () => {
  const flightData = useContext(flightContext);
  return (
    <>
      {flightData?.showFlights && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "yellow" }}>
                <TableCell align="left" sx={{ fontWeight: "bold" }}>
                  Image
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  ARRIVALS
                </TableCell>
                {dummyColumns.map((i) => (
                  <TableCell />
                ))}
                <TableCell
                  align="right"
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  16:53
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "yellow" }}>
                {columns.map((item) => (
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.Flight}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: "black",
                  }}
                >
                  <TableCell align="left" sx={{ color: "white" }}>
                    {row.image}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    {row.Flight}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    {row.Destination}
                  </TableCell>
                  <TableCell align="left" sx={{ color: "yellow" }}>
                    {row["Scheduled time"]}
                  </TableCell>
                  <TableCell align="left" sx={{ color: "yellow" }}>
                    {row["Arrival zone"]}
                  </TableCell>
                  <TableCell align="left" sx={{ color: "yellow" }}>
                    {row.Remarks}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
