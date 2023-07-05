// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiListItem, emojiClick} = props
  const {id, emojiName, emojiUrl} = emojiListItem

  const emojiId = () => {
    emojiClick(id)
  }

  return (
    <li className="emoji-eachList-item">
      <p>{id}</p>
      <button type="button" onClick={emojiId}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
