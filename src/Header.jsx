import chefClaudeIcon from '/chef-claude-icon.png';

const Header = () => {
    return (
        <header>
            <div className="header__logo">
                <img
                    src={chefClaudeIcon}
                    alt="Chef Claude Icon" className="header__logo-image" />
                <span className="header__logo-text">
                    Chef Claude
                </span>
            </div>
        </header>
    )
}


export default Header;