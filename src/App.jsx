import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Body from "./component/body";
import Resturantmenu from "./component/Resturantmenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Body />}></Route>
        <Route path="/resturantmenu/:id" element={<Resturantmenu />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
