import "./App.css";
import { FlightHandlerModal } from "./components/FlightHandlerModal";
import { FlightManagementTable } from "./components/FlightManagementTable";
import { FlightProvider } from "./context/FlightProvider";

function App() {
  return (
    <div className="App">
      <FlightProvider>
        <FlightManagementTable />
        <FlightHandlerModal />
      </FlightProvider>
    </div>
  );
}

export default App;
