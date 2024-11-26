import { useState } from "react";
import AddIngredient from "./components/AddIngredient";
import IngredientsList from "./components/IngredientsList";
import Cta from "./components/Cta";
import ClaudeRecipe from "./components/ClaudeRecipe";
import getRecipeFromMistral from "../netlify/functions/ai";

const Main = () => {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState('');

    function addIngredient(newIngredient) {
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }

    function toggleRecipe() {
        getRecipeFromMistral(ingredients)
            .then((recipe) => {
                console.log(recipe)
                setRecipe(recipe)
            })
    }

    return (
        <main>
            <AddIngredient onAdd={addIngredient} />
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} />}
            {ingredients.length > 3 && <Cta toggleRecipe={toggleRecipe} />}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
};

export default Main;
