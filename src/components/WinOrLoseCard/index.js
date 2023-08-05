import './index.css'

const WinOrLoseCard = props => {
  const {score, onPlayAgainButtonClicked} = props

  const onClickPlayAgainButton = () => {
    onPlayAgainButtonClicked()
  }

  const result = score === 12 ? 'Won' : 'Loss'
  const appropritateUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-or-lose-page-container">
      <div className="header">
        <div className="header-first-box">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <p>Emoji Game</p>
        </div>
      </div>

      <div className="win-or-loss-body-container">
        <div className="win-or-loss-card-container">
          <div className="image-container">
            <img
              src={appropritateUrl}
              alt="win"
              className="win-or-loss-image"
            />
          </div>
          <div className="content-container">
            <h1 className="you-won-heading">You {result}</h1>
            <p className="best-score-para">Best Score</p>
            <p className="scores-heading">{score}/12</p>
            <button
              className="play-again-button"
              type="button"
              onClick={onClickPlayAgainButton}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
