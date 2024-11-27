import PropTypes from 'prop-types'

const IngredientsList = ({ ingredients, removeIngredient, recipe }) => {

    const ingredientsList = ingredients.map((ingredient, index) => (
        <li key={index} className="ingredients-display__list-item">
            {ingredient} {!recipe && <button onClick={() => removeIngredient(ingredient)} className="delete">&times;</button>}
        </li>
    ));
    return (
        <div className="ingredients-display">
            <h2 className="ingredients-display__title">Ingredients on hand:</h2>
            <ul className="ingredients-display__list">{ingredientsList}
            </ul>
        </div>
    );
};

IngredientsList.propTypes = {
    ingredients: PropTypes.array.isRequired,
    removeIngredient: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired
}

export default IngredientsList;
