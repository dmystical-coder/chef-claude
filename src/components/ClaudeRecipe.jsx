import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const ClaudeRecipe = ({ recipe }) => {
    return (
        <div className="recipe">
            <h2 className="recipe__title">Chef Claude Recommends:</h2>
            <ReactMarkdown className="recipe__content">{recipe}
            </ReactMarkdown>
        </div>
    )
}

ClaudeRecipe.propTypes = {
    recipe: PropTypes.string.isRequired,
}

export default ClaudeRecipe;