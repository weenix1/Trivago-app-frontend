import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MyFooter from "./components/Footer/MyFooter";
import MyNavBar from "./components/NavBar/MyNavBar";

function App() {
  return (
    <BrowserRouter>
      <MyNavBar />

      <Routes>
        {/*  <Route path="/" exact />
        <Route path="/:company" exact element={<Company />} /> */}
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
