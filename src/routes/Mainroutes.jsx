import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Recipe from "../components/Recipe";
import About from "../pages/About";
import Favroite from "../pages/Favroite";
import Create from "../pages/Create";
import PageNotFound from "../pages/PageNotFound";
import Update from "../pages/Update";
import GetStart from "../pages/GetStart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
 


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<GetStart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/create-recipe" element={<Create />} />
            <Route path="/recipes/detail/:id" element={<Recipe />} />
            <Route path="/recipes/update-recipe/:id" element={<Update />} />
            <Route path="/about" element={<About />} />
            <Route path="/favroite" element={<Favroite />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default MainRoutes;
