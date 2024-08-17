import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashLayout from "./Users/DashLayout";
import UserLayout from "./Users/UserLayout";
import Homepage from "./Users/Homepage";
import DasHome from "./Users/DasHome";
import MyListings from "./Users/MyListings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Homepage />} />
           
          </Route>
          <Route path="/dashboard" element={<DashLayout />}>
            <Route index element={< DasHome />} />
            <Route path="mylistings" element={<MyListings />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <h1 className="text-danger">hello world</h1> */}
    </>
  );
}

export default App;
