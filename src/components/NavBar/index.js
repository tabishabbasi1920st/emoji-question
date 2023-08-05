import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <div className="header">
      <li className="header-first-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </li>

      <li className="header-second-box">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </li>
    </div>
  )
}

export default NavBar
