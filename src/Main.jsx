import { useState } from "react";
import AddIngredient from "./components/AddIngredient";
import IngredientsList from "./components/IngredientsList";
import Cta from "./components/Cta";
import ClaudeRecipe from "./components/ClaudeRecipe";
import getRecipeFromMistral from "../netlify/functions/ai";

const Main = () => {
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState(null);

    function addIngredient(newIngredient) {
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }

    function deleteIngredient(ingredient) {
        setIngredients((prevIngredients) => prevIngredients.filter((i) => i !== ingredient));
    }

    function toggleRecipe() {
        setLoading(true);
        getRecipeFromMistral(ingredients)
            .then((recipe) => {
                console.log(recipe)
                setRecipe(recipe)
                setLoading(false)
            })
    }

    return (
        <main>
            <AddIngredient onAdd={addIngredient} length={ingredients.length} />
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} removeIngredient={deleteIngredient} />}
            {ingredients.length > 3 && <Cta loading={loading} toggleRecipe={toggleRecipe} />}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
};

export default Main;
