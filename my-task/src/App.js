import { Menus } from "./Navi";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Comp1, Comp2, Comp3 } from "./MyComps";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Menus/>
    <Routes>
      <Route path="/" exact element={<Comp1/>} />
      <Route path="/second/:dhana" exact element={<Comp2/>} />
      <Route path="/third" exact element={<Comp3/>} />
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;