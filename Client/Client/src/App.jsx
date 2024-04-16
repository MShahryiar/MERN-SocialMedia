import {BrowserRouter, Routes, Route} from "react-router-dom"
import Auth from "../src/Screens/Auth"
import Home from "../src/Screens/Home"

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path="/home" element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
