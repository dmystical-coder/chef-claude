import PropTypes from 'prop-types'

const AddIngredient = ({ onAdd }) => {
    function addIngredient(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get('ingredient');
        if (!newIngredient) { alert('Please enter an ingredient'); }
        else {
            onAdd(newIngredient);
        }
        event.currentTarget.reset();
    }
    return (
        <form className="form" onSubmit={addIngredient}>
            <input
                aria-label="Add Ingredient"
                type="text"
                name="ingredient"
                className="form__input"
                placeholder="e.g. oregano"
            />
            <button type="submit" className="form__button">
                Add Ingredient
            </button>
        </form>
    );
};

AddIngredient.propTypes = {
    onAdd: PropTypes.func.isRequired
}
export default AddIngredient;
