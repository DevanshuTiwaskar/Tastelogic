import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { Link } from "react-router-dom";
import RecipeTamplate from "../components/RecipeTamplate";

const Recipes = () => {

    const {data} = useContext(recipecontext)

   const showRecipies = data.map((recipe) => <RecipeTamplate key={recipe.id} recipe={recipe}/> )


    return <div>

        
            <Link
                className="absolute right-[10%] bg-green-400 px-4 py-2 rounded"
                to="/recipes/create-recipe"
            >
                Create Recipe
            </Link>
         {data.length > 0 ? showRecipies : "recipe not Found"}
    </div>;
};

export default Recipes;
