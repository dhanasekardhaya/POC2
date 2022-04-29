import { Menus } from "./Navi";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Comp1, Comp2, Comp3 } from "./MyComps";
import { NewAccount } from "./Signup";
import { Login } from "./Login";
import { Home } from "./Home";
import { Transactions } from "./Transaction";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Menus/>
    <Routes>
      <Route path="/" exact element={<Login/>} />
      <Route path="/sign" exact element={<NewAccount/>} />
      <Route path="/home" exact element={<Home/>} />
      <Route path="/showt" exact element={<Transactions/>}/>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;