import './index.css'

const EmojiCard = props => {
  const {eachObject, onEmojiPressed} = props
  const {id, emojiName, emojiUrl} = eachObject

  const onEmojiClicked = () => {
    onEmojiPressed(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" onClick={onEmojiClicked} className="emoji-button">
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
