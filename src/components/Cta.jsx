import PropTypes from 'prop-types'

const Cta = ({ toggleRecipe }) => {
    return (
        <div className="cta">
            <div className="cta__content">
                <h3 className="cta__content-title">Ready to get started?</h3>
                <p className="cta__content-para">Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={toggleRecipe} className="cta__button">Get a recipe</button>
        </div>
    )
}

Cta.propTypes = {
    toggleRecipe: PropTypes.func.isRequired,
}

export default Cta;