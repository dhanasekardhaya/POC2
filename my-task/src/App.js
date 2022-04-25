import { Menus } from "./Navi";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Comp1, Comp2, Comp3 } from "./MyComps";
import { NewAccount } from "./Signup";
import { Login } from "./Login";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Menus/>
    <Routes>
      <Route path="/" exact element={<Login/>} />
      <Route path="/sign" exact element={<NewAccount/>} />
      <Route path="/third" exact element={<Comp3/>} />
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;