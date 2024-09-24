import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import RecipeDetails from './Pages/RecipeDetails';


function Layout(){
   return(
    <div>
       <Navbar/>
         <Outlet/>
         <Footer/>
    </div>
   )
}

function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes/:id" element={<RecipeDetails/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
