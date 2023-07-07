import "./App.css";
import Sidebar from "./Components/ProfileComponent/Sidebar/Sidebar";
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      {/* <Router />  */}
      <Sidebar />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
