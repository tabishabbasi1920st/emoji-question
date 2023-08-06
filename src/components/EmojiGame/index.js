// Quick Tip

// - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

// const shuffledEmojisList = () => {
//   const {emojisList} = this.props
//   return emojisList.sort(() => Math.random() - 0.5)
// }

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

const initialEmojiClickedList = []

class EmojiGame extends Component {
  // State object
  state = {
    updatedListOfClickedEmojis: initialEmojiClickedList,
    score: 0,
    topScore: 0,
    showResults: false,
    emojiRender: true,
  }

  //   This function is used to show the results of the user weather he/she is failed or passed
  showResultsAndHideEmojis = () => {
    this.setState(prevState => ({
      showResults: !prevState.showResultsAndHideEmojis,
      emojiRender: !prevState.emojiRender,
    }))
  }

  //   This function will run when any emoji will be click.
  onEmojiPressed = id => {
    //   object destructuring from state object
    const {updatedListOfClickedEmojis} = this.state

    // appending the clicked emoji id in the list and incrementing the score.

    this.setState(prevState => ({
      updatedListOfClickedEmojis: [...prevState.updatedListOfClickedEmojis, id],
      score: prevState.score + 1,
    }))

    // Checking is pressed emoji is already present in the list or not.
    const isPressedEmojiAlreadyPresentInList = updatedListOfClickedEmojis.includes(
      id,
    )

    // Applying condition if an emoji is double clicked so it means failed after that it will show the result
    if (isPressedEmojiAlreadyPresentInList) {
      this.showResultsAndHideEmojis()
    }
  }

  settingUpTheTopScore = () => {
    const {score, topScore} = this.state

    if (score > topScore) {
      this.setState({topScore: score})
    }
    this.setState({score: 0})
  }

  hideResultsPage = () => {
    this.setState(prevState => ({
      showResults: !prevState.showResults,
      emojiRender: !prevState.emojiRender,
    }))
  }

  resetList = () => {
    this.setState({updatedListOfClickedEmojis:[]})
  }

  onPlayAgainButtonClicked = () => {
    this.settingUpTheTopScore()
    this.resetList()
    this.hideResultsPage()
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, showResults, emojiRender} = this.state

    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

    return (
      <div className="emoji-game-container">
        {(showResults || score === 12) && (
          <WinOrLoseCard
            onPlayAgainButtonClicked={this.onPlayAgainButtonClicked}
            score={score}
          />
        )}

        {emojiRender && (
          <div className="emoji-navbar-container">
            <NavBar score={score} topScore={topScore} />
            <div className="body">
              <ul>
                {shuffledEmojisList().map(eachObject => (
                  <EmojiCard
                    onEmojiPressed={this.onEmojiPressed}
                    eachObject={eachObject}
                    key={eachObject.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
